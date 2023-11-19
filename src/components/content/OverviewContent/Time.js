import React from 'react';
import {FaMapMarkerAlt} from "react-icons/fa";


const Time = () => {
    return (
        <div className="flex flex-row gap-6 mt-8">
            <div>
                <p className="font-semibold">11:00</p>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-row items-baseline gap-4">
                    <input type="radio"/>
                    <p className="w-72 text-violet-950">Hamburg Airport, Flughafenstraße 3, 22335
                        Hamburg,
                        Germany</p>
                </div>
                <div className="flex flex-row items-baseline gap-4">
                    <FaMapMarkerAlt className="text-violet-950"/>
                    <p className="w-72 text-violet-950">ibis Hamburg St Pauli Messe,
                        Simon-von-Utrecht-Straße 63,
                        20359 Hamburg, Germany</p>
                </div>
            </div>
        </div>
    );
};

export default Time;