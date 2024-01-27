"use client"

import Link from "next/link";
import { BiLoaderCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export default function MainHeader() {
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
                                            placeholder="Search for what's in your mind" />
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
