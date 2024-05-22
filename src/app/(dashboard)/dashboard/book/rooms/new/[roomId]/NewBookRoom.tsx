'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from '@/components/ui/use-toast'
import { createBookRoom } from '@/app/(dashboard)/dashboard/book/rooms/new/[roomId]/actions'
import { TimePickerDemo } from '@/components/time-picker/time-picker-demo'
import { Input } from '@/components/ui/input'
import { Heading } from '@/components/ui/heading'
import {
  createBookRoomSchema,
  CreateBookRoomValues,
} from '@/lib/room-validation'

interface BookRoomProps {
  roomIds: number
  roomDesc: string
}

export function BookRoomForm(props: BookRoomProps) {
  const form = useForm<CreateBookRoomValues>({
    resolver: zodResolver(createBookRoomSchema),
    defaultValues: {
      roomId: props.roomIds,
    },
  })

  const paramRoomId = props.roomIds

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form

  async function onSubmit(values: CreateBookRoomValues) {
    const formData = new FormData()

    const parsed = createBookRoomSchema.parse(values)
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value)
      }
    })

    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre>
    //       {/* <code>{parseToDate}</code> */}
    //       <code>{values.roomId}</code>
    //     </pre>
    //   ),
    // })

    try {
      await createBookRoom(formData)
    } catch (error) {
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <main className='max-w-fit m-auto my-10 space-y-10'>
      <div className='space-y-5 text-center'>
        <Heading title={props.roomDesc} description=''></Heading>
      </div>
      <div className='space-y-6 border rounded-md p-4'>
        <div>
          <h2 className='font-semibold'>Select Date and Time of Booking</h2>
          <p className='text-muted-foreground'>Time Format is 24 HR</p>
        </div>
        <Form {...form}>
          <form className='space-y-5 ' onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <FormField
                control={control}
                name='roomId'
                render={({ field }) => (
                  <FormItem className='w-[320px]'>
                    <FormLabel>Room ID</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        disabled
                        placeholder={`${paramRoomId}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name='bookDate'
                render={({ field }) => (
                  <FormItem className='flex flex-col '>
                    <FormLabel className='text-left'>
                      Select Date and Time
                    </FormLabel>
                    <Popover>
                      <FormControl>
                        <PopoverTrigger asChild>
                          <Button
                            variant='outline'
                            className={cn(
                              'w-[320px] justify-start text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            <CalendarIcon className='mr-2 h-4 w-4' />
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                      </FormControl>
                      <PopoverContent className='w-auto p-0'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name='timeStart'
                render={({ field }) => (
                  <FormItem className='w-[320px]'>
                    <FormLabel>Room ID</FormLabel>
                    <FormControl>
                      <TimePickerDemo
                        setDate={field.onChange}
                        date={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}
