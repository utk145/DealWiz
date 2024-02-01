"use client"



export default function Footer() {


    return (
        <div id="Footer" className="border-t mt-20 px-2">
            <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
                <ul className="text-gray-700">
                    <li className="font-bold text-lg">Buy</li>
                    <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Registration</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">DealWiz Money Back Guarantee</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Bidding & buying help</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Stores</li>
                </ul>

                <ul className="text-gray-700">
                    <li className="font-bold text-lg">Sell</li>
                    <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Start selling</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Learn to sell</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Affiliates</li>
                </ul>

                <ul className="text-gray-700">
                    <li className="font-bold text-lg">About DealWiz</li>
                    <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Company info</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">News</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Investors</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Carears</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Government relations</li>
                    <li className="py-1 text-xs hover:underline cursor-pointer">Policies</li>
                </ul>

                <ul className="text-gray-700">
                    <li className="font-bold text-lg">About</li>
                    <li className="py-1 text-xs no-underline">Myself Utkarsh, a Full Stack Engineer from INDIA.</li>
                    <li className="mt-2 py-1 text-xs hover:underline cursor-pointer text-red-600"> <a href="https://github.com/utk145" target="_blank">Github: utk145</a></li>                    
                </ul>
            </div>
        </div>
    )
}
