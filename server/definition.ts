export type Image = {
    id: number
    order: number
    name: string
    url: string
}

export type TosItem = {
    id: number
    content: string
    order: number
    subItems?: TosSubItem[] | null
}

export type TosSubItem = {
    id: number
    content: string
    order: number
}
