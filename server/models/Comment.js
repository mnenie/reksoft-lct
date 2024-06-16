import mongoose from "mongoose";


const CommentSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    text:{
        type: String,
        required: true,
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }
    },
    {
        timestamps:true,
    }
);

export default mongoose.model('Comment', CommentSchema);