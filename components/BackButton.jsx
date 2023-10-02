'use client'
import { ChevronLeft } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <Button className="w-fit" onClick={() => router.back()}>
      <ChevronLeft size={24} />
      Back{' '}
    </Button>
  )
}
