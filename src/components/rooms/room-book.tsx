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
} from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from '@/components/ui/use-toast'
import { TimePickerDemo } from '../time-picker/time-picker-demo'
import { createBookRoom } from '@/app/(dashboard)/dashboard/book/rooms/new/[roomId]/actions'

const formSchema = z.object({
  roomId: z.number(),
  dateTime: z.date(),
})

interface BookRoomProps {
  params: {
    roomId: number
  }
}

type FormSchemaType = z.infer<typeof formSchema>

export function DateTimePickerForm(props: BookRoomProps) {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomId: props.params.roomId,
      dateTime: new Date(),
    },
  })

  async function onSubmit(values: FormSchemaType) {
    const formData = new FormData()

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value)
      }
    })

    try {
      await createBookRoom(formData)
    } catch (error) {
      alert('Something went wrong, please try again.')
    }

    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre>
    //       {/* <code>{parseToDate}</code> */}
    //       <code>{parseToDate}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <Form {...form}>
      <form
        className='flex items-end gap-4 justify-center'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='dateTime'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel className='text-left'>DateTime</FormLabel>
              <Popover>
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {field.value ? (
                        format(field.value, 'PPP HH:mm:ss')
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
                  <div className='p-3 border-t border-border'>
                    <TimePickerDemo
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
