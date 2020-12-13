import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { IProps } from './types'

export const Link: FC<IProps> = ({ href, children, className }) => {
    const router = useRouter()

    return (
        <NextLink href={href}>
            <a data-selected={router.pathname === href} className={className}>
                {children}
            </a>
        </NextLink>
    )
}
