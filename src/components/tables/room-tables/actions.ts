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
    const roomId = parseInt(formData.get('roomId') as string)

    await prisma.rooms.delete({
      where: { id: roomId },
    })

    revalidatePath('/dashboard/rooms')
  } catch (error) {
    let message = 'Unexpected error'
    if (error instanceof Error) {
      message = error.message
    }
    return { error: message }
  }

  redirect('/dashboard/rooms')
}
