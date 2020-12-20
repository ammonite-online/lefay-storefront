import { useEffect, useReducer, useState } from 'react'
import { client } from '../client'
import { QueryStatus, IState, ActionType, TAction, TReducer } from './types'

const reducer = <T>(state: IState<T>, action: TAction<T>): IState<T> => {
    switch (action.type) {
        case ActionType.setData:
            return {
                data: action.data,
                status: QueryStatus.complete,
                message: undefined,
            }
        case ActionType.setError:
            return {
                data: undefined,
                status: QueryStatus.error,
                message: action.message,
            }
        default:
            return state
    }
}

const initState = {
    status: QueryStatus.loading,
    data: undefined,
    message: undefined,
}

export const useQuery = <T, U extends { [key: string]: unknown }>(
    query: string,
    params: U
): IState<T> => {
    const [mounted, setMounted] = useState(true)
    const [state, dispatch] = useReducer<TReducer<T>>(reducer, initState)

    const fireQuery = async () => {
        try {
            const data: T = await client.fetch(query, params)
            if (mounted)
                dispatch({
                    type: ActionType.setData,
                    data,
                })
        } catch (err) {
            if (mounted)
                dispatch({
                    type: ActionType.setError,
                    message: err?.message || 'An error occurred',
                })
        }
    }

    useEffect(() => {
        fireQuery()
        return () => {
            setMounted(false)
        }
    }, [])

    return state
}
