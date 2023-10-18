import React, {useEffect, useState} from 'react';
import EtudiantTable from "../component/EtudiantTable";
import userService from "../services/User.service";
function Etudiants() {
    /*const [allEtudiants any,setAllEtudiants] = useState([]);
    useEffect(() => {
        userService.getAllUsers().then(res => {
            setAllEtudiants(res);
        })
    },[])*/

    let allEtudiants = [
            {
                id: 1,
                nom: "Dupont",
                prenom: "Jean",
                mail: "jean.dupont@example.com",
                classe: "M1",
                filiere: "Informatique"
            },
            {
                id: 2,
                nom: "Martin",
                prenom: "Marie",
                mail: "marie.martin@example.com",
                classe: "B1",
                filiere: "Communication"
            },
            {
                id: 3,
                nom: "Garcia",
                prenom: "Pablo",
                mail: "pablo.garcia@example.com",
                classe: "B3",
                filiere: "3D Jeu vidéo"
            },
            {
                id: 4,
                nom: "Leclerc",
                prenom: "Sophie",
                mail: "sophie.leclerc@example.com",
                classe: "B2",
                filiere: "Audiovisuel"
            },
            {
                id: 5,
                nom: "Roux",
                prenom: "Lucas",
                mail: "lucas.roux@example.com",
                classe: "M2",
                filiere: "Crea"
            }
        ]

    return (
        <div className="">
            <EtudiantTable etudiants={allEtudiants}></EtudiantTable>
        </div>
    );
}

export default Etudiants;
