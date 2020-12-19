import { IconName } from 'components/Icon'

export enum ButtonKind {
    primary = 'primary',
    secondary = 'secondary',
}

export interface IProps {
    onPress: () => void
    className?: string
    kind?: ButtonKind
    text?: string
    icon?: IconName
    selected?: boolean
}
