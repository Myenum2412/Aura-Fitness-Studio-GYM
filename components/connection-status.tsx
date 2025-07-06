"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff, Activity } from "lucide-react"
import { wsManager } from "@/lib/websocket"

export default function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [latency, setLatency] = useState(0)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Monitor WebSocket connection
    const socket = wsManager.connect()

    socket.on("connect", () => {
      setIsConnected(true)
      measureLatency()
    })

    socket.on("disconnect", () => {
      setIsConnected(false)
    })

    const measureLatency = () => {
      const start = Date.now()
      socket.emit("ping", start)
      socket.on("pong", (timestamp: number) => {
        setLatency(Date.now() - timestamp)
      })
    }

    // Measure latency periodically
    const latencyInterval = setInterval(measureLatency, 10000)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      socket.off("connect")
      socket.off("disconnect")
      socket.off("pong")
      clearInterval(latencyInterval)
    }
  }, [])

  const getStatusColor = () => {
    if (!isOnline) return "bg-red-500"
    if (!isConnected) return "bg-yellow-500"
    if (latency > 1000) return "bg-orange-500"
    return "bg-green-500"
  }

  const getStatusText = () => {
    if (!isOnline) return "Offline"
    if (!isConnected) return "Connecting..."
    return `Connected (${latency}ms)`
  }

  return (
    <div className="fixed top-4 left-4 z-40">
      <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {isOnline && isConnected ? (
            <Wifi className="h-3 w-3 text-green-600" />
          ) : (
            <WifiOff className="h-3 w-3 text-red-600" />
          )}
          <div className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
          <span className="text-xs">{getStatusText()}</span>
          {isConnected && <Activity className="h-3 w-3 text-blue-600 animate-pulse" />}
        </div>
      </Badge>
    </div>
  )
}
