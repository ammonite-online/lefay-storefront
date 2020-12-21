import { FC } from 'react'
import snippets from 'styles/snippets/button.module.css'
import { Icon, IconName } from 'components/Icon'
import styles from './styles.module.css'

export const SnipcartAccountButton: FC = () => (
    <button
        className={`${snippets.button} ${styles['account-button']} snipcart-customer-signin`}
    >
        <Icon name={IconName.user} />
    </button>
)
