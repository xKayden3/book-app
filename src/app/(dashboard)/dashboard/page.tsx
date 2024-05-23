import { CalendarDateRangePicker } from '@/components/date-range-picker'
import { Overview } from '@/components/overview'
import { RecentSales } from '@/components/recent-sales'
// import { Overview } from '@/components/overview'
// import { RecentSales } from '@/components/recent-sales'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <ScrollArea className='h-full'>
      <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-3xl font-bold tracking-tight'>
            Hi, Welcome back 👋
          </h2>
          {/* <div className='hidden md:flex items-center space-x-2'>
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div> */}
        </div>
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            {/* <TabsTrigger value='analytics' disabled>
              Analytics
            </TabsTrigger> */}
          </TabsList>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Book</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Rooms</div>
                  {/* <p className='text-xs text-muted-foreground'>
                    +20.1% from last month
                  </p> */}
                </CardContent>
                <CardFooter>
                  <Link href={'/dashboard/book/rooms'}>
                    <Button className='w-full'>Proceed</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Borrow</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Equipments</div>
                  {/* <p className='text-xs text-muted-foreground'>
                    +201 since last hour
                  </p> */}
                </CardContent>
                <CardFooter>
                  <Link href={'/dashboard/book/equipments'}>
                    <Button className='w-full'>Proceed</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Book</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>IMC/AVR</div>
                  {/* <p className='text-xs text-muted-foreground'></p> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Book</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Reschedule</div>
                  {/* <p className='text-xs text-muted-foreground'>
                    +19% from last month
                  </p> */}
                </CardContent>
              </Card>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7'>
              <Card className='col-span-4'>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-4 md:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Booking</CardTitle>
                  <CardDescription>
                    {/* You made 265 sales this month. */}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}
