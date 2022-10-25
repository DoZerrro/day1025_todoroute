import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        refresh: false,
        targetId: 0
    },
    reducers: {
        changeRefresh: (state) => {
            console.log("changeRefresh.............")
            state.refresh = !state.refresh
        },
        getTargetId: (state, action) => {
            console.log("getTargetId : ", state.targetId)
            state.targetId = action.payload
        }
    }
})

export const {changeRefresh, getTargetId} = todoSlice.actions
export default todoSlice.reducer