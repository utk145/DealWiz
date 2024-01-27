"use client"

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function TopMenu() {
    return (
        <div id="TopMenu" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul id="TopMenuLeft"
                    className="flex items-center text-[11px] text-[#333333] px-2 h-8"
                >
                    <li className="relative px-3">

                        <Link href={"/auth"} className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
                            <div>Login</div>
                            <BsChevronDown />
                        </Link>
                        <div id="AuthDropdown" className=" hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg">

                            <div className="flex items-center justify-start gap-1 p-3">
                                <img src="https://avatars.githubusercontent.com/u/122993091?v=4" alt="logo" width={50} />
                                <div className="font-bold text-[13px]">Shera</div>
                            </div>

                            <div className="border-b" />

                            <ul className="bg-white">
                                <li className="text-[11px] py-2 px-4 w-full hover:underline hover:underline-offset-1 cursor-pointer text-blue-500 hover:text-blue-700">
                                    <Link href={"/orders"}>My Orders</Link>
                                </li>
                                <li className="text-[11px] py-2 px-4 w-full hover:underline hover:underline-offset-1 cursor-pointer text-red-500 hover:text-red-700">
                                    Sign Out
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="px-3 hover:underline hover:underline-offset-4 cursor-pointer">Daily Deals</li>
                    <li className="px-3 hover:underline hover:underline-offset-4 cursor-pointer">Help & Contact</li>
                </ul>
                <ul id="TopMenuRight"
                    className="flex items-center text-[11px] text-[#333333] px-2 h-8">
                    <li className="flex items-center gap-2 px-3 hover:underline hover:underline-offset-4 cursor-pointer">
                        <img width={32} src="/assets/india.png" alt="india-logo" />
                        Ship to
                    </li>
                    <li className="px-3 hover:underline hover:underline-offset-4 cursor-pointer">
                        <div className="relative">
                            <AiOutlineShoppingCart size={22} />
                            <div className="absolute bg-red-600 text-[10px] w-[14px] h-[14px]  rounded-full -top-[2px] -right-[5px] text-white">
                                <div className="flex items-center justify-center -mt-[1px]">0</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
