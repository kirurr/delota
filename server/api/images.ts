import { db } from '../database'
import { ImagesTable } from '../database/schema'
import type { Image } from '../definition'
import { getPricesBlobs } from '../blobs'

export default defineCachedEventHandler(
    async (): Promise<Array<Image>> => {
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
    },
    {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        group: 'prices',
        name: 'images',
        getKey: () => 'all'
    }
)
