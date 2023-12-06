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
                <div className="flex">
                    <select className="mb-2 py-2 px-3 pe-9 block w-full border-transparent text-sm border-0 border-b-2 border-gray-300 bg-transparent text-gray-300 focus-visible:outline-none">
                        <option selected>Open this select menu</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <button type="button" className="w-6/12 ml-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200">Give badge</button>
                </div>
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
