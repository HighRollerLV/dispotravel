import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import useDropdown from './Dropdown';

const Language = () => {
    const { dropdownOpen, toggleDropdown, dropdownContainerRef } = useDropdown(false);

    return (
        <div className="relative inline-block text-left z-20" ref={dropdownContainerRef}>
            <button
                onClick={toggleDropdown}
                className="text-white px-4 py-2 font-semibold rounded inline-flex items-center ease-in-out duration-300"
            >
                <span className="mr-2">English</span>
                <MdOutlineKeyboardArrowDown className="font-semibold"/>
            </button>
            {dropdownOpen && (
                <div className="absolute left-0 right-0 mt-2">
                    <div className="bg-white border rounded shadow-md">
                        <button
                            onClick={toggleDropdown}
                            className="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200 w-full text-left ease-in-out duration-300"
                        >
                            Latvian
                        </button>
                        <button
                            onClick={toggleDropdown}
                            className="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200 w-full text-left ease-in-out duration-300"
                        >
                            Russian
                        </button>
                        <button
                            onClick={toggleDropdown}
                            className="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200 w-full text-left ease-in-out duration-300"
                        >
                            Spanish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Language;


