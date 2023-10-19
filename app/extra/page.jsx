'use client'

import { useSession } from 'next-auth/react'

export default function Extra() {
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log('not authenticated')
    },
  })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="flex items-center text-center">
      <div className="py-72">{JSON.stringify(data)}</div>
    </div>
  )
}
