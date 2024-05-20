import { Room } from '@/lib/room-validation'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
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
        {/* <CardTitle className='text-sm font-medium'>
                    Total Revenue
                  </CardTitle> */}
        {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg> */}
      </CardHeader>
      <CardContent className='space-y-2'>
        <Image src={sampleImg} width={500} height={500} alt='Sample Room' />
        <div className='text-2xl font-bold'>{title}</div>
      </CardContent>
      <CardFooter>
        <Link href={`/dashboard/book/rooms/${id}`}>
          <Button className='w-full'>Book</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
export default RoomList
