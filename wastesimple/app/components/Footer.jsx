import React from "react";
// import "../global.css";
export default function Footer(){
    return(
        <footer className="bg-[#3488cd] ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a> */}
                    <div></div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-large text-white sm:mb-0 dark:text-white">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Buy Diamond Locks</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Get a new Account</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6  border-white sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-white">© 2024 Grow Store. All Rights Reserved.</span>
            </div>
        </footer>
    )
}