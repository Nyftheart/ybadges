import React from 'react';
import {FaSearch} from "react-icons/fa";
const Recherche = () =>{
    return (
        <div className="flex ml-60 mt-4 text-1xl w-56 bg-white rounded-lg px-4 py-1 justify-start items-center">
            <div className="pr-2">
                <FaSearch />
            </div>
            <input placeholder="Recherche" className="bg-white appearance-none border-2 border-none py-1 pl-1 text-gray-700 leading-tight focus:outline-none focus:border-none"/>
        </div>
    )
}

export default Recherche;
