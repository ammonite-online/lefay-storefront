export type TFireQuery = <T, U extends { [index: string]: unknown }>(
    query: string,
    params?: U
) => Promise<T>
