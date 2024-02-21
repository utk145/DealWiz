"use client";

import { BiLoader } from "react-icons/bi";
import ProductComponent from "./Product.Component";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


export default function SimilarProducts() {

    const [products, setProducts] = useState([]);

    const getRandomProducts = async () => {
        try {
    
            setProducts([]); // just to clear
            const resp = await fetch("/api/products/get-random");
            const data = await resp.json();
            if (data) {
                setProducts(data);
                return;
            };
            setProducts([]);
    
        } catch (error) {
            toast.error("Something went wrong fetching similar products", { autoClose: 3000 });
        }
    }

    useEffect(() => {
      getRandomProducts()
    }, [])
    

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


