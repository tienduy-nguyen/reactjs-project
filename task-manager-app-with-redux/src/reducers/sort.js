//Reducer for task
import * as types from '../constants/actionTypes';

const initialState = {
    by: '',
    value: 1
}; //Khai bao reducers mac dinh

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
           return{
               by:action.sort.by,
               value:action.sort.value
           }

        default:
            return state;
    }
}

export default myReducer;