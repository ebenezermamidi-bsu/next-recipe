import 'server-only'
import mongoose from 'mongoose'
export async function initDB() {
  if (mongoose.connection.readyState === 0) {
    const connection = await mongoose.connect(process.env.DATABASE_URL)
    return connection
  }
}
