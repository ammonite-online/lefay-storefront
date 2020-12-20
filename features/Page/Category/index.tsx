import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fireQuery } from 'mods/Sanity'
import { Page } from 'structure/Page'
import { IProps, TCategory } from './types'

export const Category: FC<IProps> = ({ category }) => (
    <Page title={`Studio le fay - ${category.name}`}></Page>
)

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: (
        await fireQuery<TCategory[], undefined>('*[_type == "category"]')
    ).map(cat => ({ params: { id: cat.slug.current } })),
    fallback: false,
})

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => ({
    props: {
        category: await fireQuery<TCategory, undefined>(
            `*[_type == "category" && slug.current == "${params.id}"][0]`
        ),
    },
})
