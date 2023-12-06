import React, {useEffect, useState} from 'react';
import EtudiantTable from "../component/EtudiantTable";
import userService from "../services/User.service";
import allEtudiants from "../LocalBdd/users.json"
function Etudiants() {
    /*const [allEtudiants any,setAllEtudiants] = useState([]);
    useEffect(() => {
        userService.getAllUsers().then(res => {
            setAllEtudiants(res);
        })
    },[])*/

    return (
        <div className="">
            <EtudiantTable etudiants={allEtudiants}></EtudiantTable>
        </div>
    );
}

export default Etudiants;
