'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type FormState = { error?: string } | undefined

// export async function updateRoomSubmission(
//   prevState: FormState,
//   formData: FormData
// ): Promise<FormState> {
//   try {
//     const roomId = parseInt(formData.get('roomId') as string)
//     const title = formData.get('title') as string

//     await prisma.rooms.update({
//       where: { id: roomId },
//       data: { title: title },
//     })
//   } catch (error) {
//     let message = 'Unexpected error'
//     if (error instanceof Error) {
//       message = error.message
//     }
//     return { error: message }
//   }
//   redirect('/dashboard/rooms')
// }

export async function updateEquipmentSubmission(formData: FormData) {
  try {
    const equipId = parseInt(formData.get('id') as string)
    const title = formData.get('title') as string

    await prisma.equipments.update({
      where: { id: equipId },
      data: { title: title },
    })
  } catch (error) {
    let message = 'Unexpected error'
    if (error instanceof Error) {
      message = error.message
    }
    return { error: message }
  }
  redirect('/dashboard/equipments')
}
