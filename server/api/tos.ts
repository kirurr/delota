import { db } from '../database'
import { TosItemsTable, TosSubItemsTable } from '../database/schema'
import type { TosItem } from '../definition'

const options = {
    maxAge: 60 * 60 * 24 * 7,
    group: 'tos',
    name: 'items',
    getKey: () => 'all'
}

export default defineCachedEventHandler(async (): Promise<Array<TosItem>> => {
    // TODO: add cache invalidation
    //
    useStorage('cache').removeItem(
        `nitro:${options.group}:${options.name}:${options.getKey()}.json`
    )
    //
    //

    const [tos, subTos] = await Promise.all([
        db.select().from(TosItemsTable),
        db.select().from(TosSubItemsTable)
    ])

    const result = tos.map((item) => ({
        ...item,
        subItems:
            item.subItems !== null
                ? subTos
                      .filter((subItem) => item.subItems?.includes(subItem.id))
                      .sort((a, b) => a.order - b.order)
                : null
    }))
    result.sort((a, b) => a.order - b.order)

    return result
}, options)
