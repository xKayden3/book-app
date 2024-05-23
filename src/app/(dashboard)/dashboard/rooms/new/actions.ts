'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createRoomSchema } from '@/lib/room-validation'
import { toSlug } from '@/lib/utils'
import multer from 'multer'

export async function createRoom(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { title, imgUrl } = createRoomSchema.parse(values)

  //Slug
  const slug = `${toSlug(title)}`

  let picUrlx: string | undefined = undefined

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

  await prisma.rooms.create({
    data: {
      title: title.trim(),
      imgUrl: picUrlx,
    },
  })
  redirect('/dashboard/rooms')
}
