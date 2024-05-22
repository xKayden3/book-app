'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createEquipmentSchema } from '@/lib/equipments-validations'

export async function createEquipment(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { title } = createEquipmentSchema.parse(values)

  await prisma.equipments.create({
    data: {
      title: title.trim(),
    },
  })
  redirect('/dashboard/equipments')
}
