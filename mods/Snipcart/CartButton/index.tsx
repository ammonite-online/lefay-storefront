import { FC } from 'react'
import snippets from 'styles/snippets.module.css'
import { Icon, IconName } from 'components/Icon'
import styles from './styles.module.css'

export const SnipcartCartButton: FC = () => (
    <button
        className={`${snippets.button} ${styles['cart-button']} snipcart-checkout`}
    >
        <Icon name={IconName.basket} />
        <span className={`${styles['item-count']} snipcart-items-count`}></span>
    </button>
)
