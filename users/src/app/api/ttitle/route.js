 
import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../Models/topics";

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find().sort({ createdAt: -1 });
    return NextResponse.json({ topics });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching topics", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    const topic = await Topic.create({ title, description });
    return NextResponse.json({ topic }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating topic", error: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting topic", error: error.message },
      { status: 500 }
    );
  }
}