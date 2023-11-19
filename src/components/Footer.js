import React from 'react';
import { PiPhoneFill } from "react-icons/pi";
import { BsChatLeftTextFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="bg-dark-blue text-white p-4 flex flex-col items-center justify-center gap-2">
            <h2 className="text-lg font-bold mb-2">DispoCars Support</h2>
            <div className="flex flex-row items-center justify-center gap-20 pb-2">
                <div className="flex flex-row text-center items-center justify-center gap-2"><PiPhoneFill className="text-2xl"/><p>+371 2999999</p></div>
                <div className="flex flex-row text-center items-center justify-center gap-2"><BsChatLeftTextFill className="text-2xl"/><p>support@dispocars.com</p></div>
            </div>
        </footer>
    );
};

export default Footer;