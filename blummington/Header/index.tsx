import { FC } from 'react'
import { SnipcartNav } from 'mods/Snipcart'
import { Link } from 'components/Link'
import { Logo } from 'components/Logo'
import styles from './styles.module.css'

export const MainHeader: FC = () => (
    <header className={styles.header}>
        <nav className={styles['primary-nav']}>
            <ul>
                <li>
                    <Link href="/shop" text="Shop" />
                </li>
                <li>
                    <Link href="/blog" text="Blog" />
                </li>
            </ul>
        </nav>
        <Logo className={styles.logo} />
        <SnipcartNav className={styles['user-nav']} />
    </header>
)
