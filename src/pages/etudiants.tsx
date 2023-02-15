import React, {useEffect, useState} from 'react';
import EtudiantTable from "../component/EtudiantTable";
import userService from "../services/User.service";
import AddUserModal from "../component/AddUserModal";
function Etudiants() {
    const [showModal,setShowModal] = useState(false);
    const [allEtudiants,setAllEtudiants] = useState([]);
    useEffect(() => {
        userService.getAllUsers().then(res => {
            setAllEtudiants(res);
        })
    },[])

    useEffect(()=>{
        console.log(showModal);
    },[showModal])

    const displayModal = (show: boolean) =>{
        setShowModal(show);
    }

    return (
        <div className="">
            <button className="mt-5 ml-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {displayModal(true)}}>Ajouter un utilisateur</button>
            <EtudiantTable etudiants={allEtudiants}></EtudiantTable>
            <AddUserModal showModal={showModal} displayModal={displayModal}></AddUserModal>
        </div>
    );
}

export default Etudiants;