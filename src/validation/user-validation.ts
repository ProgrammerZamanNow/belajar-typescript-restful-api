import {z, ZodType} from "zod";

export class UserValidation {

    static readonly REGISTER: ZodType = z.object({
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100),
        name: z.string().min(1).max(100)
    });

    static readonly LOGIN: ZodType = z.object({
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    });

    static readonly UPDATE: ZodType = z.object({
        password: z.string().min(1).max(100).optional(),
        name: z.string().min(1).max(100).optional()
    });

}
