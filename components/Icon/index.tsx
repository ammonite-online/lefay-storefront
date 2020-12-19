import { FC } from 'react'
import { IconName, IProps } from './types'
import styles from './styles.module.css'
import { action } from './Action'

const iconMap = {
    [IconName.settings]: action.Settings,
    [IconName.basket]: action.Basket,
    [IconName.user]: action.User,
}

const Icon: FC<IProps> = ({ name, className = '' }) => {
    const I = iconMap[name]
    return (
        <span className={`${styles.icon} ${className}`}>
            <I />
        </span>
    )
}

export { Icon, IconName }
