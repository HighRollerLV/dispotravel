import React from 'react';
import {MdOutlineStar} from "react-icons/md";

const UserInfo = () => {
    return (
        <div className="bg-white pt-4 flex flex-col px-6">
            <h2 className="text-lg mb-2">Supplier information</h2>
            <div className="flex flex-row pb-12">
                <div className="flex flex-col justify-start items-start">
                    <img src="/img/randomGuy.jpg" alt="profile" className="rounded-3xl w-28 shadow-lg"/>
                    <div className="flex flex-col items-center justify-center w-4/12">
                        <h3>Adam</h3>
                        <div className="flex flex-row justify-center items-center text-center gap-2">
                            <MdOutlineStar className="text-neon-green font-bold text-lg"/>
                            <p>4.5</p>
                        </div>
                    </div>
                    <div className="Info pt-5 flex flex-col gap-2">
                        <div>
                            <p className="text-base text-neutral-400">Driver</p>
                            <p className="text-lg font-semibold">Adam Lopoto</p>
                        </div>
                        <div>
                            <p className="text-base text-neutral-400">Name of the carrier</p>
                            <p className="text-lg font-semibold">BAMBAM SIA</p>
                        </div>
                        <div>
                            <p className="text-base text-neutral-400">National Registration Number /
                                Transport Name</p>
                            <p className="text-lg font-semibold">"Miranda"</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-base pb-2 text-neutral-300">Add languages</p>
                    <div className="Flags flex flex-row items-center text-center justify-center gap-1">
                        <span className="fi fi-tr fis rounded-md text-2xl"/>
                        <span className="fi fi-gr fis rounded-md text-2xl"/>
                        <span className="fi fi-lt fis rounded-md text-2xl"/>
                        <span className="fi fi-gb fis rounded-md text-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;