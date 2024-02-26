import {ZodType} from "zod";

export class Validation {

    static validate<T>(schema: ZodType, data: T): T {
        return schema.parse(data);
    }

}
