import React from "react";
import './Redsaintcollection.css'
export default function Redsaintcollection() {
    return (
        <div className="bg-black w-full h-[720px] ">
            <div className="rs-items mx-auto py-8 bg-black ">
                <div className="flex items-center justify-left relative">
                    <div className="text-center text-white text-6xl mx-8 ">
                        <p className="rs-redsaint bg-red-800 italic font-extralight">RED SAINTS</p>
                        <p className="rs-collection bg-red-800 font-bold text-white text-shadow-[-7px_5px_5px_rgba(0,0,0,0.5)]">COLLECTION</p>
                    </div>

                    <div className="flex py-8 bg-red-800 items-center justify-center top-0 left-0 z-50  absolute  ml-372">
                        <div className="">
                            <img src="./images/for-coll-web1.png" alt="" />
                        </div>

                        <div className="">
                            <img src="./images/for-coll-web2.png" alt="" />
                        </div>
                        <div className="w-2/4 text-white text-xs leading-5 font-extrabold ">
                            <p className="py-2 px-8">
                                There are a total of 3,578 scarf ninjas. But there is only one
                                Red Saint Rank #1 The justice devil who sends his enemy to hell.
                                A collection of 3,578 scarf ninjas. Mint and collect the one and
                                only Red Saint. There are a total of 3,578 scarf ninjas. But
                                there is only one Red Saint Rank #1The justice devil who sends
                                his enemy to hell.
                            </p>
                            <p className="py-2 px-8">
                                A collection of 3,578 scarf ninjas. Mint and
                                collect the one and only Red Saint. There are a total of 3,578
                                scarf ninjas. But there is only one Red Saint Rank #1The justice
                                devil who sends his enemy to hell. A collection of 3,578 scarf
                                ninjas. Mint and collect the one and only Red Saint.
                            </p>
                            <p className="py-2 px-8">There are a total of 3,578 scarf ninjas. But there is only one Red Saint Rank #1
                                The justice devil who sends his enemy to hell. A collection of 3,578 scarf ninjas.
                            </p>
                        </div>
                        <div className=" space-y-2 justify-center">
                            <div>
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white 
                                font-medium text-xs  rounded-full shadow-md 
                                hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg 
                                transition duration-150 ease-in-out"> Open in marketplace</button>
                            </div>
                            <div>
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white 
                                font-medium text-xs leading-tight  rounded-full shadow-md 
                                hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg 
                                transition duration-150 ease-in-out">View your collection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
