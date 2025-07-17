import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../Models/topics";


export async function GET(){
    await connectMongoDB ();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}