import React from 'react';

// @ts-ignore
const AddUserModal = ({showModal,displayModal}) => {
    return (
        <>
            {showModal ? (
                <>
                    <div onClick={() => displayModal(false)}
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
                                                id="nom" type="text" value="Jane Doe"/>
                                        </div>
                                    </div>
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
                                                id="nom" type="text" value="Jane Doe"/>
                                        </div>
                                    </div>
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
                                                id="nom" type="text" value="Jane Doe"/>
                                        </div>
                                    </div>
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
                                                id="nom" type="text" value="Jane Doe"/>
                                        </div>
                                    </div>
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
                                                id="nom" type="text" value="Jane Doe"/>
                                        </div>
                                    </div>
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
                                                id="nom" type="text" value="Jane Doe"/>
                                        </div>
                                    </div>
                                </form>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => displayModal(false)}
                                    >
                                        Fermer
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        /*onClick={displayModal()}*/
                                    >
                                        Créer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default AddUserModal;