import React, {useEffect, useState} from 'react';
import UserService from "../services/User.service";
import AddUserModal from "./AddUserModal";


// @ts-ignore
const EtudiantTable = ({etudiants}) => {
    const [showModal,setShowModal] = useState(false);
    const [allEtudiants,setAllEtudiants] = useState([]);
    const [editEtudiant, setEditEtudiant] = useState(null)

    const displayModal = (show: boolean) =>{
        console.log(editEtudiant)
        if(!show){
            setEditEtudiant(null);
            console.log(editEtudiant)
        }
        setShowModal(show);
    }

    useEffect(() => {
        setAllEtudiants(etudiants);
    },[etudiants])

    function deleteUser(etudiant : any){
        UserService.deleteOne(etudiant.id).then(() => {
            // @ts-ignore
            let updatedEtudiants = allEtudiants.splice(allEtudiants.indexOf(etudiant),1)
            setAllEtudiants(updatedEtudiants)
            alert(`Utilisateur supprimer`);
        })
    }

    return (
        <>
            <button className="mt-5 ml-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {displayModal(true)}}>Ajouter un utilisateur</button>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 overflow-scroll">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nom</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Etat</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Classe</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Fillière</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {
                   etudiants.length>0 && allEtudiants.map((etudiant : any) => {
                        return <tr key={etudiant.id} className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="relative h-10 w-10">
                                    <img
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src={etudiant.profilPic}
                                        alt=""
                                    />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{etudiant.nom} {etudiant.prenom}</div>
                                    <div className="text-gray-400">{etudiant.email}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                        <span
                            className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                        >
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Active
                        </span>
                            </td>
                            <td className="px-6 py-4">{etudiant.classe}</td>
                            <td className="px-6 pr-3 py-4">
                                <div className="flex gap-2">
                        <span
                            className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-l font-semibold text-green-600"
                        >
                            {etudiant.filiere}
                        </span>
                                </div>
                            </td>
                            <td className="px-6 pl-3 py-4">
                                <div className="flex justify-end gap-16">
                                    <a x-data="{ tooltip: 'Edit' }" onClick={() => {setEditEtudiant(etudiant);displayModal(true)}} href="#">
                                        Modifier
                                    </a>
                                    <span className="cursor-pointer" x-data="{ tooltip: 'Delete' }" onClick={() => {deleteUser(etudiant)}}>
                                        Supprimer
                                    </span>
                                </div>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
            <AddUserModal showModal={showModal} displayModal={displayModal} user={editEtudiant}></AddUserModal>
        </>
    );
};

export default EtudiantTable;
