"use client"

import CartItem from "../components/CartItem.Component"
import SimilarProducts from "../components/SimilarProducts.Component"
import MainLayout from "../layouts/MainLayout"



const product = {
    id: 1,
    title: 'Product 1',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
    price: 19.99,
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
                            <CartItem  key={product.id} product={product}/>
                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    )
}
