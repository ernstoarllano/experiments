'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

const randomNumber = () => Math.floor(Math.random() * 1000)

export async function createUser() {
  const number = randomNumber()
  const name = `user-${number}`
  const email = `${name}@prisma.io`

  const data = {
    name,
    email,
  }

  try {
    await prisma.user.create({
      data,
    })
    revalidatePath('/users')
  } catch (e) {
    console.error(e)
  }
}