import { User } from "../models/user_model.js";    
import bcrypt from "bcrypt";
import httpStatus from "http-status";

import crypto from "crypto";
import { Meeting } from "../models/meeting_model.js";


const login = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({messsage : " Please provide"})
    }
    try{
        const user = await User.findOne({ username });
        if (!user){
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
        }
        if(await bcrypt.compare(password, user.password)){
            let token = crypto.randomBytes(20).toString('hex');

            user.token = token; 
            await user.save();
            return res.status(httpStatus.OK).json({token :token})
        }

    }catch (e) {
        return res.status(500).json({ message: `Something went wrong: ${e}` });
    
    }

}


const register = async (req, res) => {
    const { name, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) { 
            return res.status(httpStatus.FOUND).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUSer = new User({
            name: name,
            username: username,
            password: hashedPassword,
        })

            await newUSer.save();
            res.status(httpStatus.CREATED).json({ message: "User registered successfully" });

    }catch (e){
        res.json({ message: `Something went wrong: ${e}` });
    }
}

const addToActivity = async (req, res) => {
    const { token, meeting_code } = req.body;

    if (!token || !meeting_code) {
        return res.status(400).json({ message: "Missing token or meeting_code" });
    }

    try {
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
        }

        const newMeeting = new Meeting({ user_id: user._id.toString(), meetingCode: meeting_code });
        await newMeeting.save();

        return res.status(httpStatus.CREATED).json({ message: "Activity added" });
    } catch (e) {
        return res.status(500).json({ message: `Something went wrong: ${e}` });
    }
}

const getAllActivity = async (req, res) => {
    const token = req.query.token || req.body.token;
    if (!token) {
        return res.status(400).json({ message: "Missing token" });
    }

    try {
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
        }

        const meetings = await Meeting.find({ user_id: user._id.toString() }).sort({ date: -1 });
        return res.status(httpStatus.OK).json({ data: meetings });
    } catch (e) {
        return res.status(500).json({ message: `Something went wrong: ${e}` });
    }
}

export { login, register, addToActivity, getAllActivity };