import { Product, Category } from 'domain/'

type TProduct = Pick<Product, 'name' | 'slug'> & {
    category: Pick<Category, 'name'>
}

export interface IProps {
    product: TProduct
}
