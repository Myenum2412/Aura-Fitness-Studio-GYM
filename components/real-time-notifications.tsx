"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, X, MessageCircle, Calendar, Heart } from "lucide-react"
import { wsManager } from "@/lib/websocket"
import { useToast } from "@/hooks/use-toast"

interface Notification {
  id: string
  type: "message" | "booking" | "like" | "comment" | "system"
  title: string
  message: string
  timestamp: Date
  read: boolean
  actionUrl?: string
}

export default function RealTimeNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    const socket = wsManager.connect()

    socket.on("notification", (notification: Notification) => {
      const newNotification = {
        ...notification,
        timestamp: new Date(notification.timestamp),
      }

      setNotifications((prev) => [newNotification, ...prev.slice(0, 9)]) // Keep last 10
      setUnreadCount((prev) => prev + 1)

      // Show toast for important notifications
      if (notification.type === "booking" || notification.type === "message") {
        toast({
          title: notification.title,
          description: notification.message,
        })
      }
    })

    // Simulate some demo notifications
    const demoNotifications: Notification[] = [
      {
        id: "1",
        type: "message",
        title: "New Message",
        message: "Sarah from support sent you a message",
        timestamp: new Date(Date.now() - 300000),
        read: false,
      },
      {
        id: "2",
        type: "booking",
        title: "Booking Confirmed",
        message: "Your personal training session is confirmed for tomorrow at 3 PM",
        timestamp: new Date(Date.now() - 600000),
        read: false,
      },
    ]

    setNotifications(demoNotifications)
    setUnreadCount(2)

    return () => {
      socket.off("notification")
    }
  }, [toast])

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
    setUnreadCount((prev) => Math.max(0, prev - 1))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
    setUnreadCount(0)
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
    const notification = notifications.find((n) => n.id === id)
    if (notification && !notification.read) {
      setUnreadCount((prev) => Math.max(0, prev - 1))
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageCircle className="h-4 w-4 text-blue-500" />
      case "booking":
        return <Calendar className="h-4 w-4 text-green-500" />
      case "like":
        return <Heart className="h-4 w-4 text-red-500" />
      case "comment":
        return <MessageCircle className="h-4 w-4 text-purple-500" />
      default:
        return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    if (minutes > 0) return `${minutes}m ago`
    return "Just now"
  }

  return (
    <div className="fixed top-4 right-20 z-40">
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white"
        >
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 min-w-[18px] h-5 rounded-full">
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>

        {isOpen && (
          <Card className="absolute top-12 right-0 w-80 max-h-96 overflow-hidden shadow-2xl border-0 animate-fade-in-down">
            <div className="p-4 border-b bg-primary-maroon text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Notifications</h3>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={markAllAsRead}
                      className="text-white hover:bg-white/20 text-xs p-1 h-auto"
                    >
                      Mark all read
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 p-1 h-auto"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <CardContent className="p-0 max-h-80 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-subtext-gray">
                  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-background-light transition-colors cursor-pointer ${
                        !notification.read ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-black truncate">{notification.title}</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeNotification(notification.id)
                              }}
                              className="p-1 h-auto text-subtext-gray hover:text-black"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-subtext-gray mt-1 line-clamp-2">{notification.message}</p>
                          <p className="text-xs text-subtext-gray mt-2">{formatTime(notification.timestamp)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
