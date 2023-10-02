'use client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/services/postService'
import { Badge } from './ui/badge'

export default function PostCard() {
  const { data } = useQuery(['posts'], getPosts, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return (
    <>
      {data.map((post) => (
        <Card className="" key={post.id}>
          <CardHeader>
            <CardTitle className="text-xl">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge variant={'secondary'}>{post.Tag.name}</Badge>
            <Button asChild>
              <Link href={`/posts/${post.id}`}>Detail</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
