import { request, response } from "express";
import Shop from "../model/shop.model.js";
import Jwt from "../middleware/verification.js"
import { validationResult } from "express-validator";
export const save = async (request, response, next) => {
    try {

        const errors = await validationResult(request);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let already = await Shop.findOne({
            where: {
                licenceNo: request.body.licenceNo,
            }
        })
        if (already) {
            console.log(already);
            return response.status(200).json({ err: "account is already register.....", status: true });
        }
        // let saltKey = await bcrypt.genSalt(10);
        // let encryptedPassword = await bcrypt.hash(request.body.password, saltKey);
        // request.body.password = encryptedPassword;
        let shop = await Shop.create(request.body);
        return response.status(200).json({ message: shop, status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const remove = (request, response, next) => {
    Shop.destroy({
        where: {
            id: request.params.shopId,
        }
    })
        .then(result => {
            console.log(result);
            return response.status(200).json({ result: result, status: true })
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ err: "internal server error", status: false })
        })
}


export const getList = (request, response, next) => {
    Shop.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
        .then(result => {
            return response.status(200).json({ result: result, status: true })
        })
        .catch(err => {
            return response.status(500).json({ err: "internal server error", status: false })

        })
}


export const id = (request, response, next) => {
    // console.log(request.params.customerId);
    console.log(request.params.shopId);

    Shop.findByPk(request.params.shopId,{
        attributes:{ exclude:['createdAt','updatedAt']}
    })
        .then(result => {
            console.log(result)
            return response.status(200).json({ result: result, status: true })
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ err: "internal server error", status: false })
        })

}

export const update = async (request, response, next) => {

    try {
        let shop = await Shop.findOne({
            where: {
                id: request.body.id,
            }
        })
        if (shop) {
            let update = await Shop.update({
                shopName: request.body.shopName,
                photo: request.body.photo,
                address: request.body.address,
                latLong: request.body.latLong,
                contact: request.body.contact,
            }, {
                where: {
                    id: request.body.id,
                }
            })
            return response.status(200).json({ update: update, status: true });

        }
        return response.status(401).json({message:"bad request",status:false});

    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ err: "internal server error", status: false })
    }
}

export const updateStatus=async (request, response, next) => {

    try {
        let shop = await Shop.findOne({
            where: {
                id: request.body.id,
            }
        })
        if (shop) {
            let update = await Shop.update({
                shopStatus: request.body.shopStatus,
            }, {
                where: {
                    id: request.body.id,
                }
            })
            return response.status(200).json({ update: update, status: true });

        }
        return response.status(401).json({message:"bad request",status:false});

    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ err: "internal server error", status: false })
    }

}