import { FC } from 'react'
import styles from './styles.module.css'

export const ConfigPanel: FC = () => (
    <div className={styles['config-panel']}>
        <section>
            <h3>Search</h3>
        </section>
        <section>
            <h3>Categories</h3>
        </section>
        <section>
            <h3>Sort</h3>
        </section>
        <section>
            <h3>Filter</h3>
        </section>
    </div>
)
