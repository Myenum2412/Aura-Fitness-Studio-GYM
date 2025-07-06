"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Minimize2, Maximize2, X, Circle } from "lucide-react"
import { useChat } from "@/lib/chat-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface RealTimeChatProps {
  className?: string
}

export default function RealTimeChat({ className = "" }: RealTimeChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout>()

  const {
    messages,
    rooms,
    currentRoom,
    isConnected,
    isTyping: othersTyping,
    sendMessage,
    joinRoom,
    setTyping,
    onlineUsers,
  } = useChat()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() && isConnected) {
      sendMessage(newMessage.trim())
      setNewMessage("")
      setIsTyping(false)
      setTyping(false)
    }
  }

  const handleTyping = (value: string) => {
    setNewMessage(value)

    if (!isTyping && value.length > 0) {
      setIsTyping(true)
      setTyping(true)
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set new timeout
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      setTyping(false)
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const getTypingUsers = () => {
    return Object.entries(othersTyping)
      .filter(([_, typing]) => typing)
      .map(([userId]) => userId)
  }

  if (!isOpen) {
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-highlight-yellow hover:bg-accent-orange text-black rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
        >
          <MessageCircle className="h-6 w-6" />
          {onlineUsers > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-accent-orange text-white text-xs px-1 min-w-[20px] h-5 rounded-full">
              {onlineUsers}
            </Badge>
          )}
        </Button>
      </div>
    )
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <Card className={`w-80 shadow-2xl border-0 transition-all duration-300 ${isMinimized ? "h-14" : "h-96"}`}>
        {/* Header */}
        <CardHeader className="p-3 bg-primary-maroon text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <MessageCircle className="h-5 w-5" />
                <Circle
                  className={`absolute -bottom-1 -right-1 h-3 w-3 ${
                    isConnected ? "text-green-400 fill-current" : "text-red-400 fill-current"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-sm">Live Chat</CardTitle>
                <p className="text-xs opacity-75">
                  {onlineUsers} online • {isConnected ? "Connected" : "Connecting..."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
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
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Room Tabs */}
            <div className="flex border-b bg-background-light">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => joinRoom(room.id)}
                  className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
                    currentRoom === room.id
                      ? "bg-white text-primary-maroon border-b-2 border-highlight-yellow"
                      : "text-subtext-gray hover:text-black hover:bg-white/50"
                  }`}
                >
                  {room.name}
                  {room.participants > 0 && (
                    <Badge variant="secondary" className="ml-1 text-xs px-1">
                      {room.participants}
                    </Badge>
                  )}
                </button>
              ))}
            </div>

            {/* Messages */}
            <CardContent className="p-0 flex-1">
              <ScrollArea className="h-64 p-3">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${message.userId === "current-user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.userId !== "current-user" && (
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={message.userAvatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs bg-highlight-yellow text-black">
                            {message.userName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`max-w-[70%] ${message.userId === "current-user" ? "text-right" : "text-left"}`}>
                        <div
                          className={`inline-block px-3 py-2 rounded-lg text-sm ${
                            message.userId === "current-user"
                              ? "bg-highlight-yellow text-black"
                              : message.type === "staff"
                                ? "bg-accent-orange text-white"
                                : "bg-gray-100 text-black"
                          }`}
                        >
                          {message.userId !== "current-user" && (
                            <p className="text-xs opacity-75 mb-1">{message.userName}</p>
                          )}
                          <p>{message.message}</p>
                        </div>
                        <p className="text-xs text-subtext-gray mt-1">{formatTime(message.timestamp)}</p>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {getTypingUsers().length > 0 && (
                    <div className="flex items-center gap-2 text-subtext-gray">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-subtext-gray rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-subtext-gray rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-subtext-gray rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-xs">Someone is typing...</span>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Message Input */}
              <div className="p-3 border-t bg-white">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={newMessage}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border-2 border-gray-200 focus:border-highlight-yellow"
                    disabled={!isConnected}
                  />
                  <Button
                    type="submit"
                    disabled={!newMessage.trim() || !isConnected}
                    className="bg-highlight-yellow hover:bg-accent-orange text-black px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}
