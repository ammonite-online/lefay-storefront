import { FC } from 'react'
import { Page } from 'structure/Page'

export const Shop: FC = () => (
    <Page title="Studio le fay - shop">
        <h1>Hello world</h1>
        <button
            className="snipcart-add-item"
            data-item-id="starry-night"
            data-item-price="79.99"
            data-item-url="/paintings/starry-night"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image="/assets/images/starry-night.jpg"
            data-item-name="The Starry Night"
            data-item-custom1-name="Frame color"
            data-item-custom1-options="Black|Brown|Gold"
        >
            Add to cart
        </button>
    </Page>
)
