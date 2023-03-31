import express from 'express';
import bodyParser from 'body-parser';
import customerRouter from './routes/customer.route.js'
import shopkeeperRouter from './routes/shopkeeper.route.js';
import bookingRouter from './routes/booking.route.js';
import mechanicRouter from './routes/mechanic.route.js'
import categoryRouter from "./router/category.route.js";

import shopRouter from './routes/shop.route.js';
import dropDownRouter from './routes/dropDown.route.js';
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/customer",customerRouter);
app.use("/shopkeeper",shopkeeperRouter);
app.use("/booking",bookingRouter);
app.use("/mechanic",mechanicRouter);
app.use("/category", categoryRouter);
app.use("/shop",shopRouter);
app.use("/dropDown",dropDownRouter);
app.listen(3000,()=>{
    console.log("server created...........")
})