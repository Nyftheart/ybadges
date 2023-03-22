import IBadge from "../types/Badge";
import React from "react";

interface BadgeOwnersProps {
    badge: IBadge;
}

const BadgeOwners: React.FC<BadgeOwnersProps> = ({ badge }) => {
    return (
        <div className="bg-gray-600 rounded-lg overflow-hidden mt-4">
            <div className="p-4">
                <h3 className="text-2xl font-bold mb-4 text-white">Badge Owners</h3>
                <ul className="list-none ml-6">
                    {badge.owners.map((owner, index) => (
                        <li key={owner} className="text-gray-300 text-xl mb-2 relative">
                            {owner}
                            {index !== badge.owners.length - 1 && <div className="h-px bg-white absolute bottom-0 -left-6 right-0"></div>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default BadgeOwners;
