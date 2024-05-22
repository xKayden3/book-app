import { EquipmentClient } from '@/components/tables/equipment-tables/client'
import { RoomsClient } from '@/components/tables/room-tables/client'
import { columns } from '@/components/tables/sampleRoom-tables/columns'
import { RoomTable } from '@/components/tables/sampleRoom-tables/sampleRoom-table'
import { buttonVariants } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Equipments } from '@/lib/equipments-validations'
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
  const equipments = await prisma.equipments.findMany({
    select: {
      id: true,
      title: true,
      imgUrl: true,
      isAvailable: true,
    },
  })
  const allEquipments: Equipments[] = equipments
  return (
    <>
      <div className='flex-1 space-y-4  p-4 md:p-8 pt-6'>
        <EquipmentClient equipments={allEquipments} />
      </div>
    </>
  )
}
