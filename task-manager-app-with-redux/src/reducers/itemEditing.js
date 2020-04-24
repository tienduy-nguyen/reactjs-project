//Reducer for task
import * as types from '../constants/actionTypes';

const initialState = {
    id:'',
    name:'',
    status:false
}; //Khai bao reducers mac dinh

const myReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.EDIT_TASK:
            state = action.task;
            return state;
        default:
            return state;
    }
}

export default myReducer;