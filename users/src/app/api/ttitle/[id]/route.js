import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../Models/topics";


export async function GET(){
    await connectMongoDB ();
    const topics = await Topic.find();
    return NextResponse.json({topics})
<<<<<<< HEAD
=======
}


export async function PUT(request,{params}) {
    const {id}=params;

    const{newTitle:title,newDescription:Description} =request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title,Description});
    NextResponse.json({message:"created"},{status:200});

    
}


export async function GET(request,{params}) {
    const {id}=params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id:id})
    NextResponse.json({topic},{status:200});

    
>>>>>>> trial
}