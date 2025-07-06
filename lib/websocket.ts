"use client"

import { io, type Socket } from "socket.io-client"

class WebSocketManager {
  private socket: Socket | null = null
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private reconnectDelay = 1000

  connect(): Socket {
    if (this.socket?.connected) {
      return this.socket
    }

    // In a real implementation, this would connect to your WebSocket server
    // For demo purposes, we'll simulate the connection
    this.socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL || "ws://localhost:3001", {
      transports: ["websocket", "polling"],
      timeout: 20000,
      forceNew: true,
    })

    this.socket.on("connect", () => {
      console.log("WebSocket connected")
      this.reconnectAttempts = 0
    })

    this.socket.on("disconnect", () => {
      console.log("WebSocket disconnected")
      this.handleReconnect()
    })

    this.socket.on("connect_error", (error) => {
      console.error("WebSocket connection error:", error)
      this.handleReconnect()
    })

    return this.socket
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++
      setTimeout(() => {
        console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`)
        this.connect()
      }, this.reconnectDelay * this.reconnectAttempts)
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  getSocket(): Socket | null {
    return this.socket
  }

  emit(event: string, data: any) {
    if (this.socket?.connected) {
      this.socket.emit(event, data)
    }
  }

  on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on(event, callback)
    }
  }

  off(event: string, callback?: (data: any) => void) {
    if (this.socket) {
      this.socket.off(event, callback)
    }
  }
}

export const wsManager = new WebSocketManager()
