import React from 'react';
import db from '../../BDD_Insert.json';
const TemplateBadge = () => {
    return (
        <div
            className="flex ml-60 mt-4 text-2xl mt-11 justify-center items-center bg-white drop-shadow-md w-40 h-40 rounded-2xl hover:scale-105 duration-300">
            <p className="float-left content-start text-xs">{db.Badge.Categorie}</p>
            <h1>{db.Badge.Nom}</h1>

        </div>
    )
}
export default TemplateBadge;
