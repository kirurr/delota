import { openDb } from '../database'

type DBImage = { id: number; image: Buffer; order: number }

export default defineEventHandler(async () => {
    const db = await openDb()
    const data = await db.all<DBImage[]>('SELECT * FROM images')

    return data.map((item) => {
        return {
            id: item.id,
            image: `data:image/jpg;base64,${item.image.toString('base64')}`,
            order: item.order
        }
    })
})
