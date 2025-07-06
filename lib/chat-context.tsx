"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { wsManager } from "./websocket"

export interface ChatMessage {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  message: string
  timestamp: Date
  type: "user" | "staff" | "system"
  roomId?: string
}

export interface ChatRoom {
  id: string
  name: string
  type: "general" | "support" | "private"
  participants: number
  lastMessage?: ChatMessage
}

interface ChatContextType {
  messages: ChatMessage[]
  rooms: ChatRoom[]
  currentRoom: string
  isConnected: boolean
  isTyping: { [userId: string]: boolean }
  sendMessage: (message: string, roomId?: string) => void
  joinRoom: (roomId: string) => void
  leaveRoom: (roomId: string) => void
  setTyping: (isTyping: boolean) => void
  onlineUsers: number
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [rooms, setRooms] = useState<ChatRoom[]>([
    { id: "general", name: "General Chat", type: "general", participants: 0 },
    { id: "support", name: "Support", type: "support", participants: 0 },
  ])
  const [currentRoom, setCurrentRoom] = useState("general")
  const [isConnected, setIsConnected] = useState(false)
  const [isTyping, setIsTyping] = useState<{ [userId: string]: boolean }>({})
  const [onlineUsers, setOnlineUsers] = useState(0)

  useEffect(() => {
    const socket = wsManager.connect()

    socket.on("connect", () => {
      setIsConnected(true)
      socket.emit("join-room", currentRoom)
    })

    socket.on("disconnect", () => {
      setIsConnected(false)
    })

    socket.on("message", (message: ChatMessage) => {
      setMessages((prev) => [...prev, { ...message, timestamp: new Date(message.timestamp) }])
    })

    socket.on("user-typing", ({ userId, isTyping: typing }: { userId: string; isTyping: boolean }) => {
      setIsTyping((prev) => ({ ...prev, [userId]: typing }))
    })

    socket.on("room-update", (roomData: { roomId: string; participants: number }) => {
      setRooms((prev) =>
        prev.map((room) => (room.id === roomData.roomId ? { ...room, participants: roomData.participants } : room)),
      )
    })

    socket.on("online-users", (count: number) => {
      setOnlineUsers(count)
    })

    // Simulate some initial messages for demo
    const demoMessages: ChatMessage[] = [
      {
        id: "1",
        userId: "staff-1",
        userName: "Sarah (Staff)",
        message: "Welcome to Aura Fitness! How can I help you today?",
        timestamp: new Date(Date.now() - 300000),
        type: "staff",
        roomId: "general",
      },
      {
        id: "2",
        userId: "user-1",
        userName: "Mike",
        message: "Great facilities! Love the new equipment.",
        timestamp: new Date(Date.now() - 120000),
        type: "user",
        roomId: "general",
      },
    ]
    setMessages(demoMessages)
    setOnlineUsers(12)

    return () => {
      socket.off("connect")
      socket.off("disconnect")
      socket.off("message")
      socket.off("user-typing")
      socket.off("room-update")
      socket.off("online-users")
    }
  }, [currentRoom])

  const sendMessage = useCallback(
    (message: string, roomId?: string) => {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        userId: "current-user",
        userName: "You",
        message,
        timestamp: new Date(),
        type: "user",
        roomId: roomId || currentRoom,
      }

      wsManager.emit("send-message", newMessage)
      setMessages((prev) => [...prev, newMessage])
    },
    [currentRoom],
  )

  const joinRoom = useCallback(
    (roomId: string) => {
      wsManager.emit("leave-room", currentRoom)
      wsManager.emit("join-room", roomId)
      setCurrentRoom(roomId)
      setMessages([]) // Clear messages when switching rooms
    },
    [currentRoom],
  )

  const leaveRoom = useCallback((roomId: string) => {
    wsManager.emit("leave-room", roomId)
  }, [])

  const setTyping = useCallback(
    (typing: boolean) => {
      wsManager.emit("typing", { roomId: currentRoom, isTyping: typing })
    },
    [currentRoom],
  )

  const value: ChatContextType = {
    messages: messages.filter((msg) => !msg.roomId || msg.roomId === currentRoom),
    rooms,
    currentRoom,
    isConnected,
    isTyping,
    sendMessage,
    joinRoom,
    leaveRoom,
    setTyping,
    onlineUsers,
  }

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}
