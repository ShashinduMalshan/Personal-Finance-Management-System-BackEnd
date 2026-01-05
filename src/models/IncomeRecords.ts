import mongoose, { Schema, Document } from "mongoose";

export interface Income extends Document {
  source: string;
  category: string;
  date: Date;
  amount: number;
  autoAdd?: boolean;

}

const incomeSchema = new Schema<Income>(
  {
    source: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    autoAdd: { type: Boolean, required: false }
  },
  { timestamps: true }
);

export const IncomeModel = mongoose.model<Income>("Income", incomeSchema);
