import { Request, Response } from "express";
import { readContactsService } from "../../services/contacts/readContacts.service";

export const readContactsController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = parseInt(req.params.id)

    const contacts = await readContactsService(userId)

    return res.status(200).json({contacts})
}