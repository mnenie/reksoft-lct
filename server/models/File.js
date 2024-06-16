import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  size:{
    type: Number,
    required: true,
  }
 }, 
{ timestamps: true });

export default mongoose.model('File', FileSchema);
