'use client'

import Link from "next/link"
import MainLayout from "../layouts/MainLayout"
import { AiOutlineCheckCircle } from "react-icons/ai"

export default function SuccessPage() {
    return (
        <>
            <MainLayout>
                <div id="SuccessPage"
                    className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    <div className="w-full p-6 min-h-[150px] flex items-center justify-center">
                        <div>
                            <div className="flex items-center text-xl">
                                <AiOutlineCheckCircle className=" text-green-500" size={35} />
                                <span className="pl-4">Payment Successfull!</span>
                            </div>
                            <p className="text-sm">Thank you! We've received your payment.</p>

                            <Link className="w-full" href={'/'}>
                                <div className="w-full text-center bg-blue-600 font-semibold text-white  text-sm mt-4 p-[11px] ">
                                    Back to main
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
