import { Room } from '@/lib/room-validation'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import sampleImg from '@/app/images/sample-room.png'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

interface RoomsProps {
  room: Room
}
function RoomList({ room: { id, title, imgUrl, isAvailable } }: RoomsProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Image src={sampleImg} width={500} height={500} alt='Sample Room' />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={`/dashboard/book/rooms/new/${id}`}>
          <Button className='w-full'>Book</Button>
        </Link>
        <Link href={`/dashboard/book/rooms/list/${id}`}>
          <Button variant={'secondary'} className='w-full'>
            View Bookings
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
export default RoomList
