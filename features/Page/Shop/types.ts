import { Product, Category } from 'domain/'

export type TProduct = Pick<Product, 'name' | 'slug'>

export type TCategory = Pick<Category, 'name' | 'slug' | 'description'> & {
    products: TProduct[]
}

export interface IProps {
    categories: Array<TCategory>
}
