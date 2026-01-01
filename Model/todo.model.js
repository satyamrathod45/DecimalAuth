import mongoose from "mongoose";

const todoSchema = {
        text: {
            type: String,
            required: true,
            trim: true,

        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: "Yellow"
        },
        Rotate: {
            type: Number,
            default: 0,
        }
}


const Todo = mongoose.model('Todo', todoSchema);
export default Todo;