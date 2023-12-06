import React from 'react';
import Banner from '../component/BadgeBanner'
import BadgeOwners from "../component/BadgeOwners";
import BadgeRequests from "../component/BadgeRequest";
import IBadge from "../types/Badge";
import {useRouter} from "next/router";
import BadgeService from "../services/Badge.service";
const BadgeDetailPage: React.FC = ({  }) => {

    const router = useRouter();
    const { id  } = router.query;


    const badge : IBadge = BadgeService.getOneBadge(id);

    return (
    <div className="container p-4">
        <Banner badge={badge} />
        <div className="grid grid-cols-2 gap-4 mt-4">
             <div className="col-span-1">
                <BadgeOwners badge={badge} />
            </div>
            <div className="col-span-1">
                <BadgeRequests badge={badge} />
            </div>
        </div>
    </div>
    );
};

    export default BadgeDetailPage;

