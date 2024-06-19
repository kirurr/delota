import { list } from '@vercel/blob'
import 'dotenv/config'

export async function getPricesBlobs() {
    return await list({
        prefix: 'prices/'
    })
}
