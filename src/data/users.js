import 'server-only'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '@/db/models'
export async function createUser({ username, password }) {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ username, password: hashedPassword })
  await user.save()
  return user
}

export async function loginUser({ username, password }) {
  const user = await User.findOne({ username })
  if (!user) {
    throw new Error('User not found')
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) {
    throw new Error('Invalid password')
  }
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  })
  return token
}

export async function getUserInfoById(userId) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }
  return { username: user.username }
}

export async function getUserIdByToken(token) {
  if (!token) return null
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded.sub
  } catch (error) {
    return null
  }
}
export async function getUserInfoByToken(token) {
  const userId = await getUserIdByToken(token)
  if (!userId) return null
  return await getUserInfoById(userId)
}
