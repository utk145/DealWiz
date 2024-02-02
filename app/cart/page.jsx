"use client"

import CartItem from "../components/CartItem.Component"
import SimilarProducts from "../components/SimilarProducts.Component"
import MainLayout from "../layouts/MainLayout"



const product = {
    id: 1,
    title: 'Product 1',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
    price: 329.99,
    imageUrl: 'https://picsum.photos/id/7'
};


export default function Cart() {

    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">Shopping cart</div>
                    <div className="relative flex items-baseline justify-between gap-2">

                        <div className="w-[65%]">
                            <CartItem key={product.id} product={product} />
                        </div>

                        <div className="absolute top-0 right-0 m-2 md:w-[33%]"
                            id="GoToCheckout">

                            <div className="bg-white p-4 border-2 rounded-md">
                                <button
                                    className="flex items-center justify-center w-full text-white bg-blue-600 font-semibold p-3 mt-4 rounded-full hover:bg-blue-900 transition-all">Go to Checkout</button>

                                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                    <div>Items (3)</div>
                                    <div>£14.99</div>
                                </div>

                                <div className="flex items-center justify-between mt-4 text-sm mb-4">
                                    <div>Shipping</div>
                                    <div>Free</div>
                                </div>

                                <div className="border-b-2 bg-gray-400" />

                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <div>Subtotal</div>
                                    <div>£14.99</div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    )
}
