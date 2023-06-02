import { z } from "zod";
import { contactsReturnSchema, contactsSchema, contactsUpdateSchema } from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";

export type IContactsRequest = z.infer<typeof contactsSchema>
export type IContactsResponse = z.infer<typeof contactsReturnSchema>
export type IContactsUpdate = DeepPartial<typeof contactsUpdateSchema>