import React from 'react';
import {IoCalendarSharp} from "react-icons/io5";
import {FaCircleXmark} from "react-icons/fa6";


const Date = () => {
    return (
        <div className="flex flex-row bg-blue-50 rounded h-14 mt-3">
            <button
                className="bg-blue-50 items-center flex flex-row hover:bg-white border border-transparent hover:border-button-border-gray text-black py-2 px-2 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
            >
                <IoCalendarSharp className="inline-block mr-2 text-neutral-400 text-2xl"/>
                <div className="flex flex-row gap-1">
                    <p className="text-sm">7</p>
                    <p className="text-sm">March</p>
                </div>
                <FaCircleXmark className="text-red-400 text-xl ml-2"/>
            </button>
            <button
                className="bg-blue-50 items-center flex flex-row hover:bg-white border border-transparent hover:border-button-border-gray text-black py-2 px-5 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
            >
                <IoCalendarSharp className="inline-block mr-2 text-neutral-400 text-2xl"/>
                <div className="flex flex-row gap-1">
                    <p className="text-sm">8</p>
                    <p className="text-sm">March</p>
                </div>
            </button>
            <button
                className="bg-blue-50 items-center flex flex-row hover:bg-white border border-transparent hover:border-button-border-gray text-black py-2 px-5 rounded focus:outline-none focus:shadow-outline ease-in-out duration-300"
            >
                <IoCalendarSharp className="inline-block mr-2 text-neutral-400 text-2xl"/>
                <div className="flex flex-row gap-1">
                    <p className="text-sm">9</p>
                    <p className="text-sm">March</p>
                </div>
            </button>
        </div>
    );
};

export default Date;