import React from 'react';
import {FaSearch} from "react-icons/fa";
const Recherche = () =>{
    return (
        <div className="mr-12 pt-1 peer text-1xl ">
            <form action="component" className="relative bg-gray-200 text-sm rounded-lg flex pl-2">
                <FaSearch className="mt-1.5 text-slate-400"/>
                <input type="Recherche" placeholder="Recherches" className="bg-transparent pr-28 px-3 py-1 placeholder-slate-400"/>
            </form>
        </div>
    )
}

export default Recherche;
