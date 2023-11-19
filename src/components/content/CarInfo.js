import React from 'react';
import {IoCalendarSharp, IoDocumentTextSharp} from "react-icons/io5";
import {PiClockFill} from "react-icons/pi";

const CarInfo = () => {
    return (
        <div className="bg-white w-full px-2 py-6">
            <div className="flex flex-col bg-neutral-200 rounded py-2 px-4">
                <div className="flex flex-row gap-10 pb-2">
                    <div className="flex flex-row items-baseline gap-2">
                        <IoCalendarSharp className="text-sm text-neutral-400"/>
                        <p className=" text-2xl text-neutral-900">18.feb</p>
                    </div>
                    <div className="flex flex-row items-baseline gap-2">
                        <PiClockFill className="text-base text-neutral-400"/>
                        <p className=" text-2xl text-neutral-900">11:00</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-300 h-0.5"></div>
                <div className="flex flex-row pt-3 gap-6 w-full">
                    <div className="flex flex-col">
                        <img src="/img/skoda.jpg" alt="profile" className="rounded-md w-40 shadow-2xl"/>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="font-semibold">Car Registration</p>
                            <div className="flex flex-row">
                                <p className="font-semibold">Skoda Fabia, <span
                                    className="text-neutral-500 font-semibold">Color: Silver</span></p>
                            </div>
                        </div>
                        <div className="flex flex-row items-baseline justify-end">
                            <div className="flex flex-col gap-10">
                                <div
                                    className="w-28 h-6 border-2 border-neutral-400 rounded flex flex-row bg-white gap-3 text-center items-center justify-start">
                                    <div className="h-full bg-blue-950 w-3 rounded-l-sm"></div>
                                    <p className="font-bold">HZ - 7221</p>
                                </div>
                                <div className="flex flex-row items-center justify-end pt-4">
                                    <button
                                        className="border-2 border-blue-500 hover:border-blue-700 bg-gray-200 hover:bg-gray-300 text-blue-500 hover:text-blue-700 font-bold py-2 px-3.5 rounded inline-flex items-center ease-in-out duration-300">
                                        <IoDocumentTextSharp className="mr-2 text-xl"/>
                                        Invoice
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;