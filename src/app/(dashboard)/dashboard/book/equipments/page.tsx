import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import conferenceImg from '@/app/images/conference_room.jpg'
import netZoneImg from '@/app/images/net_zone.jpg'
import collaboratoryImg from '@/app/images/collaboratory_room.jpg'
import tutoringImg from '@/app/images/tutoring_room.jpg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/prisma'
import RoomsList from '@/components/rooms/rooms-list'
import EquipmentsList from '@/components/equipments/equipments-list'

async function page() {
  const equipmentAvailable = await prisma.equipments.findMany({
    where: {
      isAvailable: true,
    },
  })
  const equipmentsNotAvailable = await prisma.equipments.findMany({
    where: {
      isAvailable: false,
    },
  })

  return (
    <ScrollArea className='h-full'>
      <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-3xl font-bold tracking-tight'>Equipments</h2>
          {/* <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div> */}
        </div>
        <Tabs defaultValue='available' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='available'>Available</TabsTrigger>
            <TabsTrigger value='notAvailable'>Not Available</TabsTrigger>
          </TabsList>
          <TabsContent value='available' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {equipmentAvailable.map((equipment) => (
                <EquipmentsList equipment={equipment} key={equipment.id} />
              ))}
              {equipmentAvailable.length === 0 && (
                <p className='m-auto text-center'>No equipment found</p>
              )}
            </div>
          </TabsContent>
          <TabsContent value='notAvailable' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {equipmentsNotAvailable.map((equipment) => (
                <RoomsList equipment={equipment} key={equipment.id} />
              ))}
              {equipmentsNotAvailable.length === 0 && (
                <p className='m-auto text-center'>No equipment found</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}
export default page
