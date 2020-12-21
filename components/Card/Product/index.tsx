import { FC } from 'react'
import snippets from 'styles/snippets/card.module.css'
import { IProps } from './types'
import styles from './styles.module.css'

export const ProductCard: FC<IProps> = ({ product }) => (
    <div className={`${snippets.card} ${styles.card}`}>
        <h3>{product.name}</h3>
    </div>
)
