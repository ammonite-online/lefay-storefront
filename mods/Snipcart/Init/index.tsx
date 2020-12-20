import { FC } from 'react'
import Head from 'next/head'
import { pubApiKey } from '../config'

export const SnipcartInit: FC = () => (
    <>
        <Head>
            <link rel="preconnect" href="https://app.snipcart.com" />
            <link rel="preconnect" href="https://cdn.snipcart.com/" />
            <link
                rel="stylesheet"
                href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css"
            />
        </Head>
        <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.js"
        ></script>
        <div
            hidden
            id="snipcart"
            data-api-key={pubApiKey}
            data-config-modal-style="side"
        />
    </>
)
