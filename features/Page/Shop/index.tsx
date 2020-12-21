import { fireQuery } from 'mods/Sanity'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { Page } from 'structure/Page'
import headings from 'styles/snippets/headings.module.css'
import styles from './styles.module.css'
import { IProps, TCategory } from './types'
import { getCats } from './queries'
import { ConfigPanel } from './ConfigPanel'
import { ShopSection } from './Section'

export const Shop: FC<IProps> = ({ categories }) => (
    <Page title="Studio le fay - shop" className={styles.page}>
        <ConfigPanel />
        <div className={styles.content}>
            <header>
                <h1 className={headings['page-heading']}>Shop</h1>
            </header>
            {categories?.map((cat, i) => (
                <ShopSection key={i} category={cat} />
            ))}
        </div>
    </Page>
)

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const categories = await fireQuery<TCategory[], undefined>(getCats)

    return {
        props: {
            categories,
        },
    }
}
