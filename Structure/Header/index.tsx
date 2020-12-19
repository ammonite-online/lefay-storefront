import { FC, useState } from 'react'
import { Link, IconName } from 'components/Link'
import { Button, ButtonKind } from 'components/Button'
import { Logo } from 'components/Logo'
import styles from './styles.module.css'

export const MainHeader: FC = () => {
    const [cartSelected, setCartSelected] = useState(false)
    const [accountSelected, setAccountSelected] = useState(false)
    return (
        <header className={styles.header}>
            <nav className={styles['primary-nav']}>
                <ul>
                    <li>
                        <Link href="/" text="Shop" />
                    </li>
                    <li>
                        <Link href="/blog" text="Blog" />
                    </li>
                </ul>
            </nav>
            <Logo className={styles.logo} />
            <nav className={styles['user-nav']}>
                <ul>
                    <li>
                        <Button
                            onPress={() => {
                                setCartSelected(!cartSelected)
                            }}
                            icon={IconName.basket}
                            kind={ButtonKind.secondary}
                            selected={cartSelected}
                        />
                    </li>
                    <li>
                        <Button
                            onPress={() => {
                                setAccountSelected(!accountSelected)
                            }}
                            icon={IconName.user}
                            kind={ButtonKind.secondary}
                            selected={accountSelected}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
