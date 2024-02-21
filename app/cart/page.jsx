"use client"

import { useRouter } from "next/navigation";
import CartItem from "../components/CartItem.Component"
import SimilarProducts from "../components/SimilarProducts.Component"
import MainLayout from "../layouts/MainLayout"
import { useCart } from "../context/cart";
import { useEffect } from "react";
import useIsLoading from "../hooks/useIsLoading";
import ClientOnly from "../components/ClientOnly.Component";



export default function Cart() {

    const router = useRouter();
    const cart = useCart();

    useEffect(() => {
        useIsLoading(true);
        cart.getCart();
        cart.cartTotal();
        useIsLoading(false);
    }, [cart])

    const goToCheckout = () => {
        if (!cart.cartTotal()) {
            alert("You don't have any items in the cart.")
            return
        }
        router.push('/checkout')
    }


    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">Shopping cart</div>
                    <div className="relative flex items-baseline justify-between gap-2">

                        <ClientOnly>
                            <div className="w-[65%]">
                                {cart.getCart().map(product => (
                                    <CartItem key={product.id} product={product} />
                                ))}
                            </div>
                        </ClientOnly>

                        <div className="absolute top-0 right-0 m-2 md:w-[33%]"
                            id="GoToCheckout">

                            <ClientOnly>
                                <div className="bg-white p-4 border-2 rounded-md">
                                    <button onClick={() => goToCheckout()}
                                        className="flex items-center justify-center w-full text-white bg-blue-600 font-semibold p-3 mt-4 rounded-full hover:bg-blue-900 transition-all">Go to Checkout</button>

                                    <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                        <div>Items ({cart.getCart().length})</div>
                                        <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4 text-sm mb-4">
                                        <div>Shipping</div>
                                        <div>Free</div>
                                    </div>

                                    <div className="border-b-2 bg-gray-400" />

                                    <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                        <div>Subtotal</div>
                                        <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                                    </div>

                                </div>
                            </ClientOnly>


                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    )
}
