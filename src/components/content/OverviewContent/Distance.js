import React from 'react';
import {RiPinDistanceFill} from "react-icons/ri";
import {PiClockFill} from "react-icons/pi";


const Distance = () => {
    return (
        <div className="flex flex-row mt-4 justify-end gap-6">
            <div className="flex flex-row gap-1 items-center">
                <RiPinDistanceFill className="text-xl text-neutral-400"/>
                <p className="text-sm font-semibold">124,27Km</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
                <PiClockFill className="text-xl text-neutral-400"/>
                <p className="text-sm font-semibold">2:10 Hours</p>
            </div>
        </div>
    );
};

export default Distance;