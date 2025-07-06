"use client"

import { useEffect, useState, useCallback } from "react"

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  connectionLatency: number
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    connectionLatency: 0,
  })

  const measureLatency = useCallback(async () => {
    const start = performance.now()
    try {
      // Simulate a ping to measure connection latency
      await fetch("/api/ping", { method: "HEAD" }).catch(() => {})
    } catch (error) {
      // Fallback measurement
    }
    const end = performance.now()
    return end - start
  }, [])

  useEffect(() => {
    const updateMetrics = async () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      const memory = (performance as any).memory

      const latency = await measureLatency()

      setMetrics({
        loadTime: navigation?.loadEventEnd - navigation?.navigationStart || 0,
        renderTime: navigation?.domContentLoadedEventEnd - navigation?.navigationStart || 0,
        memoryUsage: memory?.usedJSHeapSize || 0,
        connectionLatency: latency,
      })
    }

    updateMetrics()

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 30000)
    return () => clearInterval(interval)
  }, [measureLatency])

  return metrics
}
