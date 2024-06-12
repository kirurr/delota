export type Image = {
    id: string
    order: number
    image: string
}

export type TosItem = {
    id: string
    content: string
    order: number
}

export type TosSubItem = {
    id: string
    content: string
    order: number
}

export type ResultTosList = {
    sub_items: TosSubItem[] | null
} & TosItem
