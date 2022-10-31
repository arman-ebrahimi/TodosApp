import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addToTodos(state, action) {
            state.push(action.payload);
        },
        editTodos(state, action) {
            state[action.payload.index].text = action.payload.text;
        },
        removeItem(state, action) {
            const id = state.findIndex(item => item.id === action.payload.id);
            state.splice(id, 1); //remove an item in specified position
        },
        removeAllCompleted(state, action) {
            const newArray = state.filter(item => item.completed === false);
            return newArray;
        },
        changeStatus(state, action) {
            const id = state.findIndex(item => item.id === action.payload.id);
            state[id].completed = !state[id].completed;
        },
        selectAllItems(state, action) {
            let uncompletedItem = state.some(item => item.completed === false);
            if(!uncompletedItem){
                for(let i=0; i < state.length; i++){
                    state[i].completed = false;
                }
            }
            else{
                for(let i=0; i < state.length; i++){
                    if(state[i].completed === false){
                        state[i].completed = true;
                    }
                }
            }
        }
    }
})

export default todoSlice.reducer;