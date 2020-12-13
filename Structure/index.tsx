import { FC } from 'react'
import Head from 'next/head'
import { MainHeader } from './Header'
import { MainContent } from './Content'
import { MainFooter } from './Footer'
import { IProps } from './types'

export const Structure: FC<IProps> = ({ title, children }) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="preload"
                href="/fonts/montserrat-v15-latin-regular.woff"
                as="font"
                type="font/woff"
                crossOrigin="true"
            />
            <link
                rel="preload"
                href="/fonts/montserrat-v15-latin-700.woff2"
                as="font"
                type="font/woff"
                crossOrigin="true"
            />
            <link
                rel="preload"
                href="/fonts/Alegreya-Regular.woff"
                as="font"
                type="font/woff"
                crossOrigin="true"
            />
        </Head>

        <MainHeader />

        <MainContent>{children}</MainContent>

        <MainFooter />
    </>
)
