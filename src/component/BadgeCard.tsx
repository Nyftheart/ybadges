import React from "react";

interface CardProps {
    image: string;
    name: string;
    category: string;
    handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const CardBadge: React.FC<CardProps> = ({ image, name, category,handleClick }) => {
    return (
        <div className="p-4 w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden" onClick={handleClick}>
                <img className="w-full" src={image} alt={name} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <p className="text-gray-600">{category}</p>
                </div>
            </div>
        </div>
    );
};

export default CardBadge
