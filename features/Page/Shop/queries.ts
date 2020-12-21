export const getCats = `// groq
    *[_type == "category"]{
        _id, name, slug, description,
        "products": *[_type == "product" && references(^._id)]{
             _id, name, slug
        } | order(_createdAt desc)[0..3]
    } | order(name asc)
`
