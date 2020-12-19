import { FC } from 'react'
import { MainHeader } from './Header'
import { MainFooter } from './Footer'

export const Structure: FC = ({ children }) => (
    <>
        <MainHeader />
        {children}
        <MainFooter />
    </>
)
