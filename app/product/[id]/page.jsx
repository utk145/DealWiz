"use client";

import SimilarProducts from "@/app/components/SimilarProducts.Component";
import MainLayout from "@/app/layouts/MainLayout";

const product = {
    id: 1,
    title: 'Product 1',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/id/7'
};


export default function Product({ params }) {
    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex px-4 py-10">
                        {
                            product?.imageUrl ?
                                <img className="w-[40%] rounded-lg" src={`${product?.imageUrl}/280`} />
                                :
                                <div className="w-[40%]"></div>
                        }
                        <div className="w-full px-4">
                            <div className="font-bold text-xl">{product?.title}</div>
                            <div className="text-gray-700 pt-2 text-sm">Brand New - Warranty Covered</div>

                            <div className="border-b-2 py-1" />

                            <div className="pt-3 pb-2">
                                <div className="flex items-center">
                                    Condition : <span className="font-bold ml-2 text-[17px]">New</span>
                                </div>
                            </div>

                            <div className="border-b-2 py-1" />

                            <div className="pt-3">
                                <div className="w-full flex items-center justify-between">
                                    {product?.price && <div className="flex items-center">
                                        Price : {
                                            product?.price ?
                                                <div className="font-bold text-[20px] ml-2">
                                                    GBP £{(product.price / 100).toFixed(2)}
                                                </div>
                                                : null
                                        }
                                    </div>}
                                    <button className="text-white px-20 py-2 rounded-full cursor-pointer bg-[#3498c9]">Add to Cart</button>
                                </div>
                            </div>
                            <div className="border-b-2 py-1" />

                            <div className="pt-3">
                                <div className="font-semibold pb-1">Description : </div>
                                <div className="text-sm">{product?.description}</div>
                            </div>
                        </div>
                    </div>
                </div>

                 <SimilarProducts/>                       

            </MainLayout>
        </>
    )
}