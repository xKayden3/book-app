'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createBookRoomSchema } from '@/lib/room-validation'
import { createBookEquipmentSchema } from '@/lib/equipments-validations'

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

export async function createBookEquipments(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const {
    equipmentId,
    edpNumber,
    name,
    course,
    purpose,
    contactNo,
    endorsedBy,
    bookDateStart,
    timeStart,
    bookDateEnd,
    timeEnd,
  } = createBookEquipmentSchema.parse(values)

  // const parseBookDate = bookDate.toISOString().split('T')[0].replace(/-/g, '-')
  const parseDateStart = toMySQLDate(bookDateStart)
  const parseTimeStart = toMySQLTime(timeStart)
  const parseDateEnd = toMySQLDate(bookDateEnd)
  const parseTimeEnd = toMySQLTime(timeEnd)
  // await prisma.bookroom.create({
  //   data: {
  //     roomId: parseRoomId,
  //     bookDate: date,
  //     timeStart: timeStart,
  //     timeEnd: parseTimeEnd,
  //   },
  // })

  await prisma.$queryRaw`INSERT INTO bookequipments (equipmentId, edpNumber, name, course, purpose, contactNo, endorsedBy, bookDateStart, timeStart, bookDateEnd, timeEnd) values (${equipmentId}, ${edpNumber}, ${name}, ${course}, ${purpose}, ${contactNo}, ${endorsedBy}, ${parseDateStart}, ${parseTimeStart}, ${parseDateEnd}, ${parseTimeEnd} )`
  redirect('/dashboard')
}
