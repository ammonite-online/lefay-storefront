import 'styles/globals.css'
import 'styles/typography.css'
import 'styles/palette.css'
import 'styles/principles.css'
import Head from 'next/head'
import { Structure } from 'Structure/'

const Application = ({ Component, pageProps }) => {
    return (
        <>
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
            <Structure>
                <Component {...pageProps} />
            </Structure>
        </>
    )
}

export default Application
