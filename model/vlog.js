
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const vlogSchema = new Schema({
    tittle: {
                type: String,
                required: true,
            },
        
            description: {
                type: String,
                required: true,
            },
        
            Image: {
                type: String,
                required: true,
            },
        
            user: {
                type: String,
                required: true,
            },
        });

export default mongoose.model("vlog" , vlogSchema);
