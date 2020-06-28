//Reducer for task
import * as types from '../constants/actionTypes';

const initialState = {
    name:'',
    status:-1
}; //Khai bao reducers mac dinh

const myReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.FILTER_TABLE:
            return {
                name:action.filter.name,
                status:parseInt(action.filter.status,10)
            };

        default:
            return state;
    }
}

export default myReducer;