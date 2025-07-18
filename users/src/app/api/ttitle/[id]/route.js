import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/Topic";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();
    const topic = await Topic.findById(params.id);
    
    if (!topic) {
      return NextResponse.json(
        { message: "Topic not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ topic });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching topic", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { title, description } = await request.json();
    
    await connectMongoDB();
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    
    if (!updatedTopic) {
      return NextResponse.json(
        { message: "Topic not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: "Topic updated", topic: updatedTopic },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating topic", error: error.message },
      { status: 500 }
    );
  }
}