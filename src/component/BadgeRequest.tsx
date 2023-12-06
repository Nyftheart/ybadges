import React, {useEffect, useState} from "react";
import IBadge from "../types/Badge";
import IBadgeReq from "../types/BadgeReq";
import RequestsService from "../services/Requests.service";

interface BadgeRequestsProps {
    badge: IBadge;
}

const BadgeRequests: React.FC<BadgeRequestsProps> = ({ badge }) => {
    const [allRequest,setRequests] = useState<IBadgeReq[]>();

    useEffect(() => {
        let requests : IBadgeReq[] = [];
        badge.requests.map(idReq => {
            let req : IBadgeReq = RequestsService.getOneRequest(idReq);
            if(req.id != ""){
                requests = [...requests,req];
            }
        })
        setRequests(requests);
    },[badge.requests])
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
                    {allRequest != undefined && allRequest.map((request,index) => (
                        <li key={index} className="text-gray-700 flex justify-between bg-gray-100 p-4 rounded-md flex-col justify-items-start">
                            <span className="px-3 pb-2 text-2xl underline">{request.object}</span>
                            <span className="pb-3">{request.comment}</span>
                            <div className="flex justify-end gap-2">
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
