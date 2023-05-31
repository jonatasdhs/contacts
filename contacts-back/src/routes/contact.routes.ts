import { Router } from "express";
import { createContactsController } from "../controllers/contact/createContact.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactsSchema } from "../schemas/contacts.schema";
import { readContactsController } from "../controllers/contact/readContacts.controllers";

export const contactsRoutes: Router = Router()

contactsRoutes.post('/:id', ensureDataIsValidMiddleware(contactsSchema) , createContactsController)
contactsRoutes.get('/:id', readContactsController)