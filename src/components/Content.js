import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import 'leaflet/dist/leaflet.css';
import UserInfo from "./content/UserInfo";
import CarInfo from "./content/CarInfo";
import Overview from "./content/Overview";
import Map from "./content/Map";
import Arrival from "./content/Arrival";


const Content = () => {
    return (
        <main className="flex-grow p-4 bg-white w-full flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-start w-4/5">
                <h1 className="text-lg font-mono pb-1">Request #779</h1>
            </div>
            <div className="w-4/5 bg-gray-100 rounded flex flex-row border-neutral-400 border-2 h-full">
                <div className="flex flex-col w-2/4 bg-white">
                    <UserInfo/>
                    <CarInfo/>
                </div>
                <div className="h-full w-0.5"></div>
                <div className="flex flex-col w-full bg-white px-4 py-4">
                    <div className="flex flex-row gap-6">
                        <Overview/>
                        <div className="flex flex-col w-full">
                            <Map/>
                            <Arrival/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Content;

