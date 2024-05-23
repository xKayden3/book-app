import { z } from 'zod'

export type Equipments = {
  id: number
  title: string
  imgUrl: string | null
  isAvailable: boolean
}

// for string
const requiredString = z.string().min(1, 'Required')

// for numeric
const numericRequiredString = requiredString.regex(/^\d+$/, 'Must be a number')

const imgSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith('image/')),
    'Must be an image file'
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2
  }, 'File must be less than 2 MB')

export const createEquipmentSchema = z.object({
  title: requiredString.max(100),
  imgUrl: imgSchema,
})

export type CreateEquipmentValues = z.infer<typeof createEquipmentSchema>

export type Equipment = {
  id: number
  title: string
  imgUrl: string | null
  isAvailable: boolean
  createdAt: Date
  updatedAt: Date
}

export const createBookEquipmentSchema = z.object({
  equipmentId: numericRequiredString,
  bookDate: z.coerce.date(),
  timeStart: z.coerce.date(),
  // timeEnd: z.date(),
})

export type CreateBookEquipmentValues = z.infer<
  typeof createBookEquipmentSchema
>
