import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'

export async function openDb() {
  return open({
    filename: path.join(process.cwd(), '/public/delota.db'),
    driver: sqlite3.cached.Database
  })
}
