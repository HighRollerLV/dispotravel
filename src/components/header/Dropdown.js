import {useEffect, useRef, useState} from 'react';

const useDropdown = (initialState) => {
    const [dropdownOpen, setDropdownOpen] = useState(initialState);
    const dropdownContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return { dropdownOpen, toggleDropdown, dropdownContainerRef };
};

export default useDropdown;
