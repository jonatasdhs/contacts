import { Request, Response } from "express";
import { IContactsUpdate } from "../../interfaces/contacts.interface";
import { deleteContactsService } from "../../services/contacts/deleteContacts.service";
import { updateContactsService } from "../../services/contacts/updateContacts.service";

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const data: IContactsUpdate = req.body
    const id: number = parseInt(req.params.id)

    const contact = await updateContactsService(id, data)

    return res.status(200).json(contact)
}