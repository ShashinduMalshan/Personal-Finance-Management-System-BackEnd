import mongoose, {Schema , Document} from 'mongoose';


export interface IUser extends Document {
    username: string
    email: string
    password: string

}

export const userSchema = new Schema<IUser>({
    username:{ type:String, required:true },
    email: { type:String,required:true },
    password: { type:String,required:true }
})


export const User = mongoose.model<IUser>('User', userSchema);