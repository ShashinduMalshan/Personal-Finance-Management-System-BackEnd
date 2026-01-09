import mongoose, { Schema, Document } from "mongoose";

export interface Expence extends Document {

    description: string;
    category: string;
    date: Date;
    amount: number;
    autoAdd?: boolean;

}

const expenceSchema = new Schema<Expence>(
    {
        description: { type: String, required: true },
        category: { type: String, required: true },
        date: { type: Date, required: true },
        amount: { type: Number, required: true },
        autoAdd: { type: Boolean, required: false }
    },
    { timestamps: true }
);

export const ExpenceModel = mongoose.model<Expence>("Expence", expenceSchema);
