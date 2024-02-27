import {UserRequest} from "../type/user-request";
import {Response, NextFunction} from "express";
import {CreateContactRequest, UpdateContactRequest} from "../model/contact-model";
import {ContactService} from "../service/contact-service";
import {logger} from "../application/logging";

export class ContactController {

    static async create(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: CreateContactRequest = req.body as CreateContactRequest;
            const response = await ContactService.create(req.user!, request);
            logger.debug("response : " + JSON.stringify(response));
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async get(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId);
            const response = await ContactService.get(req.user!, contactId);
            logger.debug("response : " + JSON.stringify(response));
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async update(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: UpdateContactRequest = req.body as UpdateContactRequest;
            request.id = Number(req.params.contactId);

            const response = await ContactService.update(req.user!, request);
            logger.debug("response : " + JSON.stringify(response));
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async remove(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId);
            const response = await ContactService.remove(req.user!, contactId);
            logger.debug("response : " + JSON.stringify(response));
            res.status(200).json({
                data: "OK"
            });
        } catch (e) {
            next(e);
        }
    }

}
