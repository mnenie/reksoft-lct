import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    postType:{
        type: String,
    },
    text:{
        type: String,
    },
    img:[{
        type: Object,
    }],
    attachment:[{
        type: Object,
    }],
    likeCount:{
        type: Number,
        default: 0,
    },
    userLikes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    tags:[{
        type: String,
    }],
    },
    {
        timestamps:true,
    }
);

export default mongoose.model('Post', PostSchema);