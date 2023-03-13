import { Request, Response } from "express";
import { Firebase } from "../config/Firebase"
import { User } from "../models/user";

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        const firestore = new Firebase().firestore()
        const docRef = await firestore.collection("users").doc();
        await docRef.set(user);
        res.status(201).json(docRef);
    } catch (error) {
        console.log(error)
    }
}