import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketmanager.js";

import cors from "cors";
import userRoutes from "./models/routes/user_routes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Alpha-Stream Backend Running Successfully !!");
});

const start = async () => {
    app.set("mongo_user")
    const connectiondb = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MONGO Connected DB HOst: ${connectiondb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log(`LISTENING ON PORT ${app.get("port")}`)                 
    });

}


start().catch(err => {
    console.error("FULL ERROR:");
    console.error(err);
});