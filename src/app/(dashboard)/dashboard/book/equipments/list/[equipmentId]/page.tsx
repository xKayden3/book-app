import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import prisma from '@/lib/prisma'
import { notFound } from 'next/dist/client/components/not-found'
import { cache } from 'react'

interface PageProps {
  params: { equipmentId: number }
}

const getBookings = cache(async (equipmentId: number) => {
  // const bookings = await prisma.rooms.findFirst({
  //   where: { id: roomId },
  //   select:{
  //     title: true,
  //     bookroom:{
  //       select:{
  //         bookDate: true,
  //         timeStart: true,
  //         timeEnd:true
  //       }
  //     }
  //   }
  // });

  const bookings = await prisma.viewbookingsequipment.findMany({
    where: {
      id: parseInt(equipmentId.toString()),
    },
  })

  if (!bookings) notFound()

  // console.log(bookings)
  return bookings
})

export async function BookingsEquipment({
  params: { equipmentId },
}: PageProps) {
  const bookings = await getBookings(equipmentId)

  return (
    // <div>Booking List</div>
    <Table>
      <TableCaption>Booking Records</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Equipment</TableHead>
          <TableHead>EDP Number</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Purpose</TableHead>
          <TableHead>Contact No</TableHead>
          <TableHead>Endorsed By</TableHead>
          <TableHead>Book Date Start</TableHead>
          <TableHead>Time Start</TableHead>
          <TableHead>Book Date End</TableHead>
          <TableHead>Time End</TableHead>
          {/* <TableHead className='text-right'>Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className='font-medium'>{booking.title}</TableCell>
            <TableCell>{booking.edpNumber}</TableCell>
            <TableCell>{booking.course}</TableCell>
            <TableCell>{booking.purpose}</TableCell>
            <TableCell>{booking.contactNo}</TableCell>
            <TableCell>{booking.endorsedBy}</TableCell>
            <TableCell>{booking.bookDateStart}</TableCell>
            <TableCell>{booking.timeStart}</TableCell>
            <TableCell>{booking.bookDateEnd}</TableCell>
            <TableCell>{booking.timeStart}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
export default BookingsEquipment
