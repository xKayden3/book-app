'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createRoomSchema } from '@/lib/room-validation'

export async function createRoom(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { title } = createRoomSchema.parse(values)

  await prisma.rooms.create({
    data: {
      title: title.trim(),
    },
  })
  redirect('/dashboard/rooms')
}
