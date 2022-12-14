import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: localStorage.getItem("dd") ? JSON.parse(localStorage.getItem("dd")) : [],
    reducers: {
        loadTodos(state, action){
            return action.payload;
        },
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
        removeAllCompleted(state) {
            return state.filter(item => item.completed === false);
        },
        changeStatus(state, action) {
            const id = state.findIndex(item => item.id === action.payload.id);
            state[id].completed = !state[id].completed;
        },
        selectAllItems(state) {
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