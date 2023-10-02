import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async (req, context) => {
  try {
    const { params } = context

    const response = await db.post.findUnique({
      where: {
        id: params.postId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        tagId: true,
        Tag: true,
      },
    })

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.error()
  }
}

export const PATCH = async (req, context) => {
  try {
    const { params } = context
    const { title, content, tagId } = await req.json()

    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title,
        content,
        tagId,
      },
    })

    return NextResponse.json({
      message: 'Post updated successfully',
    })
  } catch (error) {
    return NextResponse.error()
  }
}

export const DELETE = async (req, context) => {
  try {
    const { params } = context

    await db.post.delete({
      where: {
        id: params.postId,
      },
    })

    return new Response(null, {
      status: 204,
    })
  } catch (error) {
    return NextResponse.error()
  }
}
