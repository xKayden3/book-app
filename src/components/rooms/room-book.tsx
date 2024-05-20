'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Heading } from '../ui/heading'
import { Button } from '../ui/button'
import { Separator } from '@radix-ui/react-separator'
import {
  createBookRoomSchema,
  CreateBookRoomValues,
  createRoomSchema,
} from '@/lib/room-validation'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { useToast } from '../ui/use-toast'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { TimePickerWrapper } from '../time-picker/time-picker-wrapper'
import { TimePickerInput } from '../time-picker/time-picker-input'
import { TimePicker12HourWrapper } from '../time-picker/time-picker-12hour-wrapper'
import { Popover } from '@radix-ui/react-popover'
import { PopoverContent, PopoverTrigger } from '../ui/popover'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '../ui/calendar'

import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { TimePicker } from '../time-picker/time-picker'
import { DateTimePicker } from '../time-picker/date-time-picker'

interface BookRoomProps {
  roomId: number
}

function BookRoom(props: BookRoomProps) {
  const roomId = props.roomId

  const form = useForm<CreateBookRoomValues>({
    resolver: zodResolver(createBookRoomSchema),
  })
  const router = useRouter()
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form

  const onSubmit = async (data: CreateBookRoomValues) => {
    try {
      setLoading(true)

      console.log(data)
      // router.refresh()
      // router.push(`/dashboard/products`)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-full'
        >
          <div className='md:grid md:grid-cols-3 gap-8'>
            <FormField
              control={form.control}
              name='bookDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='datetime'>Date time</FormLabel>
                  <FormControl>
                    <DateTimePicker
                      granularity='minute'
                      jsDate={field.value}
                      onJsDateChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='timeStart'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Start</FormLabel>
                  <FormControl>
                    {/* <Input
                      disabled={loading}
                      placeholder='Product description'
                      {...field}
                    /> */}
                    <TimePicker value={field.value} onChange={setValue} />
                    {/* <Input type='time' {...field} /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='timeEnd'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time End</FormLabel>
                  <FormControl>
                    <Input type='time' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className='ml-auto' type='submit'>
            {'Book Now'}
          </Button>
        </form>
      </Form>
    </>
  )
}
export default BookRoom
