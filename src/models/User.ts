import mongoose , {Schema} from "mongoose";
import { User } from "../entities/User";

const userSchema = new Schema<User>({

    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    isBlocked: {
        type: Boolean,
        required: true
    },

    deletedAt: {
        type: Date,
        required: true
    },
    updatedBy: {
        type: Number,
        required: true
    },
},
{
    timestamps: true,

});

export default mongoose.model<User>("User", userSchema);