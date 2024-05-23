'use client'
import FormSubmitButton from '@/components/FormSubmitButton'
import { useFormState } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
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
import { Button } from '@/components/ui/button'
import {
  CreateRoomValues,
  updateRoomSchema,
  UpdateRoomValues,
} from '@/lib/room-validation'
import { Heading } from '@/components/ui/heading'
import LoadingButton from '@/components/LoadingButton'
import { updateEquipmentSubmission } from './actions'

interface AdminButtonProps {
  params: {
    equipmentId: number
  }
}

const FormSchema = z.object({
  id: z.string(),
  title: z.string().min(2, {
    message: 'Description must be at least 2 characters.',
  }),
})

export default function RoomUpdate(props: AdminButtonProps) {
  // const [formState, formAction] = useFormState(updateRoomSubmission, undefined)
  const equipId = props.params.equipmentId
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: equipId.toString(),
      title: '',
    },
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

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const formData = new FormData()

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value)
      }
    })
    console.log(formData.get('id'))
    try {
      await updateEquipmentSubmission(formData)
    } catch (error) {
      alert('Something went wrong, please try again.')
    }
  }

  // async function onSubmit(data: UpdateRoomValues) {
  //   const formData = new FormData()

  //   try {
  //     await updateRoomSubmission(formData)
  //   } catch (error) {
  //     alert('Something went wrong, please try again.')
  //   }
  // }

  return (
    <main className='max-w-3xl m-auto my-10 space-y-10'>
      <div className='space-y-5 text-center'>
        <Heading title='Update Equipment' description=''></Heading>
      </div>
      <div className='space-y-6 border rounded-md p-4'>
        <div>
          <h2 className='font-semibold'>Equipment details</h2>
          <p className='text-muted-foreground'>Provide equipment information</p>
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
                name='id'
                render={({ field }) => (
                  <FormItem className='w-[240px]'>
                    <FormLabel>Equipment ID</FormLabel>
                    <FormControl>
                      <Input disabled placeholder={`${equipId}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name='title'
                render={({ field }) => (
                  <FormItem className='grow'>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Projector' {...field} />
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

    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
    //     <FormField
    //       control={form.control}
    //       name='title'
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Description</FormLabel>
    //           <FormControl>
    //             <Input placeholder='shadcn' {...field} />
    //           </FormControl>
    //           {/* <FormDescription>
    //             This is your public display name.
    //           </FormDescription> */}
    //           {/* <FormMessage /> */}
    //         </FormItem>
    //       )}
    //     />
    //     <Button type='submit'>Submit</Button>
    //   </form>
    // </Form>
  )
}
