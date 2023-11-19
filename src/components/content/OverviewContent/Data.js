import React from 'react';
import {FaUserAlt} from "react-icons/fa";
import {BiSolidBriefcase} from "react-icons/bi";


const Data = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col">
                <p>Overview</p>
                <p>7 March 2023 - 9 March 2023 <span>(3 Days)</span></p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row text-center items-baseline gap-4">
                    <FaUserAlt/>
                    <p>7 Passengers <span>(5 Adults)</span></p>
                </div>
                <div className="flex flex-row text-center items-center gap-4">
                    <BiSolidBriefcase/>
                    <p>3 Large Suitcases</p>
                </div>
            </div>
        </div>
    );
};

export default Data;