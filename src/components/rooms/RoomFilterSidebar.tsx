import { jobTypes } from '@/lib/job-types'
import prisma from '@/lib/prisma'
import { JobFilterValues, jobFilterSchema } from '@/lib/validation'
import { redirect } from 'next/navigation'
import FormSubmitButton from './FormSubmitButton'
import { Input } from './ui/input'
import { Label } from './ui/label'
import Select from './ui/select'
import { roomFilterSchema, RoomFilterValues } from '@/lib/room-validation'

async function filterRoom(formData: FormData) {
  'use server'

  const values = Object.fromEntries(formData.entries())

  const { q, bookDate, timeStart } = roomFilterSchema.parse(values)

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(bookDate && { bookDate }),
    ...(timeStart && { timeStart }),
  })

  redirect(`/?${searchParams.toString()}`)
}

interface RoomFilterSidebarProps {
  defaultValues: RoomFilterValues
}

export default async function RoomFilterSidebar({
  defaultValues,
}: RoomFilterSidebarProps) {
  return (
    <aside className='sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]'>
      <form action={filterRoom} key={JSON.stringify(defaultValues)}>
        <div className='space-y-4'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='q'>Search</Label>
            <Input
              id='q'
              name='q'
              placeholder='Room'
              defaultValue={defaultValues.q}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='type'>Type</Label>
            <Select
              id='type'
              name='type'
              defaultValue={defaultValues.type || ''}
            >
              <option value=''>All types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='location'>Location</Label>
            <Select
              id='location'
              name='location'
              defaultValue={defaultValues.location || ''}
            >
              <option value=''>All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className='flex items-center gap-2'>
            <input
              id='remote'
              name='remote'
              type='checkbox'
              className='scale-125 accent-black'
              defaultChecked={defaultValues.remote}
            />
            <Label htmlFor='remote'>Remote jobs</Label>
          </div>
          <FormSubmitButton className='w-full'>Filter jobs</FormSubmitButton>
        </div>
      </form>
    </aside>
  )
}
