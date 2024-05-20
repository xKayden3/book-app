import BookRoom from '@/components/rooms/room-book'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import prisma from '@/lib/prisma'

interface BookRoomProps {
  params: {
    roomId: number
  }
}

async function RoomBook(props: BookRoomProps) {
  const roomId = parseInt(props.params.roomId.toString())
  const room = await prisma.rooms.findUnique({
    where: {
      id: roomId,
    },
  })

  const roomDescription = room?.title
  return (
    <>
      <div className='flex-1 space-y-4  p-4 md:p-8 pt-6'>
        <div className='flex items-center justify-between'>
          <Heading
            title={roomDescription || `Common Room`}
            description='Book Room'
          />
        </div>
        <Separator />
        <BookRoom roomId={roomId} />
      </div>
    </>
  )
}
export default RoomBook
