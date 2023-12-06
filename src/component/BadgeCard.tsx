import React from "react";
import IBadge from "../types/Badge";

interface CardProps {
    badge : IBadge
    handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const CardBadge: React.FC<CardProps> = ({ badge,handleClick }) => {
    return (
        <div className="p-4 w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden" onClick={handleClick}>
                <img className="w-full" src={badge.image} alt={badge.name} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{badge.name}</h2>
                    <p className="text-gray-600">{badge.category}</p>
                </div>
            </div>
        </div>
    );
};

export default CardBadge
