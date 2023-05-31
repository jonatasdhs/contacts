import { NextFunction, Request, Response } from "express";
import { IContactsRequest } from "../../interfaces/contacts.interface";
import { createContactsService } from "../../services/contacts/createContacts.service";

export const createContactsController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const contactData: IContactsRequest = req.body
    const userId: number = parseInt(req.params.id)

    const contact = await createContactsService(contactData, userId)

    return res.status(201).json({contact})
}