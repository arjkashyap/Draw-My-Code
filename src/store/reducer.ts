// Reducer method for editing array
import { ArrayInit, searchInit } from '../components/SearchAlgos'
import { arrayActions, CHANGE_TAB, UPDATE_SEARCH } from './actionTypes'
import { IStoreAction } from '../interface/store'

export const arrayReducer = (state = ArrayInit, action: IStoreAction) => {
    switch (action.type) {
        case arrayActions.ADD_BOX:
            return [...state, 0]

        case arrayActions.POP_BOX:
            return state.filter((e, index) => index !== action.payload.index)

        case arrayActions.UPDATE:
            const index = action.payload.index
            const newValue = action.payload.newValue
            const newArr = state.map((e, i) => {
                if (i === index) {
                    return newValue
                }
                return e
            })
            return newArr

        default:
            return state
    }
}

export const searchReducer = (state = searchInit, action: IStoreAction) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            const newValue = action.payload.newValue
            return newValue

        default:
            return state
    }
}
