import React from 'react';
import Map from "/src/components/content/Map";
import Arrival from "/Arrival";


const Schedule = () => {
    return (
        <div className="w-full ml-10 flex flex-col z-10">
            <Map/>
            <Arrival/>
        </div>
    );
};

export default Schedule;