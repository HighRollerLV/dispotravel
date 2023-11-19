import React from 'react';
import {PiClockFill} from "react-icons/pi";
import {BsTelephoneFill} from "react-icons/bs";


const Arrival = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-end mr-2 gap-6">
                <p className="text-xl">Estimated arrival Time</p>
                <div className="flex flex-row items-center gap-0.5">
                    <PiClockFill className="text-base text-neutral-400"/>
                    <p className="text-xl mb-1">11:15</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-4">
                <p className="text-neutral-400">Drive statuss</p>
                <p className="text-lg text-blue-600 font-bold">SCHEDULED</p>
            </div>
            <div className="text-center items-center justify-end flex flex-row">
                <button
                    className="shadow w-20 h-14 text-white bg-neon-green hover:bg-green-500 ease-in-out duration-300 text-center items-center justify-center flex flex-row rounded-sm mt-7">
                    <BsTelephoneFill className="text-3xl"/>
                </button>
            </div>
        </div>

    );
};

export default Arrival;