import React, {useEffect, useState} from 'react';
import EtudiantTable from "../component/EtudiantTable";
import userService from "../services/User.service";
import AddUserModal from "../component/AddUserModal";
function Etudiants() {
    const [allEtudiants,setAllEtudiants] = useState([]);
    useEffect(() => {
        userService.getAllUsers().then(res => {
            setAllEtudiants(res);
        })
    },[])

    return (
        <div className="">
            <EtudiantTable etudiants={allEtudiants}></EtudiantTable>
        </div>
    );
}

export default Etudiants;
