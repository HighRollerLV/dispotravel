import React from 'react';
import Data from "./OverviewContent/Data";
import Date from "./OverviewContent/Date";
import Time from "./OverviewContent/Time";
import Distance from "./OverviewContent/Distance";
import Additional from "./OverviewContent/Additional";


const Overview = () => {
    return (
        <div className="flex flex-col">
            <Data/>
            <Date/>
            <Time/>
            <div className="w-full bg-neutral-300 h-0.5 flex flex-row mt-89px"></div>
            <Distance/>
            <Additional/>
        </div>
    );
};

export default Overview;