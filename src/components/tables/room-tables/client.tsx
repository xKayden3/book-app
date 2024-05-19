'use client'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { User } from '@/constants/data'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { columns } from './columns'
import { CreateRoomValues, Room } from '@/lib/room-validation'
import { Rooms } from '@prisma/client'

interface RoomsClientProps {
  rooms: Room
}

export const RoomsClient: React.FC<RoomsClientProps> = ({ rooms }) => {
  const router = useRouter()

  return (
    <>
      <div className='flex items-start justify-between'>
        <Heading title={`Rooms`} description='Manage rooms' />
        <Button
          className='text-xs md:text-sm'
          onClick={() => router.push(`/dashboard/rooms/new`)}
        >
          <Plus className='mr-2 h-4 w-4' /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='title' columns={columns} data={rooms} />
    </>
  )
}
