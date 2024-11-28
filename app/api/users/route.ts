import { NextRequest, NextResponse } from "next/server";
// import { useAuth } from "@clerk/nextjs";
import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";

import { auth } from "@clerk/nextjs"

export const GET = async  (req:NextRequest) => {
    try {
        const {userId} = auth()

        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        await connectToDB()

        let user = await User.findOne({clerkId: userId})
        
        // when the user sign-in for the first time, immediately we will create a new user for them
        if (!user) {
            user = await User.create({ clerkId: userId})
            await user.save()
        }
    } catch (error) {
        console.log("[users_GET]", error)
        return new NextResponse("Internal Server Error", { status: 500})
    }
}