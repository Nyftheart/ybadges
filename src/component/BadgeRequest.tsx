import React from "react";
import IBadge from "../types/Badge";

interface BadgeRequestsProps {
    badge: IBadge;
}

const BadgeRequests: React.FC<BadgeRequestsProps> = ({ badge }) => {
    const handleAccept = (request: string) => {
        console.log(`Accepted request from ${request}`);
    };

    const handleReject = (request: string) => {
        console.log(`Rejected request from ${request}`);
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Badge Requests</h3>
                <ul className="list-none flex flex-col gap-4">
                    {badge.requests.map((request) => (
                        <li key={request} className="text-gray-700 flex items-center justify-between bg-gray-100 p-4 rounded-md">
                            <span>{request}</span>
                            <div className="flex items-center gap-2">
                                <div onClick={() => handleAccept("Accept")}>
                                    <img className="w-10 h-10" src="/icons/check.svg" alt="Accept" />
                                </div>
                                <div onClick={() => handleReject("reject")}>
                                    <img className="w-10 h-10" src="/icons/cancel.svg" alt="Reject" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BadgeRequests;
