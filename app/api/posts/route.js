import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const tags = await db.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        Tag: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(tags)
  } catch (error) {
    return NextResponse.error()
  }
}

export async function POST(request) {
  try {
    const { title, content, tagId } = await request.json()

    const store = await db.post.create({
      data: {
        title,
        content,
        tagId,
      },
    })

    return NextResponse.json({
      message: 'POST request received',
      data: store,
    })
  } catch (error) {
    return NextResponse.error()
  }
}
