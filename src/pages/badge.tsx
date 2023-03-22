import React from 'react';
import Banner from '../component/BadgeBanner'
import BadgeOwners from "../component/BadgeOwners";
import BadgeRequests from "../component/BadgeRequest";
const BadgeDetailPage: React.FC = ({  }) => {

    const badge = {
        id: '123',
        image: 'https://via.placeholder.com/640x480.png/0077be?text=Badge+Image',
        name: 'Awesome Badge',
        category: 'Technology',
        description: 'This badge is awarded to individuals who have demonstrated exceptional skills in the field of technology.',
        owners: ['John Doe', 'Jane Smith', 'Bob Johnson'],
        requests: ['Mike Brown', 'Lisa Green', 'Tom Wilson'],
    };

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

