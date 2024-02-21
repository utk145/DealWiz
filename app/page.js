"use client"

import { useState, useEffect } from "react";
import Carousel from "./components/Carousel.Component"
import ProductComponent from "./components/Product.Component";
import MainLayout from "./layouts/MainLayout"
import useIsLoading from "./hooks/useIsLoading";



export default function Home() {



  const [products, setProducts] = useState([])

  const getProducts = async () => {
    useIsLoading(true)

    const response = await fetch('/api/products')
    const prods = await response.json()

    setProducts([]); // simply clearing before load

    setProducts(prods);
    useIsLoading(false);
  
  };

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <MainLayout>
        {/* // this is the area where all the mid parts are gonna be there */}

        <Carousel />

        <div className="max-w-[1200px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
          <div className="grid grid-cols-5 gap-3">
            {products.map((item) => (
              <ProductComponent product={item} />
            ))}
          </div>
        </div>


      </MainLayout>
    </>
  )
}
