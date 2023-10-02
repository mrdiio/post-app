import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

export default function PostCard() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild>
          <Link href="/posts/1">Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
