require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/user/user.router");
const notificationRouter = require("./api/notification/notification.router");
const serviceRouter = require("./api/service/service.router");
const noticeRouter = require("./api/notice/notice.router");
const messageRouter = require("./api/message/message.router");
const logsRouter = require("./api/logs/logs.router");
const instructionRouter = require("./api/instruction/instruction.router");
const categoryRouter = require("./api/category/category.router");
const listingRouter = require("./api/listing/listing.router");
const merchantRouter = require("./api/merchant/merchant.router");

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/notification", notificationRouter);
app.use("/api/service", serviceRouter);
app.use("/api/notice", noticeRouter);
app.use("/api/message", messageRouter);
app.use("/api/logs", logsRouter);
app.use("/api/instruction", instructionRouter);
app.use("/api/category", categoryRouter);
app.use("/api/listing", listingRouter);
app.use("/api/merchant", merchantRouter);
app.use("/uploads", express.static('uploads'));

app.listen(process.env.APP_PORT,() => {
    console.log ("server up and running on PORT :",process.env.APP_PORT );
});




