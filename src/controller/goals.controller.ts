import { Request, Response } from 'express';
import { GoalModel } from '../models/goalsRecods';

// GET all goals with pagination
export const getAllGoalsRecords = async (req: Request, res: Response) => {
    try {
        console.log("Fetching goals records with pagination");

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const total = await GoalModel.countDocuments();

        const records = await GoalModel.find()
            .sort({ createdAt: -1 }) // sort by creation date
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            message: "Fetched goals records",
            data: records,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalRecords: total
        });
    } catch (error) {
        console.error("Error fetching goals records:", error);
        res.status(500).json({
            message: "Error fetching goals records",
            error
        });
    }
};

// CREATE a new goal
export const createGoalsRecord = async (req: Request, res: Response) => {
    try {
        const { name, category, targetAmount, currentAmount, targetDate, autoAdd } = req.body;

        const newGoal = new GoalModel({
            name,
            category,
            targetAmount,
            currentAmount,
            targetDate,
            autoAdd
        });

        await newGoal.save();

        res.status(201).json({
            message: "Goals record created successfully",
            data: newGoal
        });
    } catch (error: any) {
        console.error("Error creating goal:", error);
        res.status(500).json({
            message: "Error creating goals record",
            error
        });
    }
};

// DELETE a goal by ID
export const deleteGoalsRecord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedGoal = await GoalModel.findByIdAndDelete(id);
        if (!deletedGoal) {
            return res.status(404).json({
                message: "Goals record not found"
            });
        }

        res.status(200).json({
            message: "Goals record deleted successfully",
            data: deletedGoal
        });
    } catch (error) {
        console.error("Error deleting goal:", error);
        res.status(500).json({
            message: "Error deleting goals record",
            error
        });
    }
};

// UPDATE a goal by ID
export const updateGoalsRecord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, category, targetAmount, currentAmount, targetDate, autoAdd } = req.body;

        const updatedGoal = await GoalModel.findByIdAndUpdate(
            id,
            { name, category, targetAmount, currentAmount, targetDate, autoAdd },
            { new: true, runValidators: true } // runValidators ensures schema validation
        );

        if (!updatedGoal) {
            return res.status(404).json({
                message: "Goals record not found"
            });
        }

        res.status(200).json({
            message: "Goals record updated successfully",
            data: updatedGoal
        });
    } catch (error) {
        console.error("Error updating goal:", error);
        res.status(500).json({
            message: "Error updating goals record",
            error
        });
    }
};
