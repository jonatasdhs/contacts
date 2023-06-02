import { Request, Response } from "express";
import { deleteContactsService } from "../../services/contacts/deleteContacts.service";

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = parseInt(req.params.id)

    await deleteContactsService(id)

    return res.status(204).send()
}