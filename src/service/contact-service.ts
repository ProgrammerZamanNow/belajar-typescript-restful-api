import {ContactResponse, CreateContactRequest, toContactResponse} from "../model/contact-model";
import {Validation} from "../validation/validation";
import {ContactValidation} from "../validation/contact-validation";
import {User} from "@prisma/client";
import {prismaClient} from "../application/database";
import {logger} from "../application/logging";
import {ResponseError} from "../error/response-error";

export class ContactService {

    static async create(user: User, request: CreateContactRequest): Promise<ContactResponse> {
        const createRequest = Validation.validate(ContactValidation.CREATE, request);

        const record = {
            ...createRequest,
            ...{username: user.username}
        };

        const contact = await prismaClient.contact.create({
            data: record
        });

        logger.debug("record : " + JSON.stringify(contact));
        return toContactResponse(contact);
    }

    static async get(user: User, id: number): Promise<ContactResponse> {
        const contact = await prismaClient.contact.findUnique({
            where:{
                id: id,
                username: user.username
            }
        });

        if(!contact){
            throw new ResponseError(404, "Contact not found");
        }

        return toContactResponse(contact);
    }

}
