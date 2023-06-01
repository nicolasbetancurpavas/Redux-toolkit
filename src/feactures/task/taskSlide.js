import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    tasks: [
        {
            id: 1,
            title: 'tarea1',
            description: 'hacer aseo',
            completed: false
        },
        {
            id: 2,
            title: 'tarea2',
            description: 'hacer comida',
            completed: true
        },
    ],

    modal: false,
    idEdit: null

}

export const taskSlide = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload
            const foundTask = state.tasks.find(task => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        },
        deleteTask: (state, action) => {
            const foundTask = state.tasks.find((task) => task.id === action.payload);
            if (foundTask) {
                state.tasks.splice(state.tasks.indexOf(foundTask), 1);
            }
        },
        completedTask: (state, action) => {
            const found = state.tasks.find((task) => task.id === action.payload)
            if (found) {
                found.completed = !found.completed
            }
        },
        toggleModal: (state, action) => {
            state.modal = !state.modal
            state.idEdit = action.payload
        }
    }
})

export const { addTask, editTask, deleteTask, completedTask, toggleModal } = taskSlide.actions
export default taskSlide.reducer
