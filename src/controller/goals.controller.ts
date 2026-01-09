import { Request, Response } from 'express';


export const getAllGoalsRecords = async (req: Request, res: Response) => {
    try {
        console.log("Fetching goals records with pagination");


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