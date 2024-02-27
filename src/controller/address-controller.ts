import {UserRequest} from "../type/user-request";
import {Response, NextFunction} from "express";
import {CreateAddressRequest, GetAddressRequest} from "../model/address-model";
import {AddressService} from "../service/address-service";

export class AddressController {

    static async create(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: CreateAddressRequest = req.body as CreateAddressRequest;
            request.contact_id = Number(req.params.contactId);

            const response = await AddressService.create(req.user!, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async get(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: GetAddressRequest = {
                id: Number(req.params.addressId),
                contact_id: Number(req.params.contactId),
            }

            const response = await AddressService.get(req.user!, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

}
