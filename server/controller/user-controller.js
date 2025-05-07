import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../model/token.js';
import User from '../model/user.js';

dotenv.config();

// User Signup
export const signupUser = async (request, response) => {
    try {
        const { username, name, password } = request.body;

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return response.status(400).json({
                isSuccess: false, 
                msg: 'Username already exists'
            });
        }

        // Check if password length is valid
        if (password.length < 6) {
            return response.status(400).json({
                isSuccess: false,
                msg: 'Password must be at least 6 characters'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user object
        const user = new User({
            username,
            name,
            password: hashedPassword,
        });

        // Save the new user to the database
        await user.save();

        // Send success response
        return response.status(201).json({
            isSuccess: true,
            msg: 'Signup successful'
        });

    } catch (error) {
        console.error('Signup Error:', error);
        return response.status(500).json({
            isSuccess: false,
            msg: 'Error while signing up user',
            error: error.message // Include detailed error message for debugging
        });
    }
};


// User Login
export const loginUser = async (request, response) => {
    try {
        const { username, password } = request.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(400).json({ isSuccess: false, msg: 'Username does not exist' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return response.status(400).json({ isSuccess: false, msg: 'Invalid password' });
        }

        // Generate JWT tokens (access and refresh)
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

        // Save the refresh token in the database
        const newToken = new Token({ token: refreshToken });
        await newToken.save();

        // Return the tokens and user details
        response.status(200).json({
            isSuccess: true,
            accessToken,
            refreshToken,
            name: user.name,
            username: user.username,
        });

    } catch (error) {
        console.error(error);
        response.status(500).json({ isSuccess: false, msg: 'Error while logging in the user', error: error.message });
    }
};

// User Logout
export const logoutUser = async (request, response) => {
    try {
        const { token } = request.body;

        // Remove the refresh token from the database
        await Token.deleteOne({ token });

        response.status(204).json({ isSuccess: true, msg: 'Logout successful' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ isSuccess: false, msg: 'Error while logging out user', error: error.message });
    }
};
