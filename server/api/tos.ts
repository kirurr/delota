import { db } from '../database'
import { TosItemsTable, TosSubItemsTable } from '../database/schema'
import type { TosItem } from '../definition'

export default defineCachedEventHandler(
    async (): Promise<Array<TosItem>> => {
        const tos = await db.select().from(TosItemsTable)
        const subTos = await db.select().from(TosSubItemsTable)

        const result = tos.map((item) => ({
            ...item,
            subItems:
                item.subItems !== null
                    ? subTos
                          .filter((subItem) =>
                              item.subItems?.includes(subItem.id)
                          )
                          .sort((a, b) => a.order - b.order)
                    : null
        }))
        result.sort((a, b) => a.order - b.order)

        return result
    },
    {
        maxAge: 60 * 60 * 24 * 7,
        group: 'tos',
        name: 'items',
        getKey: () => 'all'
    }
)
