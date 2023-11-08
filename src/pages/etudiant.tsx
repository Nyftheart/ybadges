import React from 'react';
import Banner from '../component/UserBanner'
import BadgeOwned from "../component/UserBadges";
import BadgeRequests from "../component/BadgeRequest";
import IUser from "../types/User";
const etudiant: React.FC = ({  }) => {

    const user : IUser = {
        id: '123',
        profilPic: 'https://via.placeholder.com/640x480.png/0077be?text=User+Image',
        nom: 'Dupont',
        prenom: 'Jean',
        email:'jean.dupont@example.com',
        filiere: 'Informatique',
        classe: 'Master 1',
        idBadge: ['112', '113', '114'],
    };

    return (
        <div className="container p-4">
            <Banner user={user} />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="col-span-1">
                    <BadgeOwned />
                </div>
            </div>
        </div>
    );
};

export default etudiant;

