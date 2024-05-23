'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

type FormState = { error?: string } | undefined
// export async function deleteRoom(id: number) {
//   try {
//     await prisma.rooms.delete({
//       where: { id },
//     })
//   } catch (error) {
//     let message = 'Unexpected error'
//     if (error instanceof Error) {
//       message = error.message
//     }
//     return { error: message }
//   }
//   revalidatePath('dashboard/rooms')
//   return { message: 'Deleted' }
//   // redirect('/dashboard/rooms')
// }

export async function deleteRoom(prevState: FormState, formData: FormData) {
  try {
    const equipmentId = parseInt(formData.get('equipmentId') as string)

    await prisma.equipments.delete({
      where: { id: equipmentId },
    })

    revalidatePath('/dashboard/equipments')
  } catch (error) {
    let message = 'Unexpected error'
    if (error instanceof Error) {
      message = error.message
    }
    return { error: message }
  }

  redirect('/dashboard/equipments')
}
