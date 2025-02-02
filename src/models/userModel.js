import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please provide a username"],
        unique: true,
    }, 
    email: {
        type: String,
        require: [true, "Please provide a valid email"],
        unique: true,
    }, 
    password: {
        type: String,
        require: [true, "Please provide a valid password"],
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordTokenExpiry: {
        type: Date
    },
    verifyToken: {
        type: String
    },
    verifyTokenExpiry: {
        type: Date
    }    
})

const User = mongoose.models.users || mongoose.model('User', userSchema)

export default User