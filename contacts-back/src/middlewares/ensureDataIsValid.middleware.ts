import { log } from "console"
import {Request, Response, NextFunction} from "express"
import { ZodTypeAny } from "zod"

export const ensureDataIsValidMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const payload = schema.parse(req.body)

    req.body = payload

    next()
}