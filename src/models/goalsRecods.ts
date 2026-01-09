import mongoose, { Schema, Document } from "mongoose";


export interface Goal extends Document {
  name: string;
  category: 'Electronics' | 'Travel' | 'Education' | 'Finance' | 'Lifestyle' | 'Other';
  targetAmount: number;
  currentAmount: number;
  targetDate?: Date;
  autoAdd?: boolean; // optional, for automatic savings
}


const goalSchema = new Schema<Goal>(
  {
    name: { type: String, required: true },
    category: { 
      type: String, 
      enum: ['Electronics', 'Travel', 'Education', 'Finance', 'Lifestyle', 'Other'], 
      default: 'Other',
      required: true 
    },
    targetAmount: { type: Number, required: true },
    currentAmount: { type: Number, default: 0, required: true },
    targetDate: { type: Date, required: false },
    autoAdd: { type: Boolean, default: false },
  },
  { timestamps: true } 
  
);


export const GoalModel = mongoose.model<Goal>("Goal", goalSchema);
