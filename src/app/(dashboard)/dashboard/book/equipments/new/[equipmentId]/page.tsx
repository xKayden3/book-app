import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import prisma from '@/lib/prisma'
// import { BookRoomForm } from './NewBookRoom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BookEquipmentForm } from './NewBookEquipment'

interface BookEquipmentProps {
  params: {
    equipmentId: number
  }
}

async function EquipmentBook(props: BookEquipmentProps) {
  const equipmentId = parseInt(props.params.equipmentId.toString())
  const equipment = await prisma.equipments.findUnique({
    where: {
      id: equipmentId,
    },
  })

  const equipmentDescription = equipment?.title
  return (
    <div className='flex-1 space-y-4  p-4 md:p-8 pt-6'>
      <div className='flex items-center justify-between'>
        <Heading title={'Book Equipments'} description='' />
      </div>
      <Separator />
      <BookEquipmentForm
        equipmentId={props.params.equipmentId}
        equipmentDesc={equipmentDescription || 'Common Equipment'}
      />
    </div>
  )
}
export default EquipmentBook
