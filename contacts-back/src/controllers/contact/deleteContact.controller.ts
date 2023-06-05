import { Request, Response } from "express";
import { deleteContactsService } from "../../services/contacts/deleteContacts.service";

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const contactId: number = req.body.contactId

    await deleteContactsService(contactId)

    return res.status(204).send()
}