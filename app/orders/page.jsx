"use client"

import Link from "next/link"
import MainLayout from "../layouts/MainLayout"
import { CiDeliveryTruck } from "react-icons/ci"
import moment from "moment"
import { useUser } from "../context/user"
import { toast } from "react-toastify"
import useIsLoading from "../hooks/useIsLoading"
import { useState, useEffect } from "react"
// const orders = [
//     {
//         id: 1,
//         stripe_id: "327863294",
//         name: "Vaali Anasot",
//         address: "864 Spring St NW, United States",
//         zipcode: "65134",
//         city: "nvsland",
//         country: "Anagreen",
//         total: 7409,
//         orderItem: [
//             {
//                 id: 1,
//                 title: 'Product Title',
//                 imageUrl: 'https://picsum.photos/id/7'
//             }
//         ]
//     }
// ]



export default function OrdersPage() {


    const user = useUser();
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            if (!user && !user?.id)
                return

            const resp = await fetch('/api/orders');
            const data = await resp.json();
            setOrders(data);
            useIsLoading(false);

        } catch (error) {
            toast.error("Something went wrong fetching orders", { autoClose: 3000 });
            useIsLoading(false);
        }
    };

    useEffect(() => {
        useIsLoading(true);
        getOrders();
    }, [user])


    return (
        <>
            <MainLayout>
                <div id="OrdersPage" className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    <div className="bg-white w-full p-6 min-h-[150px]">
                        <div className="flex items-center text-xl">
                            <CiDeliveryTruck className="text-purple-500" size={40} />
                            <span className="pl-4">Orders</span>
                        </div>
                        {orders.length < 1 &&
                            <div className="flex items-center justify-center">
                                You have no order history
                            </div>
                        }

                        {orders.map(order => (
                            <div key={order?.id} className="text-sm pl-[50px]">
                                <div className="border-b py-1">

                                    <div className="pt-2">
                                        <span className="font-bold mr-2">Stripe ID:</span>
                                        {order?.stripe_id}
                                    </div>

                                    <div className="pt-2">
                                        <span className="font-bold mr-2">Delivery Address:</span>
                                        {order?.name}, {order?.address}, {order?.zipcode}, {order?.city}, {order?.country}
                                    </div>

                                    <div className="pt-2">
                                        <span className="font-bold mr-2">Total:</span>
                                        £{order?.total / 100}
                                    </div>

                                    <div className="pt-2">
                                        <span className="font-bold mr-2">Order Created:</span>
                                        {moment(order?.created_at).calendar()}
                                    </div>

                                    <div className="py-2">
                                        <span className="font-bold mr-2">Delivery Time:</span>
                                        {moment(order?.created_at).add(3, 'days').calendar()}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {order?.orderItem.map(item => (
                                            <div key={item?.id} className="flex items-center">
                                                <Link
                                                    className="py-1 hover:underline hover:underline-offset-4 text-blue-500 font-bold"
                                                    href={`/product/${item?.product_id}`}
                                                >
                                                    <img className="rounded" width="120" src={item?.product.imageUrl + '/120'} />
                                                    {item?.product.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout>
        </>
    )
}