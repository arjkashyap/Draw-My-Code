import { arrayActions, UPDATE_SEARCH } from './actionTypes'

//Actions

// Update an index of array
export const arrayUpdate = (newValue, index, isValid) => ({
    type: arrayActions.UPDATE,
    payload: {
        newValue: newValue,
        index: index,
        isValid: isValid, // Checks if the input is validated
    },
})

// Push a new col in array
export const arrayPush = () => ({
    type: arrayActions.ADD_BOX,
})

// Remove last index
export const arrayPop = (index) => ({
    type: arrayActions.POP_BOX,
    payload: {
        index: index,
    },
})

// Change the Search element
export const searchUpdate = (newValue) => ({
    type: UPDATE_SEARCH,
    payload: {
        newValue: newValue,
    },
})
