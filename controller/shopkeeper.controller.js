import { request, response } from "express";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import Shopkeeper from "../model/shopkeeper.model.js";
import Jwt from "../middleware/verification.js";
export const signUp = async (request, response, next) => {
    try {
        
        const errors = await validationResult(request);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let already = await Shopkeeper.findOne({
            where: {
                contact: request.body.contact,
            }
        })
        if (already) {
            console.log(already);
            return response.status(200).json({ err: "account is already register.....", status: true });
        }
        let saltKey = await bcrypt.genSalt(10);
        let encryptedPassword = await bcrypt.hash(request.body.password, saltKey);
        request.body.password = encryptedPassword;
        let shopkeeper = await Shopkeeper.create({'shopkeeperName':request.body.shopkeeperName,'aadharNo':request.body.aadharNo,'contact':request.body.contact,'password':request.body.password});
        return response.status(200).json({ message:shopkeeper, status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const signIn = async (request, response, next) => {
    try {
        let shopkeeper = await Shopkeeper.findOne({ raw:true,
            where: {
                contact: request.body.contact
            }
        });
        if (shopkeeper) {
            let status = await bcrypt.compare(request.body.password, shopkeeper.password);
            if (status) {
                let payload = { subject: shopkeeper.email };
                console.log("payload",payload)
                console.log("email",shopkeeper.email );
                let token=Jwt.sign(payload,"coderHub");
                return response.status(200).json({messages:"signIn successfully.....",status:true,token:token});
            }
            else
              return response.status(400).json({err:"bad request",status:false});
        }
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ err: "internal server error", status: false });
    }

}

export const updataPhoto = (request, response, next) => {
    Shopkeeper.update({ photo: request.body.photo }, {
        where: {
            id: request.body.id,
        }
    })
        .then(result => {
            console.log(result);
            return response.status(200).json({ result: result, status: false });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ err: "internal server ", status: false });
        })

}

export const updateEmail = (request, response, next) => {
    Shopkeeper.update({ email: request.body.email }, {
        where: {
            id: request.body.id,
        }
    })
        .then(result => {
            console.log(result);
            return response.status(200).json({ result: result, status: false });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ err: "internal server ", status: false });
        })

}

export const getList = (request, response, next) => {
    Shopkeeper.findAll(
        {
            attributes: { exclude: ['password', 'updatedAt', 'createdAt'] },
        }
    )
        .then(result => {
            console.log(result);
            return response.status(200).json({ result: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ err: "internal server error" });
        })
}

export const id = (request, response, next) => {
    console.log(request.params.shopeeperId);

    Shopkeeper.findByPk(request.params.shopeeperId,{
        attributes:{ exclude:['createdAt','updatedAt','password']}
    })
        .then(result => {
            console.log(result)
            return response.status(200).json({result:result,status:true})
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({err:"internal server error",status:false}) 
        })

}


