import { db } from './index'
import { ImagesTable } from './schema'

const imagesArray = [
    {
        order: 1,
        image: 'image1'
    },
    {
        order: 2,
        image: 'image2'
    },
    {
        order: 3,
        image: 'image3'
    },
    {
        order: 4,
        image: 'image4'
    },
    {
        order: 5,
        image: 'image5'
    },
    {
        order: 6,
        image: 'image6'
    },
    {
        order: 7,
        image: 'image7'
    },
    {
        order: 8,
        image: 'image8'
    },
    {
        order: 9,
        image: 'image9'
    },
    {
        order: 10,
        image: 'image10'
    }
]

const seedImages = async () => {
    await db.insert(ImagesTable).values(imagesArray)
}

seedImages()
