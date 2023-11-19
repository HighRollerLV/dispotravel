import React from 'react';
import {FaTriangleExclamation} from "react-icons/fa6";


const Additional = () => {
    return (
        <div className="flex flex-col gap-2">
            <p>Additional information</p>
            <div
                className="flex flex-row bg-amber-50 w-9/12 h-20 justify-center items-center gap-16">
                <FaTriangleExclamation className="text-4xl text-amber-500"/>
                <div>
                    <ul className="list-disc">
                        <li className="underline">Need 2 Kid Seats</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Additional;