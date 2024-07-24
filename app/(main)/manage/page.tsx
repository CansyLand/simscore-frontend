'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const fetchSessions = async () => {
      const host = process.env.SIMSCORE_API;
      const response = await fetch(`${host}/sessions`)
      const data = await response.json()
      setSessions(data)
    }

    fetchSessions()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {sessions.map((sessionId) => (
        <Link href={`/manage/${sessionId}`} key={sessionId}>
          <div className="h-24 flex justify-center items-center cursor-pointer bg-white hover:bg-gray-100 rounded-lg shadow-md transition-colors duration-200">
            {sessionId}
          </div>
        </Link>
      ))}
    </div>
  )
}
