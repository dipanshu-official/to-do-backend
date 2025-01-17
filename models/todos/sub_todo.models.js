import mongoose from "mongoose";

const subTodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
},{timestamps:true});

export const subTodo = mongoose.model('subTodo',subTodoSchema);