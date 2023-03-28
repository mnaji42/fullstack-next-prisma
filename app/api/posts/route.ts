import prisma from "@component/prisma/client"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const data = await prisma.post.findMany()
    return NextResponse.json({ data }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const res = await prisma.post.create({ data })
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 })
  }
}
