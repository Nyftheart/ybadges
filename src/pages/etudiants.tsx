import React, {useEffect, useState} from 'react';
import {collection, DocumentData, QuerySnapshot, onSnapshot} from "@firebase/firestore";
import {db} from "../../firebase"
import {Etudiant} from "../../Models/user.models"
import EtudiantTable from "../component/EtudiantTable";

function Etudiants() {
    const [etudiants,setEtudiants] = useState<Etudiant[]>([])
    const etudiantsCollection = collection(db, "etudiants")

    useEffect( () => onSnapshot(etudiantsCollection, (snapshot : QuerySnapshot<DocumentData>) => {
        setEtudiants(snapshot.docs.map((doc) => {
            return {
                id : doc.id,
                ...doc.data(),
            };
        }))
    }),[])

    return (
        <div>
            <EtudiantTable etudiants={etudiants}></EtudiantTable>
        </div>
    );
}

export default Etudiants;