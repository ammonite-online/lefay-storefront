import { FC } from 'react'
import styles from './styles.module.css'

export const MainContent: FC = ({ children }) => {
    return <main className={styles.main}>{children}</main>
}
