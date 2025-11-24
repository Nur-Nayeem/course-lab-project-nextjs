import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const { name, email, password } = await req.json();

  const exists = await User.findOne({ email });
  if (exists)
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );

  const hashed = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashed });

  return NextResponse.json({ message: "User created" }, { status: 201 });
}
