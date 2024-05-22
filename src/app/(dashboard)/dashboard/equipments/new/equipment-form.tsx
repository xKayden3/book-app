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
import {
  createEquipmentSchema,
  CreateEquipmentValues,
} from '@/lib/equipments-validations'
import { createEquipment } from './actions'

export default function NewEquipmentForm() {
  // const { uploadFiles, progresses, uploadedFiles, isUploading } = useUploadFile(
  //   'imageUploader',
  //   { defaultUploadedFiles: [] }
  // )
  const form = useForm<CreateEquipmentValues>({
    resolver: zodResolver(createEquipmentSchema),
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

  async function onSubmit(values: CreateEquipmentValues) {
    const formData = new FormData()

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value)
      }
    })

    try {
      await createEquipment(formData)
    } catch (error) {
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <main className='max-w-3xl m-auto my-10 space-y-10'>
      <div className='space-y-5 text-center'>
        <Heading title='New Equipment' description='Create equipment'></Heading>
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
              {/* <FormField
                control={form.control}
                name='imgUrl'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <FileUpload
                        onChange={field.onChange}
                        value={field.value}
                        onRemove={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
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

            <LoadingButton type='submit' loading={isSubmitting}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  )
}
