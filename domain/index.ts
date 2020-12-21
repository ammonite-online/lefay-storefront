export interface Category {
    _id: string
    name: string
    slug: { _type: 'slug'; current: string }
    description: string
}

export interface Product {
    _id: string
    name: string
    slug: { _type: 'slug'; current: string }
    category: Category
}
