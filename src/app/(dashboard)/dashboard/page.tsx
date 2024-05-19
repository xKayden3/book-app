import { CalendarDateRangePicker } from '@/components/date-range-picker'
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
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M2.898 12.581a2.467 2.467 0 0 1 2.073-.538 2.38 2.38 0 0 1 1.42.871l.419-1.023a3.39 3.39 0 0 0-.707-.489 2.5 2.5 0 1 0-3.215-.006 3.454 3.454 0 0 0-.631.418A3.491 3.491 0 0 0 1 14.5V16h1v-1.5a2.492 2.492 0 0 1 .898-1.919zM3 9.5A1.5 1.5 0 1 1 4.5 11 1.502 1.502 0 0 1 3 9.5zm18.103 1.902a2.5 2.5 0 1 0-3.215-.007 3.448 3.448 0 0 0-.631.419c-.026.021-.044.05-.07.072l.412 1.006a2.407 2.407 0 0 1 2.372-.849A2.608 2.608 0 0 1 22 14.646V16h1v-1.354a3.647 3.647 0 0 0-1.897-3.244zM18 9.5a1.5 1.5 0 1 1 1.5 1.5A1.502 1.502 0 0 1 18 9.5zM10 9V8a1.99 1.99 0 0 1 .764-1.572 2.02 2.02 0 0 1 1.739-.367A2.08 2.08 0 0 1 14 8.119V9h1v-.88a3.173 3.173 0 0 0-1.445-2.678 2.5 2.5 0 1 0-3.1.009 2.956 2.956 0 0 0-.31.192A2.984 2.984 0 0 0 9 8v1zm.5-5.5A1.5 1.5 0 1 1 12 5a1.502 1.502 0 0 1-1.5-1.5zm9.463 17.81l-.926.38L14.664 11H9.336L4.963 21.69l-.926-.38L8.41 10.622A.997.997 0 0 1 9.336 10h5.328a.996.996 0 0 1 .925.62z' />
                    <path fill='none' d='M0 0h24v24H0z' />
                  </svg>
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
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Borrow</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Equipments</div>
                  {/* <p className='text-xs text-muted-foreground'>
                    +201 since last hour
                  </p> */}
                </CardContent>
              </Card>
            </div>
            {/* <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7'>
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
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div> */}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}
