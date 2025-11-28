import { Request, Response } from 'express'
import { User } from '../models/User'
import bcrypt from 'bcryptjs'


export const register = async (req: Request, res: Response) => {
    try {

        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const exsistingUser = await User.findOne({ email })

        if (exsistingUser) {
            return res.status(409).json({ message: 'User already Exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({
            message: 'User registered successfully',
            data: newUser.username,
            email: newUser.email
        })

    } catch (err: any) {
        res.status(500).json({ message: err?.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
    
        const existingUser = await User.findOne({ username })
    
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" })
        }
    
        const isValidPassword = await bcrypt.compare(password, existingUser.password)
    
        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" })
        }
    
        res.status(200).json({
            message: "Login successful",
            data: {
                username: existingUser.username,
                email: existingUser.email
            }
        })
    
    } catch (err : any) {
        res.status(500).json({ message : err?.message })
        
    }
}

