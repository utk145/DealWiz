"use client";

import CheckoutItem from "../components/CheckoutItem.Component";
import MainLayout from "../layouts/MainLayout";



const product = {
    id: 1,
    title: 'Product 1',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
    price: 329.99,
    imageUrl: 'https://picsum.photos/id/7'
};


export default function Checout() {
    return (
        <>
            <MainLayout>
                <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
                    <div className="text-3xl font-bold mt-4 mb-4">Checkout</div>

                    <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
                        <div className="w-[65%]">
                            <div className="bg-white border p-4 rounded-lg">
                                <div className="text-xl font-semibold mb-2">Shipping Address</div>
                                <div>
                                    <ul className="text-sm mt-2">
                                        <li>Name: test</li>
                                        <li>Address: </li>
                                        <li>Zipcode: </li>
                                        <li>City: </li>
                                        <li>Country: </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white mt-4 rounded-lg" id="Items">
                                <CheckoutItem key={product.id} product={product} />
                            </div>
                        </div>

                        <div id="PlaceHolder" className="relative -top-[6px] w-[35%] border rounded-lg">
                            <div className="p-4">
                                <div className="flex items-baseline justify-between text-sm mb-1">
                                    <div>Items (3)</div>
                                    <div>£32.99</div>
                                </div>
                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Shipping</div>
                                    <div>Free</div>
                                </div>
                                <div className="border border-1" />
                                <div className="flex items-center justify-between my-4">
                                    <div className="font-semibold">Grand total</div>
                                    <div className="font-semibold text-2xl">£32.99</div>
                                </div>

                                <form>
                                    {/* This will contain all of the stripe elements */}
                                    <div
                                        className="border border-gray-500 p-2 rounded-sm"
                                        id="card-element"
                                    />

                                    <p
                                        id="card-error"
                                        role="alert"
                                        className="text-red-700 text-center font-semibold relative top-2"
                                    />

                                    <button
                                        type="submit"
                                        className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full"
                                    >
                                        <div>Confirm and Pay</div>
                                    </button>
                                </form>

                            </div>
                            <div className="flex items-center p-4 justify-center gap-4 border-t">
                                <img width={50} src="/assets/logo.svg" />
                                <div className=" font-light mb-2 mt-2">MONEY BACK GUARANTEE</div>
                            </div>
                        </div>

                    </div>

                </div>
            </MainLayout>
        </>
    )
}