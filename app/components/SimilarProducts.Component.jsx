"use client";

import { BiLoader } from "react-icons/bi";
import ProductComponent from "./Product.Component";


const products = [
    {
        id: 1,
        title: 'Product 1',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
        price: 2109,
        imageUrl: 'https://picsum.photos/id/7'
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a Lorem ipsum is placeholder text commonly used in the graphic, print, and publish.iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occioyep.',
        price: 1999,
        imageUrl: 'https://picsum.photos/id/29'
    },
];



export default function SimilarProducts() {
    return (
        <>
            <div className="">
                <div className="border-b py-1 max-w-[1200px mx-auto]" />
                <div className="max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">Similar products <span className="font-normal text-lg opacity-35">◦ sponsored</span></div>

                    {products?.length > 0 ?
                        <div className="grid grid-cols-5 gap-4">
                            {products?.map((item, indx) => (
                                <ProductComponent product={item} key={indx + 1} />
                            ))}
                        </div>
                        :
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center gap-4 font-semibold">
                                <BiLoader size={40}
                                    className="animate-spin text-blue-400" />
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}


