import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    passwordHash:{
        type: String,
        required: true,
    },
    photoUrl:{
        type: String,
    },
    role:{
        type: String,
    },
    tags:{
        type: Array,
    },
    resume:{
        type: String,
    }
    },
    {
        timestamps:true,
    }
);

export default mongoose.model('User', UserSchema);