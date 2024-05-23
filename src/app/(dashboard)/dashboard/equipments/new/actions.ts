'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createEquipmentSchema } from '@/lib/equipments-validations'
import { toSlug } from '@/lib/utils'

export async function createEquipment(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { title, imgUrl } = createEquipmentSchema.parse(values)

  let picUrlx: string | undefined = undefined

  //Slug
  const slug = `${toSlug(title)}`

  // Profile
  const extension: string | undefined = imgUrl?.name.split('.').pop()
  const fileName = `${slug}.${extension}`

  const stream = fs.createWriteStream(`public/uploads/${fileName}`)
  const bufferedImage = await imgUrl.arrayBuffer()

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(error.message)
    }
  })

  // const storage = multer.diskStorage({
  //   destination: './public/uploads/',
  //   filename: fileName,
  // })

  // const upload = multer({ storage })

  // upload.single('file')

  picUrlx = `/uploads/${fileName}`

  await prisma.equipments.create({
    data: {
      title: title.trim(),
      imgUrl: picUrlx,
    },
  })
  redirect('/dashboard/equipments')
}
