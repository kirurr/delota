import { openDb } from '../database'
import type { ResultTosList, TosItem } from '../definition'

type DBResult = { sub_items: string } & TosItem

const query = `SELECT tl.id AS id, tl."order" AS "order", tl.content AS content,
    CASE 
        WHEN COUNT(tsi.id) > 0 THEN json_group_array(json_object('id', tsi.id, 'content', tsi.content, 'order', tsi."order") ORDER BY tsi."order")
        ELSE NULL
    END AS sub_items
    FROM tos_list tl
    LEFT JOIN tos_list_sub_items tlsi ON tl.id = tlsi.list_id
    LEFT JOIN tos_sub_items tsi ON tlsi.sub_item_id = tsi.id
    GROUP BY tl.id`

export default defineEventHandler(async (): Promise<ResultTosList[]> => {
    const db = await openDb()
    const data = await db.all<DBResult[]>(query)
    const result = data.map((item) => {
        let sub_items
        if (item.sub_items !== null) {
            sub_items = JSON.parse(item.sub_items).map((sub_item: string) =>
                JSON.parse(sub_item)
            )
        } else {
            sub_items = null
        }
        return { ...item, sub_items: sub_items }
    }) as ResultTosList[]
    return result
})
