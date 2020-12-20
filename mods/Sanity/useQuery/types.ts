export enum QueryStatus {
    loading,
    complete,
    error,
}

export interface IState<T> {
    status: QueryStatus
    data: T | undefined
    message: string | undefined
}

export enum ActionType {
    setData,
    setError,
}

export type TAction<T> =
    | { type: ActionType.setData; data: T }
    | { type: ActionType.setError; message: string }

export type TReducer<T> = (
    prevState: IState<T>,
    action: TAction<T>
) => IState<T>
