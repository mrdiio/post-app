'use client'
import { HandMetal } from 'lucide-react'
import { getPost } from '@/services/postService'
import { useQuery } from '@tanstack/react-query'
import ActionButton from './ActionButton'
import { Badge } from '@/components/ui/badge'

export default function DetailPost({ id }) {
  const { data } = useQuery(['post', id], () => getPost(id), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return (
    <div className="flex flex-wrap flex-col gap-6">
      <div className="flex flex-wrap justify-between border-b pb-3 gap-3">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <HandMetal />
          <span>{data.title}</span>
          <Badge className={'w-fit'}>{data.Tag.name}</Badge>
        </h1>

        <ActionButton id={id} />
      </div>

      <p>{data.content}</p>
    </div>
  )
}
