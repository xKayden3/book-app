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
import { Equipment } from '@/lib/equipments-validations'

interface EquipmentProps {
  equipment: Equipment
}
function EquipmentsList({
  equipment: { id, title, imgUrl, isAvailable },
}: EquipmentProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='flex space-y-2 items-center justify-center'>
        <Image
          src={imgUrl ? imgUrl : sampleImg}
          width={500}
          height={500}
          alt='Sample Room'
        />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={`/dashboard/book/equipments/new/${id}`}>
          <Button className='w-full'>Book</Button>
        </Link>
        <Link href={`/dashboard/book/equipments/list/${id}`}>
          <Button variant={'secondary'} className='w-full'>
            View Bookings
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
export default EquipmentsList
