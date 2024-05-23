'use server'

import path from 'path'
import fs from 'node:fs'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { createRoomSchema } from '@/lib/room-validation'
import { z } from 'zod'
import bcrypt from 'bcrypt'

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export async function createUser(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const { email, password } = signupSchema.parse(values)

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({
    data: {
      email: email.trim(),
      password: hashedPassword,
    },
  })

  return user
}
