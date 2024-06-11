import React from "react";
import Link from "next/link"
// import "../global.css";
export default function Footer(){
    return(
        <div>
            <div className="spacer layerl"></div>
            <footer className="bg-[#99FF97] ">
                <div className="w-full max-w-screen-xl mx-auto px-10 md:py-6">
                    <div className="flex flex-wrap justify-between sm:flex-row">
                        <div className="sm:w-1/2">
                            <Link className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse " href={"/"}>
                                <img src="https://i.imgur.com/Tb1NJGm.png" className="h-8" alt="Flowbite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#494949]">Waste Simple</span>
                            </Link>
                        </div>
                        <div className="sm:w-1/2 text-left sm:text-left">
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#494949] sm:mb-0 dark:text-[#727272] font-weight-500 lg:justify-end justify-start">
                                <li>
                                    <Link className="me-4 md:me-6" href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link className="me-4 md:me-6" href={"/Blog"}>Blog</Link>
                                </li>
                                <li>
                                    <Link className="" href={"/About"}>About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4  border-[#727272] border-opacity-50 sm:mx-auto lg:my-6" />
                    <span className="pb-8 block text-sm font-medium text-[#727272] text-center dark:text-[#727272] ">© 2024 WasteSimple. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}