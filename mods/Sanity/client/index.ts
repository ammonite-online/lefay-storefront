import sanityClient from '@sanity/client'
import { TFireQuery } from './types'

export const client = sanityClient({
    projectId: 'm7iixcz5',
    dataset: 'dev',
    useCdn: true,
})

export const fireQuery: TFireQuery = async (query, params) =>
    await client.fetch(query, params)
