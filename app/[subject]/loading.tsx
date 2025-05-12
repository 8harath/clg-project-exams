import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin mb-4">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full"></div>
        </div>
        <h2 className="text-2xl font-mono font-bold text-gray-800">Loading Resources...</h2>
        <p className="text-gray-600 font-mono mt-2">Please wait while we gather your study materials</p>
      </div>
    </div>
  )
} 