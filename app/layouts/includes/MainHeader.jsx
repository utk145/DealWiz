"use client"

import Link from "next/link";
import { BiLoaderCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import debounce from "debounce";
import { useState } from "react";

export default function MainHeader() {

    const [items, setItems] = useState([]);
    const [isSearching, setIsSearching] = useState(null);

    const handleSearchInp = debounce(async (e) => {

        if (e.target.value === "") {
            setItems([]);
            return;
        };

        setIsSearching(true);

        try {
            const resp = await fetch(`/api/products/search-by-name/${e.target.value}`);
            const data = await resp.json();
            // console.log(data);
            if (data) {
                setItems(data)
                setIsSearching(false)
                return;
            }
            setItems([]);
            setIsSearching(false);
        } catch (error) {
            console.log(error);
            alert(error)
        }

    }, 700)

    return (
        <div id="MainHeader" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <div className="flex items-center w-full bg-white">
                    <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto ">
                        <Link href={"/"}>
                            <img src="/assets/logo.svg"
                                width={"120"}
                                alt="main-logo" />
                        </Link>
                        <div className="w-full">
                            <div className="relative">
                                <div className="flex items-center">
                                    <div className="relative w-full flex items-center border-2 border-gray-900 p-2">
                                        <button className="flex items-center"><AiOutlineSearch size={22} /></button>
                                        <input type="text"
                                            className="w-full pl-3 placeholder-gray-400 text-sm focus:outline-none"
                                            placeholder="Search for what's in your mind"
                                            onChange={handleSearchInp}
                                        />
                                        {isSearching && <BiLoaderCircle size={22} className="mr-2 animate-spin" />}
                                        {items.length > 0 &&
                                            <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                                                {items.map((item) => (
                                                    <div className="p-1" key={item.id}>
                                                        <Link
                                                            href={`/product/${item?.id}`}
                                                            className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                                                        >
                                                            <div className="flex items-center">
                                                                <img className="rounded-md" width="40" src={item?.imageUrl + '/40'} />
                                                                <div className="truncate ml-2">{item?.title}</div>
                                                            </div>
                                                            <div className="truncate">£{(item?.price / 100).toFixed(2)}</div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>

                                        }
                                    </div>
                                    <button className="flex items-center text-sm font-semibold bg-blue-600 p-[11px] ml-2 px-14 text-white">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
