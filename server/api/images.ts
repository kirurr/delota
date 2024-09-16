import { db } from '../database'
import { ImagesTable } from '../database/schema'
import type { Image } from '../definition'
import { getPricesBlobs } from '../blobs'

const options = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    group: 'prices',
    name: 'images',
    getKey: () => 'all'
}

async function imagesHandler(): Promise<Array<Image>> {
    const [images, blob] = await Promise.all([
        db.select().from(ImagesTable),
        getPricesBlobs()
    ])

    const result = images.map((image) => ({
        ...image,
        url: blob.blobs.find((blobItem) =>
            blobItem.pathname.includes(image.name)
        )!.url
    }))

    return result
}

export default defineCachedEventHandler(imagesHandler, options)
// export default defineEventHandler(async () => {
//     await new Promise((resolve) => setTimeout(resolve, 3000));
//     return await imagesHandler();
// })
