import React from "react";
import IBadge from "../types/Badge";

interface BannerProps {
    badge: IBadge;
}
const Banner: React.FC<BannerProps> = ({ badge }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border-2 mt-20">
            <img className="absolute w-40 h-40 object-cover transform -translate-y-20 translate-x-4 rounded-lg border-2 border-white shadow-md" src={badge.image} alt={badge.name} />
            <div className="p-4">
                <h2 className="pl-44 text-3xl font-bold mb-2 text-gray-800">{badge.name}</h2>
                <p className="text-gray-600 mb-2 mt-10 text-xl uppercase italic font-extrabold">{badge.category}</p>
                <p className="text-gray-700 text-xl leading-7">{badge.description}</p>
            </div>
        </div>
    );
};


export default Banner
