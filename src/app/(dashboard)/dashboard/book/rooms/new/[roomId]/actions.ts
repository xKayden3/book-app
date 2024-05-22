'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createBookRoomSchema } from '@/lib/room-validation'

function toMySQLTime(date: Date) {
  const pad = (number: number) => (number < 10 ? '0' : '') + number

  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())
  const seconds = pad(date.getSeconds())

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function toMySQLTimeEnd(date: Date) {
  const pad = (number: number) => (number < 10 ? '0' : '') + number

  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours() + 1)
  const minutes = pad(date.getMinutes())
  const seconds = pad(date.getSeconds())

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function toMySQLDate(date: Date) {
  const pad = (number: number) => (number < 10 ? '0' : '') + number

  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())
  const seconds = pad(date.getSeconds())

  return `${year}-${month}-${day}`
}

export async function createBookRoom(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { roomId, bookDate, timeStart } = createBookRoomSchema.parse(values)

  console.log(values)
  // const parseBookDate = bookDate.toISOString().split('T')[0].replace(/-/g, '-')
  const parseDate = toMySQLDate(bookDate)
  const parseTimeStart = toMySQLTime(timeStart)
  const parseTimeEnd = toMySQLTimeEnd(timeStart)
  // await prisma.bookroom.create({
  //   data: {
  //     roomId: parseRoomId,
  //     bookDate: date,
  //     timeStart: timeStart,
  //     timeEnd: parseTimeEnd,
  //   },
  // })

  await prisma.$queryRaw`INSERT INTO bookroom (roomId, bookDate, timeStart, timeEnd) values (${roomId}, ${parseDate}, ${parseTimeStart}, ${parseTimeEnd} )`
  redirect('/dashboard')
}
