import { z } from "zod";
import { userReturnSchema, userSchema, userUpdateSchema } from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

export type IUserRequest = z.infer<typeof userSchema>
export type IUserReturn = z.infer<typeof userReturnSchema>
export type IUserUpdate = DeepPartial<IUserRequest>
