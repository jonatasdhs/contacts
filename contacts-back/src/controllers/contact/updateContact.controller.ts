import { Request, Response } from "express";
import { IContactsUpdate } from "../../interfaces/contacts.interface";
import { deleteContactsService } from "../../services/contacts/deleteContacts.service";
import { updateContactsService } from "../../services/contacts/updateContacts.service";

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const data: IContactsUpdate = req.body
    const userId: number = req.user.id

    const contact = await updateContactsService(userId, data)

    return res.status(200).json(contact)
}