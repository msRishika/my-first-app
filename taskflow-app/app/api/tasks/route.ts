import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";

export async function GET() {
  await connectDB();

  const tasks = await Task.find();

  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();

  const task = await Task.create({
    title: body.title,
  });

  return NextResponse.json(task);
}