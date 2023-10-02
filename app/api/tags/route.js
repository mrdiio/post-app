import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const tags = await db.tag.findMany()
    return NextResponse.json(tags)
  } catch (error) {
    return NextResponse.error()
  }
}
