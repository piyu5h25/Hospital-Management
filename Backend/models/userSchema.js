import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 3 Characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain At Least 3 Characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide a Valid Email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone Number Must Contain Exact 11 Digits"],
        maxLength: [11, "Phone Number Must Contain Exact 11 Digits"], // Fixed typo here
    },
    nic: {
        type: String,
        required: true,
        minLength: [13, "NIC Must Contain At Least 13 Digits"], // Fixed typo here
        maxLength: [13, "NIC Must Contain At Least 13 Digits"], // Fixed typo here
    },
    dob: {
        type: Date,
        required: [true, "DOB is required"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    password: {
        type: String,
        minLength: [8, "Password Must Contain At Least 8 Characters!"], // Adjusted minLength for passwords
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"],
    },
    doctorDepartment: {
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String,
    },
});

// Hash password before saving
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare provided password with the hashed password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JSON Web Token
userSchema.methods.generateJsonWebToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

// Create and export the User model using the userSchema
export const User = mongoose.model("User", userSchema);
