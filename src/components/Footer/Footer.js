import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black dark:bg-black ">
            <div className="grid grid-cols-2 py-8 px-6 md:grid-cols-3 place-content-center text-center max-w-xl mx-auto">
                <div>
                    <h2 className="mb-6 text-sm font-bold text-white  dark:text-white">Marketplace</h2>
                    <ul className="text-black dark:text-white ">
                        <li className="mb-4 ">
                            <a href="#" className=" hover:underline">Create NFT</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Your NFT</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Trade NFT</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Swap NFT</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-white  dark:text-white">Company</h2>
                    <ul className="text-white dark:text-white">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Report</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-white  dark:text-white">Community</h2>
                    <ul className="text-black dark:text-white">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Telegram</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Email</a>
                        </li>
                    </ul>
                </div>

            </div>
            <hr className=" w-11/12 m-auto  bg-gradient-to-r from-rgba(255, 255, 255, 1) to-rgba(255, 255, 255, 0)"></hr>
            <div >
                <div className="py-6 m-auto w-1/2 px-4 bg-black dark:bg-black md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 RedSaint Nft. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                            Terms of service
                        </a>
                    </div>
                </div>
            </div>

        </footer>


    )
}
