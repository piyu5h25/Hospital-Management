import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js"; // Corrected import

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !phone || !message) {
        return next(new ErrorHandler("Please Fill Full Form!", 400));
    }

    // Create a new message record in the database
    await Message.create({ firstName, lastName, email, phone, message });

    // Respond with a success message
    res.status(200).json({
        success: true,
        message: "Message Sent Successfully",
    });
});

export const getAllMessages = catchAsyncErrors(async(req,res,next)=>{
    const messages = await Message.find();
    res.status(200).json({
        success:true,
        messages,
    });
});