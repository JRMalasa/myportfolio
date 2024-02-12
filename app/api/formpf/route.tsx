import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import prisma from "@/prisma/client";

const createformPFSchema = z.object({
    name: z.string().min(1, 'name is required.').max(255),
    email: z.string().min(1, 'email is required').max(255),
    message: z.string().min(1, 'message is required')

});

export async function POST(request:NextRequest) {
    const  body = await request.json();
    const validation =createformPFSchema.safeParse(body);
    if(!validation.success)
    return NextResponse.json(validation.error.format(),{status: 400})


    const newformPf = await prisma.feedb.create({
        data:{name: body.name, email: body.email, message: body.message }
    });
    return Response.json(newformPf, {status: 201});
} 