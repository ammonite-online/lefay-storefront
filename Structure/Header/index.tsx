import { FC } from 'react'
import { Link } from 'components/Link'
import { Logo } from 'components/Logo'
import styles from './styles.module.css'

export const MainHeader: FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles['primary-nav']}>
                <ul>
                    <li>
                        <Link href="/">Shop</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <Logo className={styles.logo} />
            <nav className={styles['user-nav']}>
                <ul>
                    <li>
                        <Link href="/">Shop</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
