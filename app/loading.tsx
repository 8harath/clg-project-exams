import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-amber-50 flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer spinning circle */}
        <div className="w-12 h-12 border-3 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        {/* Inner pulsing circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-amber-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
} 