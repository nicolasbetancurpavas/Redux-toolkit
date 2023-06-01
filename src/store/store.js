import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../feactures/task/taskSlide'

export const store = configureStore({
    reducer: { listTask: taskReducer }
})
