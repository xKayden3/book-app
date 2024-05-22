import { z } from 'zod'

// for string
const requiredString = z.string().min(1, 'Required')

// for numeric
const numericRequiredString = requiredString.regex(/^\d+$/, 'Must be a number')

// for email
const emailSchema = z
  .object({
    companyEmail: z.string().max(100).email().optional().or(z.literal('')),
  })
  .refine((data) => data.companyEmail, {
    message: 'Email is required',
    path: ['companyEmail'],
  })

// for profile avatar
const profileLogoSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith('image/')),
    'Must be an image file'
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2
  }, 'File must be less than 2 MB')

// for department
// const department = z.object({
//  department: requiredString.refine(value => departments.includes(value), 'Invalid Department')
// }).refine(data=>)

export const IMG_MAX_LIMIT = 1
const ImgSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string(),
})

export const createRoomSchema = z.object({
  title: requiredString.max(100),
})

export type CreateRoomValues = z.infer<typeof createRoomSchema>

export const updateRoomSchema = z.object({
  id: z.number(),
  title: requiredString.max(100),
  // imgUrl: z.array(z.instanceof(File)),
  // imgUrl: z
  //   .array(ImgSchema)
  //   .max(IMG_MAX_LIMIT, { message: 'You can only add up to 1 image' })
  //   .min(1, { message: 'At least one image must be added.' }),
})

export type UpdateRoomValues = z.infer<typeof updateRoomSchema>

export const roomFilterSchema = z.object({
  q: z.string().optional(),
  bookDate: z.coerce.string().optional(),
  timeStart: z.string().time(),
  // department: z.string().optional(),
  // boolean
  // remote: z.coerce.boolean().optional()
})

export type RoomFilterValues = z.infer<typeof roomFilterSchema>

export type Room = {
  id: number
  title: string
  imgUrl: string | null
  isAvailable: boolean
  createdAt: Date
  updatedAt: Date
}

export const createBookRoomSchema = z.object({
  roomId: numericRequiredString,
  bookDate: z.coerce.date(),
  // timeStart: z.date(),
  // timeEnd: z.date(),
})

export type CreateBookRoomValues = z.infer<typeof createBookRoomSchema>
