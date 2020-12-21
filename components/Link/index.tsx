import { FC } from 'react'
import NextLink from 'next/link'
import snippets from 'styles/snippets/button.module.css'
import { useRouter } from 'next/router'
import { Icon, IconName } from 'components/Icon'
import { IProps } from './types'
import styles from './styles.module.css'

const Link: FC<IProps> = ({ href, text, icon, className = '' }) => {
    const router = useRouter()

    return (
        <NextLink href={href}>
            <a
                data-selected={router.pathname === href}
                className={`${snippets.button} ${styles['button-link']} ${className}`}
            >
                {icon != null && <Icon name={icon} />}
                {text && <span>{text}</span>}
            </a>
        </NextLink>
    )
}

export { Link, IconName }
