import React, {useEffect, useState} from 'react';
import UserService from "../services/User.service";


// @ts-ignore
const EtudiantTable = ({etudiants}) => {
    const [allEtudiants,setAllEtudiants] = useState([]);

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
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
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
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <span
                                        className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
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
                                    <a x-data="{ tooltip: 'Edit' }" href="#">
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
    );
};

export default EtudiantTable;