import { Schema, model, Document } from "mongoose";

interface User extends Document {
    ativo: boolean;
    nome:string;
    login?:string;
    senha?:string;
    admin:boolean,

}

export const UserSchema = new Schema({
    ativo: Boolean,
    nome: String,
    login:String,
    senha:String,
    admin:Boolean,

    
}, {
    timestamps: true
})

UserSchema.index({ login: 1 }, { unique: true });


export default model<User>('user',UserSchema)