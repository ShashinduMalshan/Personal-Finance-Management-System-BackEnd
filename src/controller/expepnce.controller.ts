import { ExpenceModel } from "../models/expenceRecord";
import { Request, Response } from "express";



export const getAllExpenceRecords = async (req: Request, res: Response) => {
    try {
        console.log("Fetching expense records with pagination");


        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;


        const total = await ExpenceModel.countDocuments();


        const records = await ExpenceModel.find()
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            message: "Fetched expense records",
            data: records,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalRecords: total
        });
    } catch (error) {
        console.error("Error fetching expense records:", error);
        res.status(500).json({
            message: "Error fetching expense records",
            error
        });
    }
};

export const updateAutoAddExpence = async (req: Request, res: Response) => {
    const { id, date, autoAdd } = req.body;

    const result = await ExpenceModel.updateOne(
        { _id: id },
        { $set: { autoAdd: autoAdd, date: date } }
    );

    res.status(200).json({
        message: "Auto-add expense record updated successfully",
        data: result
    });

}


export const autoIncrementExpence = async () => {

    console.log("Auto-incrementing salary expenses...");
    const expenses = await ExpenceModel.find({
        autoAdd: true,
    });

    for (const expense of expenses) {   
        const newdate = new Date(expense.date);
        newdate.setMonth(newdate.getMonth() + 1);

        const newExpense = new ExpenceModel({
            amount: expense.amount,
            category: expense.category,
            date: newdate,
            description: expense.description,
            autoAdd: expense.autoAdd
        });
        await newExpense.save();
    }

    console.log("Auto-increment expense job executed.");
}


export const createExpenceRecord = async (req: Request, res: Response) => {
    try {
        const { description, category, date, amount, autoAdd } = req.body;

        const newExpense = new ExpenceModel({
            description,
            category,
            date,
            amount,
            autoAdd
        });

        await newExpense.save();

        res.status(201).json({
            message: "Expense record created successfully",
            data: newExpense
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating expense record",
            error: error
        });
    }
}


export const deleteExpenceRecord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedExpense = await ExpenceModel.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({
                message: "Expense record not found"
            });
        }

        res.status(200).json({
            message: "Expense record deleted successfully",
            data: deletedExpense
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting expense record",
            error: error
        });
    }
}

export const updateExpenceRecord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { description, category, date, amount, autoAdd } = req.body;

        const updatedExpense = await ExpenceModel.findByIdAndUpdate(
            id,
            { description, category, date, amount, autoAdd },
            { new: true }
        );

        if (!updatedExpense) {
            return res.status(404).json({
                message: "Expense record not found"
            });
        }

        res.status(200).json({
            message: "Expense record updated successfully",
            data: updatedExpense
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating expense record",
            error: error
        });
    }
}