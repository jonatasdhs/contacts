import { z } from "zod";
import { contactsReturnSchema, contactsSchema } from "../schemas/contacts.schema";

export type IContactsRequest = z.infer<typeof contactsSchema>
export type IContactsResponse = z.infer<typeof contactsReturnSchema>