'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createBookRoomSchema } from '@/lib/room-validation'

export async function createBookRoom(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { roomId, bookDate } = createBookRoomSchema.parse(values)

  const parseRoomId = parseInt(roomId)

  const date = new Date(bookDate)

  // const parseToDate = bookDate.toISOString()

  await prisma.bookRoom.create({
    data: {
      roomId: parseRoomId,
      bookDate: date,
      timeStart: date,
      timeEnd: date,
    },
  })
  redirect('/dashboard')
}
