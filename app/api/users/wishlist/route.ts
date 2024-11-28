import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs"

export const POST = async (req: NextRequest) => {
    try {
        const { userId } = auth()
    } catch (error) {
        console.log("[wishlist_POST]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}