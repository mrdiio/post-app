import Loading from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { deletePost } from '@/services/postService'
import { useMutation } from '@tanstack/react-query'
import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ActionButton({ id }) {
  const router = useRouter()

  const { mutate, isLoading } = useMutation(
    () => {
      console.log('delete')
      return deletePost(id)
    },
    {
      onSuccess: (data) => {
        router.push(`/`)
        router.refresh()
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )

  return (
    <div className="flex gap-2">
      <Button variant="secondary" asChild>
        <Link href={`/posts/${id}/edit`}>
          <Pencil className="p-1" />
          Edit
        </Link>
      </Button>
      <Button variant="destructive" onClick={mutate}>
        {isLoading ? (
          <>
            <Loading />
            Deleting...
          </>
        ) : (
          <>
            <Trash className="p-1" />
            Delete
          </>
        )}
      </Button>
    </div>
  )
}
