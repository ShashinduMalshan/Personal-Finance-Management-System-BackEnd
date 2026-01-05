import { Request, Response } from 'express'


export const status = async (req: Request, res: Response) => {
    res.status(200).json({ message: "Dashboard access successful" })
}
