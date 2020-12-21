import { FC } from 'react'
import { ProductCard } from 'components/Card/Product'
import headings from 'styles/snippets/headings.module.css'
import styles from './styles.module.css'
import { IProps } from './types'

export const ShopSection: FC<IProps> = ({ category }) =>
    category.products.length > 0 && (
        <section className={styles.shopSection}>
            <header>
                <h2 className={headings['section-heading']}>{category.name}</h2>
                <p>{category.description}</p>
            </header>
            <ul>
                {category.products.map((product, j) => (
                    <li key={j}>
                        <ProductCard
                            product={{
                                ...product,
                                category: {
                                    name: category.name,
                                },
                            }}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
