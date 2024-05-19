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
function page() {
  return (
    <ScrollArea className='h-full'>
      <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-3xl font-bold tracking-tight'>Rooms</h2>
          {/* <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div> */}
        </div>
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Available</TabsTrigger>
            {/* <TabsTrigger value='rooms'>Equipments</TabsTrigger> */}
          </TabsList>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
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
                  <Image
                    src={conferenceImg}
                    width={500}
                    height={500}
                    alt='Conference Room'
                  />
                  <div className='text-2xl font-bold'>Conference Room</div>
                </CardContent>
                <CardFooter>
                  <Link href={'/dashboard/book/rooms'}>
                    <Button className='w-full'>Book</Button>
                  </Link>
                </CardFooter>
              </Card>
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
                  <Image
                    src={tutoringImg}
                    width={500}
                    height={500}
                    alt='Tutoring Room'
                  />
                  <div className='text-2xl font-bold'>Tutoring Room</div>
                </CardContent>
                <CardFooter>
                  <Link href={'/dashboard/book/rooms'}>
                    <Button className='w-full'>Book</Button>
                  </Link>
                </CardFooter>
              </Card>
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
                  <Image
                    src={collaboratoryImg}
                    width={500}
                    height={500}
                    alt='Collaboratory Room'
                  />
                  <div className='text-2xl font-bold'>Collaboratory Room</div>
                </CardContent>
                <CardFooter>
                  <Link href={'/dashboard/book/rooms'}>
                    <Button className='w-full'>Book</Button>
                  </Link>
                </CardFooter>
              </Card>

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
                  <Image
                    src={netZoneImg}
                    width={500}
                    height={500}
                    alt='Net Zone'
                  />
                  <div className='text-2xl font-bold'>Net Zone</div>
                </CardContent>
                <CardFooter>
                  <Link href={'/dashboard/book/rooms'}>
                    <Button className='w-full'>Book</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}
export default page
