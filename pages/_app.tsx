import 'styles/globals.css'
import 'styles/typography.css'
import 'styles/palette.css'
import 'styles/principles.css'
import Head from 'next/head'
import { Structure } from 'structure'
import { SnipcartInit } from 'mods/Snipcart'

const Application = ({ Component, pageProps }) => {
    return (
        <Structure>
            <Head>
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
            <Component {...pageProps} />
            <SnipcartInit />
        </Structure>
    )
}

export default Application
