import React, {ChangeEvent, useEffect, useState} from 'react';
import UserService from "../services/User.service";
import userService from "../services/User.service";

// @ts-ignore
const AddUserModal = ({showModal,displayModal,user}) => {
    const userSchema = {
        "id" : 0,
        "nom" : "",
        "prenom":"",
        "email":"",
        "classe":"",
        "filiere":"",
        "mdp":"",
    };
    const [editUser,setEditUser] = useState({
        "id" : 0,
        "nom" : "",
        "prenom":"",
        "email":"",
        "classe":"",
        "filiere":"",
        "mdp":"",
    });

    useEffect(() => {
        if(user != null){
            setEditUser(user);
        } else {
            setEditUser(userSchema);
            const pass = generatePassword(8);
            setEditUser({...editUser,mdp : pass})
        }
    },[showModal])

    function handleInput(e : ChangeEvent<HTMLInputElement>){
        console.log('test',e.target.value)
        setEditUser({...editUser,[e.target.id] : e.target.value})
    }

    function generatePassword(length: number): string {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        return password;
    }

    useEffect(() => {
        if(user != null  && editUser.mdp === ""){
            setEditUser({...editUser,mdp : user.mdp})
        }
    },[editUser.mdp])



    function validForm(){
        if(user != null){
            userService.editOne(user.id,editUser).then(() => {
                alert('Utilisateur modifié')
            })
        } else {
            UserService.createOne(editUser).then(() => {
                alert(`Utilisateur créé`);
            })
        }
        displayModal(false);
    }

    // @ts-ignore
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                    >
                        <div className="relative w-full my-6 max-w-3xl z-50">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Création d'un utilisateur
                                    </h3>
                                </div>
                                {/*body*/}
                                <form className="max-w px-2 py-2">
                                    <div className="md:flex md:flex-col md:items-center mb-6">
                                        <div className="md:w-3/4">
                                            <label
                                                className="block text-gray-700 font-bold text-l mb-1 md:mb-0 px-6"
                                                htmlFor="nom">
                                                Nom
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="nom" type="text" value={editUser.nom} onChange={(e) => handleInput(e)}/>
                                        </div>
                                    </div>
                                    <div className="md:flex md:flex-col md:items-center mb-6">
                                        <div className="md:w-3/4">
                                            <label
                                                className="block text-gray-700 font-bold text-l mb-1 md:mb-0 px-6"
                                                htmlFor="prenom">
                                                Prenom
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="prenom" type="text" value={editUser.prenom} onChange={(e) => handleInput(e)}/>
                                        </div>
                                    </div>
                                    <div className="md:flex md:flex-col md:items-center mb-6">
                                        <div className="md:w-3/4">
                                            <label
                                                className="block text-gray-700 font-bold text-l mb-1 md:mb-0 px-6"
                                                htmlFor="email">
                                                Email
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="email" type="text" value={editUser.email} onChange={(e) => handleInput(e)}/>
                                        </div>
                                    </div>
                                    <div className="md:flex md:flex-col md:items-center mb-6">
                                        <div className="md:w-3/4">
                                            <label
                                                className="block text-gray-700 font-bold text-l mb-1 md:mb-0 px-6"
                                                htmlFor="classe">
                                                Classe
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="classe" type="text" value={editUser.classe} onChange={(e) => handleInput(e)}/>
                                        </div>
                                    </div>
                                    <div className="md:flex md:flex-col md:items-center mb-6">
                                        <div className="md:w-3/4">
                                            <label
                                                className="block text-gray-700 font-bold text-l mb-1 md:mb-0 px-6"
                                                htmlFor="filiere">
                                                Fillière
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="filiere" type="text" value={editUser.filiere} onChange={(e) => handleInput(e)}/>
                                        </div>
                                    </div>
                                    {
                                        user != null && (
                                            <div className="md:flex md:flex-col md:items-center mb-6">
                                                <div className="md:w-3/4">
                                                    <label
                                                        className="block text-gray-700 font-bold text-l mb-1 md:mb-0 px-6"
                                                        htmlFor="mdp">
                                                        Mot de passe
                                                    </label>
                                                </div>
                                                <div className="md:w-3/4">
                                                    <input
                                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                        id="mdp" type="text" value={""} onChange={(e) => handleInput(e)}/>
                                                </div>
                                            </div>
                                        )
                                    }
                                </form>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {displayModal(false);setEditUser(userSchema)}}
                                    >
                                        Fermer
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => validForm()}
                                    >
                                        Créer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-black" onClick={() => {displayModal(false);setEditUser(userSchema)}}></div>
                </>
            ) : null}
        </>
    );
};

export default AddUserModal;
