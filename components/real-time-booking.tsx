"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, RefreshCw, CheckCircle, AlertCircle } from "lucide-react"
import { useBooking } from "@/lib/booking-context"
import { format, addDays } from "date-fns"

interface RealTimeBookingProps {
  selectedService?: string
  onSlotBooked?: (slotId: string) => void
}

export default function RealTimeBooking({ selectedService, onSlotBooked }: RealTimeBookingProps) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
  const [selectedServiceFilter, setSelectedServiceFilter] = useState(selectedService || "All Services")
  const [bookingSlot, setBookingSlot] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  const { timeSlots, loading, error, bookSlot, getAvailableSlots, refreshSlots } = useBooking()

  const services = ["Personal Training", "Group Fitness Class", "Swimming Lesson", "Wellness Consultation"]

  const availableSlots = getAvailableSlots(selectedDate, selectedServiceFilter)
  const allSlotsForDate = timeSlots.filter((slot) => slot.date === selectedDate)

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleBookSlot = async (slotId: string) => {
    setBookingSlot(slotId)
    const success = await bookSlot(slotId, {
      userId: "current-user",
      userName: "Current User",
      email: "user@example.com",
    })

    if (success && onSlotBooked) {
      onSlotBooked(slotId)
    }
    setBookingSlot(null)
  }

  const getNextAvailableDates = () => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const date = addDays(new Date(), i)
      dates.push({
        value: format(date, "yyyy-MM-dd"),
        label: format(date, "MMM dd, yyyy"),
        isToday: i === 0,
      })
    }
    return dates
  }

  const getSlotsByTime = () => {
    const slotsByTime: { [time: string]: typeof allSlotsForDate } = {}
    allSlotsForDate.forEach((slot) => {
      if (!slotsByTime[slot.time]) {
        slotsByTime[slot.time] = []
      }
      slotsByTime[slot.time].push(slot)
    })
    return slotsByTime
  }

  const getAvailabilityColor = (available: boolean, isBooking: boolean) => {
    if (isBooking) return "bg-yellow-100 border-yellow-300 text-yellow-800"
    if (available) return "bg-green-100 border-green-300 text-green-800"
    return "bg-red-100 border-red-300 text-red-800"
  }

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-black">
              <Calendar className="h-5 w-5 text-highlight-yellow" />
              Real-Time Availability
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Last updated: {format(lastUpdate, "HH:mm")}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={refreshSlots}
                disabled={loading}
                className="border-highlight-yellow text-highlight-yellow hover:bg-highlight-yellow hover:text-black bg-transparent"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Select Date</label>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-highlight-yellow">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {getNextAvailableDates().map((date) => (
                    <SelectItem key={date.value} value={date.value}>
                      {date.label} {date.isToday && "(Today)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Filter by Service</label>
              <Select value={selectedServiceFilter} onValueChange={setSelectedServiceFilter}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-highlight-yellow">
                  <SelectValue placeholder="All Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Services">All Services</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-red-800">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Availability Grid */}
      <div className="space-y-4">
        {Object.entries(getSlotsByTime()).map(([time, slots]) => (
          <Card key={time} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-highlight-yellow" />
                  <h3 className="font-semibold text-black">{time}</h3>
                </div>
                <Badge variant="outline" className="text-xs">
                  {
                    slots.filter((s) => s.available && (!selectedServiceFilter || s.service === selectedServiceFilter))
                      .length
                  }{" "}
                  available
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {slots
                  .filter((slot) => !selectedServiceFilter || slot.service === selectedServiceFilter)
                  .map((slot) => {
                    const isBooking = bookingSlot === slot.id
                    return (
                      <div
                        key={slot.id}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${getAvailabilityColor(
                          slot.available,
                          isBooking,
                        )}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{slot.service}</h4>
                              {slot.available && <Badge className="bg-green-500 text-white text-xs">Available</Badge>}
                            </div>
                            <div className="flex items-center gap-4 text-sm opacity-75">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span>{slot.trainer}</span>
                              </div>
                              <span className="font-medium">${slot.price}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {slot.available ? (
                              <Button
                                onClick={() => handleBookSlot(slot.id)}
                                disabled={isBooking}
                                className="bg-highlight-yellow hover:bg-accent-orange text-black"
                              >
                                {isBooking ? (
                                  <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                                    Booking...
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4" />
                                    Book Now
                                  </div>
                                )}
                              </Button>
                            ) : (
                              <Badge variant="secondary" className="bg-red-100 text-red-800">
                                Booked
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {availableSlots.length === 0 && !loading && (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <Calendar className="h-12 w-12 text-subtext-gray mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black mb-2">No Available Slots</h3>
            <p className="text-subtext-gray mb-4">
              No available slots found for the selected date and service. Try selecting a different date or service.
            </p>
            <Button onClick={refreshSlots} className="bg-highlight-yellow hover:bg-accent-orange text-black">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Availability
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
