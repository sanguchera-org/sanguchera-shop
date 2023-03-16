import { Request, Response } from "express";
import { Firebase } from "../config/Firebase"

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        const firestore = new Firebase().firestore()
        const docRef = firestore.collection("users").doc(user.uid);
        await docRef.set(user);
        res.status(201).json(docRef);
    } catch (error) {
        console.log(error)
    }
}