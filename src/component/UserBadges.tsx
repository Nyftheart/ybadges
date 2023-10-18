import IBadge from "../types/Badge";
import React from "react";

const badges = [{
    id: '123',
    image: 'https://via.placeholder.com/640x480.png/0077be?text=Badge+Image',
    name: 'Badge 1',
    category: 'Technology',
    description: 'This badge is awarded to individuals who have demonstrated exceptional skills in the field of technology.',
    owners: ['John Doe', 'Jane Smith', 'Bob Johnson'],
    requests: ['Mike Brown', 'Lisa Green', 'Tom Wilson'],
},{
    id: '124',
    image: 'https://via.placeholder.com/640x480.png/0077be?text=Badge+Image',
    name: 'Badge 2',
    category: 'Technology',
    description: 'This badge is awarded to individuals who have demonstrated exceptional skills in the field of technology.',
    owners: ['John Doe', 'Jane Smith', 'Bob Johnson'],
    requests: ['Mike Brown', 'Lisa Green', 'Tom Wilson'],
},{
    id: '125',
    image: 'https://via.placeholder.com/640x480.png/0077be?text=Badge+Image',
    name: 'Badge 3',
    category: 'Technology',
    description: 'This badge is awarded to individuals who have demonstrated exceptional skills in the field of technology.',
    owners: ['John Doe', 'Jane Smith', 'Bob Johnson'],
    requests: ['Mike Brown', 'Lisa Green', 'Tom Wilson'],
}]
const BadgeOwners: React.FC = () => {

    return (
        <div className="bg-gray-600 rounded-lg overflow-hidden mt-4">
            <div className="p-4">
                <h3 className="text-2xl font-bold mb-4 text-white">Badge Owned</h3>
                <ul className="list-none ml-6">
                    {badges.map((badge:IBadge, index) => (
                        <li key={badge.id} className="text-gray-300 text-xl mb-2 relative">
                            {badge.name}
                            {index !== badges.length - 1 && <div className="h-px bg-white absolute bottom-0 -left-6 right-0"></div>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default BadgeOwners;
