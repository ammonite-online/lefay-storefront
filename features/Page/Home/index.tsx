import { FC } from 'react'
import { Page } from 'structure/Page'
import styles from './styles.module.css'

export const Home: FC = () => (
    <Page title="Studio le fay">
        <section className={styles.section}>
            <h1>This will be the home screen</h1>
        </section>
    </Page>
)
