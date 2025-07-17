import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../Models/topics";

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        
        if (!title || !description) {
            return NextResponse.json(
                { message: "Title and description are required" },
                { status: 400 }
            );
        }

        await connectMongoDB();
        const topic = await Topic.create({ title, description });
        
        return NextResponse.json(
            { 
                message: "Topic created successfully", 
                data: topic 
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating topic:", error);
        
        // Handle specific MongoDB errors
        if (error.name === 'ValidationError') {
            return NextResponse.json(
                { message: "Validation error", errors: error.errors },
                { status: 400 }
            );
        }
        
        return NextResponse.json(
            { 
                message: "Internal server error",
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        );
    }
}


export async function GET(){
    await connectMongoDB ();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}


export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB ();
   await Topic.findByIdAndDelete();
    return NextResponse.json({message: "deleted"},{status:"200"})
}