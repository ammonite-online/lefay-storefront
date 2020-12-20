import { Category } from 'domain/'

export type TCategory = Pick<Category, 'name' | 'slug'>

export interface IProps {
    category: TCategory
}
