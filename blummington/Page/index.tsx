import Head from 'next/head'
import { FC } from 'react'
import styles from './styles.module.css'
import { IProps } from './types'

export const Page: FC<IProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={styles.main}>{children}</main>
        </>
    )
}
