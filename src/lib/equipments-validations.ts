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

export const createEquipmentSchema = z.object({
  title: requiredString.max(100),
})

export type CreateEquipmentValues = z.infer<typeof createEquipmentSchema>
