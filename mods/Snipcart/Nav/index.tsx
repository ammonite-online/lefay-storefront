import { FC } from 'react'
import { SnipcartCartButton } from '../CartButton'
import { SnipcartAccountButton } from '../AccountButton'
import { IProps } from './types'

export const SnipcartNav: FC<IProps> = ({ className = '' }) => (
    <nav className={`${className}`}>
        <ul>
            <li>
                <SnipcartCartButton />
            </li>
            <li>
                <SnipcartAccountButton />
            </li>
        </ul>
    </nav>
)
