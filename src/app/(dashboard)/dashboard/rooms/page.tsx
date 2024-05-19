import { RoomsClient } from '@/components/tables/room-tables/client'
import { columns } from '@/components/tables/sampleRoom-tables/columns'
import { RoomTable } from '@/components/tables/sampleRoom-tables/sampleRoom-table'
import { buttonVariants } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import prisma from '@/lib/prisma'
import { Room } from '@/lib/room-validation'
import { cn } from '@/lib/utils'
import { Rooms } from '@prisma/client'
import { Plus } from 'lucide-react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

// const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }]

// type paramsProps = {
//   searchParams: {
//     [key: string]: string | string[] | undefined
//   }
// } { searchParams }: paramsProps

export default async function page() {
  const rooms = await prisma.rooms.findMany()
  const allRooms: Room[] = rooms
  return (
    <>
      <div className='flex-1 space-y-4  p-4 md:p-8 pt-6'>
        <RoomsClient rooms={allRooms} />
      </div>
    </>
  )
}

// const page = Number(searchParams.page) || 1
// const pageLimit = Number(searchParams.limit) || 10
// const titleSearch = searchParams.search || null
// const offset = (page - 1) * pageLimit

// const pageCount = Math.ceil(totalRooms / pageLimit)

// const rooms: Room[] = allRooms

// console.log(allRooms)
// return (
//   <>
//     <div className='flex-1 space-y-4  p-4 md:p-8 pt-6'></div>
//   </>
// )
// return (
//   <>
//     <div className='flex-1 space-y-4  p-4 md:p-8 pt-6'>
//       {/* <BreadCrumb items={breadcrumbItems} /> */}

//       <div className='flex items-start justify-between'>
//         <Heading title={`Rooms (${totalRooms})`} description='Manage rooms' />

//         <Link
//           href={'/dashboard/rooms/new'}
//           className={cn(buttonVariants({ variant: 'default' }))}
//         >
//           <Plus className='mr-2 h-4 w-4' /> Add New
//         </Link>
//       </div>
//       <Separator />

//       <RoomTable
//         searchKey='title'
//         pageNo={page}
//         columns={columns}
//         totalUsers={totalRooms}
//         data={rooms}
//         pageCount={pageCount}
//       />
//     </div>
//   </>
// )
