'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { createRoomSchema, CreateRoomValues } from '@/lib/room-validation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import Select from '@/components/ui/select-2'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import LoadingButton from '@/components/LoadingButton'
// import { createEmployee } from './actions'
import { Heading } from '../../../../../components/ui/heading'
import { createRoom } from './actions'

export default function NewRoomForm() {
  const form = useForm<CreateRoomValues>({
    resolver: zodResolver(createRoomSchema),
  })

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form

  async function onSubmit(values: CreateRoomValues) {
    const formData = new FormData()

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value)
      }
    })

    try {
      await createRoom(formData)
    } catch (error) {
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <main className='max-w-3xl m-auto my-10 space-y-10'>
      <div className='space-y-5 text-center'>
        <Heading title='New Room' description='Create room'></Heading>
      </div>
      <div className='space-y-6 border rounded-md p-4'>
        <div>
          <h2 className='font-semibold'>Room details</h2>
          <p className='text-muted-foreground'>Provide room information</p>
        </div>
        <Form {...form}>
          <form
            className='space-y-4'
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <FormField
                control={control}
                name='title'
                render={({ field }) => (
                  <FormItem className='grow'>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Conference Room' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <LoadingButton type='submit' loading={isSubmitting}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  )
}

{
  /* Number
              <FormField
                control={control}
                name='salary'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>For Number</FormLabel>
                    <FormControl>
                      <Input {...field}  type='number'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */
}
{
  /* Description
              <FormField
                control={control}
                name='address'
                render={({ field }) => (
                  <FormItem>
                    <Label onClick={() => setFocus('address')}>Address</Label>
                    <FormControl>
                      <RichTextEditor
                        onChange={(draft) => field.onChange(draftToMarkdown(draft))}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */
}

{
  /* Email */
}
{
  /* <FormField
              control={control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g. user@email.com'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */
}
