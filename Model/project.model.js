import mongoose from "mongoose";

const UserSchema = {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    }
    
}