import { Schema, model, Document } from "mongoose";

interface Denuncia extends Document {
    titulo?:string;
    msg:string;
    data:Date,
    lida:boolean,
}

export const DenunciaSchema = new Schema({
    titulo: String,
    msg: String,
    data:Date,
    lida:Boolean,
    
}, {
    timestamps: true
})

DenunciaSchema.index({ data: 1 });


export default model<Denuncia>('denuncia',DenunciaSchema)