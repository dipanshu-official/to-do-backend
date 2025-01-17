import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subTodo',
        }
    ]
},{timestamps:true});

export const todo = mongoose.model ('todo', todoSchema);