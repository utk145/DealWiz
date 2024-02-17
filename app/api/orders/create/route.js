import prisma from "@/app/libs/Prisma";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    const supabase = createServerComponentClient({ cookies });
    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            throw Error();
        };

        const body = await req.json();

        // creating an order
        const order = await prisma.orders.create({
            data: {
                user_id: user?.id,
                stripe_id: body.stripe_id,
                name: body.name,
                address: body.address,
                zipcode: body.zipcode,
                city: body.city,
                country: body.country,
                total: Number(body.total),
            }
        })

        
        body.products.forEach(async prod => {
            await prisma.orderItem.create({
                data: {
                    order_id: order.id,
                    product_id: Number(prod.id),
                }
            })
        });


        await prisma.$disconnect();
        return NextResponse.json('Order Complete', { status: 200 });

    } catch (error) {
        console.log(error);
        await prisma.$disconnect()
        return new NextResponse("Something went wrong", { status: 400 })
    }

}