'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createBookRoomSchema } from '@/lib/room-validation'

export async function createBookRoom(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { roomId, bookDate } = createBookRoomSchema.parse(values)

  //  const parseToDate = data.dateTime.toLocaleDateString('sv-SE')
  //  const parseToTime = data.dateTime
  //    .toLocaleString('en-CA', {
  //      timeZone: 'UTC',
  //      hour12: false,
  //    })
  //    .replace(',', '')

  await prisma.bookRoom.create({
    data: {
      rfid: rfid.trim(),
      school_id: school_id.trim(),
      firstname: firstname.trim(),
      middlename: middlename.trim(),
      lastname: lastname.trim(),
      gender,
      address,
      department,
      employment_type,
      profileUrl: profileUrlx,
    },
  })
  redirect('/employees')
}
