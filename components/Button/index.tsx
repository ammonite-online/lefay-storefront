import { FC } from 'react'
import snippets from 'styles/snippets/button.module.css'
import { Icon, IconName } from 'components/Icon'
import { IProps, ButtonKind } from './types'
import styles from './styles.module.css'

const Button: FC<IProps> = ({
    onPress,
    icon,
    text,
    kind = ButtonKind.primary,
    className = '',
    selected = false,
}) => (
    <button
        className={`${snippets.button}  ${styles[kind]} ${className}`}
        onPointerDown={() => onPress && onPress()}
        data-selected={selected}
    >
        {icon != null && <Icon name={icon} />}
        {text && <span>{text}</span>}
    </button>
)

export { Button, ButtonKind, IconName }
