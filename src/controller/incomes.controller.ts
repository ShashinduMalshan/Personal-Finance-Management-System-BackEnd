import { IncomeModel } from "../models/IncomeRecords";
import { Request, Response } from "express";


export const getAllIncomeRecords = async (req: Request, res: Response) => {
    try {
        console.log("Fetching income records with pagination");


        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;


        const total = await IncomeModel.countDocuments();


        const records = await IncomeModel.find()
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            message: "Fetched income records",
            data: records,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalRecords: total
        });
    } catch (error) {
        console.error("Error fetching income records:", error);
        res.status(500).json({
            message: "Error fetching income records",
            error
        });
    }
};

export const updateAutoAddIncome = async (req: Request, res: Response) => {
    const { id, date, autoAdd } = req.body;

    const result = await IncomeModel.updateOne(
        { _id: id },
        { $set: { autoAdd: autoAdd, date: date } }
    );

    res.status(200).json({
        message: "Auto-add income record updated successfully",
        data: result
    });

}


export const autoIncrementIncome = async () => {

    console.log("Auto-incrementing salary incomes...");
    const incomes = await IncomeModel.find({
        autoAdd: true,
    });

    for (const income of incomes) {

        const newdate = new Date(income.date);
        newdate.setMonth(newdate.getMonth() + 1);

        const newIncome = new IncomeModel({
            amount: income.amount,
            category: income.category,
            date: newdate,
            source: income.source,
            autoAdd: income.autoAdd
        });
        await newIncome.save();
    }

    console.log("Auto-increment income job executed.");
}


export const createIncomeRecord = async (req: Request, res: Response) => {
    try {
        const { source, category, date, amount, autoAdd } = req.body;

        const newIncome = new IncomeModel({
            source,
            category,
            date,
            amount,
            autoAdd
        });

        await newIncome.save();

        res.status(201).json({
            message: "Income record created successfully",
            data: newIncome
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating income record",
            error: error
        });
    }
}


export const deleteIncomeRecord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedIncome = await IncomeModel.findByIdAndDelete(id);

        if (!deletedIncome) {
            return res.status(404).json({
                message: "Income record not found"
            });
        }

        res.status(200).json({
            message: "Income record deleted successfully",
            data: deletedIncome
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting income record",
            error: error
        });
    }
}

export const updateIncomeRecord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { source, category, date, amount, autoAdd } = req.body;

        const updatedIncome = await IncomeModel.findByIdAndUpdate(
            id,
            { source, category, date, amount, autoAdd },
            { new: true }
        );

        if (!updatedIncome) {
            return res.status(404).json({
                message: "Income record not found"
            });
        }

        res.status(200).json({
            message: "Income record updated successfully",
            data: updatedIncome
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating income record",
            error: error
        });
    }
}