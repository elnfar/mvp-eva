import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { Role } from '@prisma/client';


export async function POST(
    request: Request
) {
    const body = await request.json();


    const {
        name,
        email,
        password,
        role
    } = body

    const hashedPassword = await bcrypt.hash(password,12);


    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            role:Role.ADMIN
        }
    })

    return NextResponse.json(user)
}