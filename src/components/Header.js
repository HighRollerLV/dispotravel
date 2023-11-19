import React from 'react';
import Currency from './header/Currency';
import Language from './header/Language';
import '../App.css';

const Header = () => {
    return (
        <header className="bg-dark-blue text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src="/img/dispologo.png" alt="Logo" className="pl-10 cursor-pointer"/>
                <nav className="flex flex-row">
                    <button className="hover:ring-2 hover:backdrop-blur-md font-semibold ring-green-500 bg-transparent text-white px-4 py-1 mx-2 transition duration-300 rounded-md shadow-inner">Home</button>
                    <button className="hover:ring-2 hover:backdrop-blur-md font-semibold ring-green-500 bg-transparent text-white px-4 py-1 mx-2 transition duration-300 rounded-md shadow-inner">Book a ride</button>
                    <button className="hover:ring-2 hover:backdrop-blur-md font-semibold ring-green-500 bg-transparent text-white px-4 py-1 mx-2 transition duration-300 rounded-md shadow-inner">Transfers</button>
                    <button className="hover:ring-2 hover:backdrop-blur-md font-semibold ring-green-500 bg-transparent text-white px-4 py-1 mx-2 transition duration-300 rounded-md shadow-inner">Requests</button>
                    <button className="hover:ring-2 hover:backdrop-blur-md font-semibold ring-green-500 bg-transparent text-white px-4 py-1 mx-2 transition duration-300 rounded-md shadow-inner">Tours</button>
                </nav>
                </div>

            <nav className="flex flex-row pr-8">
                <button className="text-white hover:text-green-500 font-semibold mr-2">Partner</button>
                <div>
                    <Currency/>
                    <Language/>
                </div>
                <button className="font-semibold bg-transparent text-white px-4 py-1 mx-2 transition duration-300 shadow-inner hover:ring-2 ring-white rounded-md">Log in</button>
                <button className="font-semibold bg-transparent text-white px-4 py-1 mx-2 transition duration-300 shadow-inner hover:ring-2 ring-white rounded-md">Register</button>
            </nav>
        </header>
    );
};

export default Header;


