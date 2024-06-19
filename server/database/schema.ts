import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const ImagesTable = pgTable('Images', {
    id: serial('id').primaryKey(),
    order: integer('order').notNull().unique(),
    name: text('name').notNull()
})

export const TosItemsTable = pgTable('TosItems', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    order: integer('order').notNull().unique(),
    subItems: integer('subItems').array()
})

export const TosSubItemsTable = pgTable('TosSubItems', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    order: integer('order').notNull()
})
