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
  params: { roomId: number }
}

const getBookings = cache(async (roomId: number) => {
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

  const bookings = await prisma.viewbookings.findMany({
    where: {
      id: parseInt(roomId.toString()),
    },
  })

  if (!bookings) notFound()

  console.log(bookings)
  return bookings
})

export async function Bookings({ params: { roomId } }: PageProps) {
  const bookings = await getBookings(roomId)

  return (
    // <div>Booking List</div>
    <Table>
      <TableCaption>Booking Records</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Time Start</TableHead>
          <TableHead>Time End</TableHead>
          {/* <TableHead className='text-right'>Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className='font-medium'>{booking.bookDate}</TableCell>
            <TableCell>{booking.timeStart}</TableCell>
            <TableCell>{booking.timeEnd}</TableCell>
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
export default Bookings
