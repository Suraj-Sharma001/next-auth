import {connect} from '@/db/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

connect()

export async function POST(request : NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody.reqBody)

        const user = await User.findOne({email})
        if(user) {
            return NextResponse.json({error: "User already exist."}, {status: 500})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User ({
            username,
            email,
            password: hashPassword
        })

        const saveUser = await newUser.save()
        console.log(saveUser)

        return NextResponse.json({
            message: 'User created successfully.',
            success: true,
            saveUser
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
        console.log()
    }
} 

