//Reducer for task
import * as types from './../constants/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ?? []; //Khai bao reducers mac dinh

const findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    })
    return result;
};

const myReducer = (state = initialState, action) => {
    let id = '';
    let index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            let task={
                id:action.task.id,
                name:action.task.name,
                status:action.task.status
            }
            if(!task.id){
                task.id = uuidv4();
                state.push(task);
            } else{
                index = findIndex(state,task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            id = action.id;
            index = findIndex(state, id);

            if (index !== -1) {
                // let cloneTask = {...state[index]};
                // cloneTask.status = !cloneTask.status;
                // state[index] =cloneTask;
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
            }
            localStorage.setItem('tasks', JSON.stringify(state));

            return [...state];
        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('tasks', JSON.stringify(state));

            return [...state];
        default:
            return state;
    }
}

export default myReducer;