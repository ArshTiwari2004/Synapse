import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { verifyFirebaseToken } from '../Firebase/firebase.js';

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, country, phone, gender, dateOfBirth } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            hashedPassword,
            country,
            phone,
            gender,
            dateOfBirth,
        });

        user = await User.create(newUser);
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite: true,
            secure: false
        })

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
            secure: true,
            sameSite: 'Lax'
        })

        res.status(200).json({ message: 'Login successful', token, user: { email: user.email } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const googleSignIn = async (req, res) => {
    const { token } = req.body;

    try {
        const decodedToken = await verifyFirebaseToken(token);
        const { email, name, uid } = decodedToken;

        let user = await GoogleUser.findOne({ email });

        if (!user) {
            user = new GoogleUser({
                email,
                name,
                googleId: uid,  // Firebase UID
            });

            await user.save();
        }

        res.status(200).json({
            message: 'Google Sign-In successful',
            user,
        });
    } catch (error) {
        console.error('Error with Google Sign-In:', error.message);
        res.status(400).json({ message: 'Google Sign-In failed' });
    }
};

export const logoutUser = (req, res) => {
    // Clear the cookie that contains the token
    // res.clearCookie('token', {
    //     httpOnly: true,
    // });
    res.status(200).cookie("token","",{
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true ,
    }).json({ message: 'Logout successful' });
    // res.status(200).json({ message: 'Logout successful' });
};


export { registerUser, loginUser };