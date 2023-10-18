import React from 'react';
import Banner from '../component/UserBanner'
import BadgeOwned from "../component/UserBadges";
import BadgeRequests from "../component/BadgeRequest";
const etudiant: React.FC = ({  }) => {

    const user = {
        id: '123',
        ProfilPic: 'https://via.placeholder.com/640x480.png/0077be?text=User+Image',
        Nom: 'Dupont',
        Prenom: 'Jean',
        email:'jean.dupont@example.com',
        Filiere: 'Informatique',
        Classe: 'Master 1',
        IdBadge: ['112', '113', '114'],
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

