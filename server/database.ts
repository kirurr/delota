import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'
import 'dotenv/config'

export async function openDb() {
    let filename
    if (process.env.NODE_ENV === 'development') {
        filename = path.join(process.cwd(), '/public/delota.db')
    } else {
        // const assets = useStorage('assets:server')
        // filename = await assets.getItem('delota.db')
        filename = '/delota.db'
    }
    console.log(filename)
    return open({
        filename: filename,
        driver: sqlite3.cached.Database
    })
}
