"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { wsManager } from "./websocket"

export interface TimeSlot {
  id: string
  time: string
  date: string
  service: string
  trainer?: string
  available: boolean
  bookedBy?: string
  price: number
}

export interface BookingUpdate {
  slotId: string
  available: boolean
  bookedBy?: string
  timestamp: Date
}

interface BookingContextType {
  timeSlots: TimeSlot[]
  loading: boolean
  error: string | null
  bookSlot: (slotId: string, userInfo: any) => Promise<boolean>
  cancelBooking: (slotId: string) => Promise<boolean>
  getAvailableSlots: (date: string, service?: string) => TimeSlot[]
  refreshSlots: () => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Generate demo time slots
  const generateDemoSlots = useCallback(() => {
    const slots: TimeSlot[] = []
    const services = ["Personal Training", "Group Fitness Class", "Swimming Lesson", "Wellness Consultation"]
    const trainers = ["Sarah Johnson", "Mike Chen", "Emma Rodriguez", "David Thompson"]
    const times = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"]

    // Generate slots for next 7 days
    for (let day = 0; day < 7; day++) {
      const date = new Date()
      date.setDate(date.getDate() + day)
      const dateString = date.toISOString().split("T")[0]

      services.forEach((service, serviceIndex) => {
        times.forEach((time, timeIndex) => {
          const slotId = `${dateString}-${service.replace(/\s+/g, "-")}-${time.replace(/\s+/g, "-")}`
          const isAvailable = Math.random() > 0.3 // 70% availability

          slots.push({
            id: slotId,
            time,
            date: dateString,
            service,
            trainer: trainers[serviceIndex],
            available: isAvailable,
            bookedBy: isAvailable ? undefined : `user-${Math.floor(Math.random() * 100)}`,
            price: service === "Personal Training" ? 80 : service === "Swimming Lesson" ? 60 : 45,
          })
        })
      })
    }

    return slots
  }, [])

  useEffect(() => {
    // Initialize with demo data
    const demoSlots = generateDemoSlots()
    setTimeSlots(demoSlots)
    setLoading(false)

    // Set up WebSocket listeners
    const socket = wsManager.connect()

    socket.on("booking-update", (update: BookingUpdate) => {
      setTimeSlots((prev) =>
        prev.map((slot) =>
          slot.id === update.slotId ? { ...slot, available: update.available, bookedBy: update.bookedBy } : slot,
        ),
      )
    })

    socket.on("slots-refresh", (newSlots: TimeSlot[]) => {
      setTimeSlots(newSlots)
    })

    return () => {
      socket.off("booking-update")
      socket.off("slots-refresh")
    }
  }, [generateDemoSlots])

  const bookSlot = useCallback(async (slotId: string, userInfo: any): Promise<boolean> => {
    try {
      setError(null)

      // Optimistic update
      setTimeSlots((prev) =>
        prev.map((slot) => (slot.id === slotId ? { ...slot, available: false, bookedBy: "current-user" } : slot)),
      )

      // Emit booking request
      wsManager.emit("book-slot", { slotId, userInfo })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you'd wait for server confirmation
      return true
    } catch (err) {
      setError("Failed to book slot")
      // Revert optimistic update
      setTimeSlots((prev) =>
        prev.map((slot) => (slot.id === slotId ? { ...slot, available: true, bookedBy: undefined } : slot)),
      )
      return false
    }
  }, [])

  const cancelBooking = useCallback(async (slotId: string): Promise<boolean> => {
    try {
      setError(null)

      // Optimistic update
      setTimeSlots((prev) =>
        prev.map((slot) => (slot.id === slotId ? { ...slot, available: true, bookedBy: undefined } : slot)),
      )

      // Emit cancellation request
      wsManager.emit("cancel-booking", { slotId })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return true
    } catch (err) {
      setError("Failed to cancel booking")
      return false
    }
  }, [])

  const getAvailableSlots = useCallback(
    (date: string, service?: string) => {
      return timeSlots.filter((slot) => slot.date === date && slot.available && (!service || slot.service === service))
    },
    [timeSlots],
  )

  const refreshSlots = useCallback(() => {
    setLoading(true)
    const newSlots = generateDemoSlots()
    setTimeSlots(newSlots)
    setLoading(false)
  }, [generateDemoSlots])

  const value: BookingContextType = {
    timeSlots,
    loading,
    error,
    bookSlot,
    cancelBooking,
    getAvailableSlots,
    refreshSlots,
  }

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider")
  }
  return context
}
