import React from "react";
import IUser from "../types/User";

interface BannerProps {
    user: IUser;
}
const Banner: React.FC<BannerProps> = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border-2 mt-20">
            <img className="w-36 h-36 object-cover rounded-full border-2 border-white shadow-md float-left m-4" src={user.profilPic} alt={user.nom} />
            <div className="p-8">
                <h2 className="text-3xl mb-2 font-bold text-gray-800">{user.nom} {user.prenom}</h2>
                <div className="flex items-center">
                    <p className="text-gray-600  text-xl uppercase font-extrabold">{user.filiere}</p>
                    <p className="text-gray-700 text-xl leading-7 italic ml-4">{user.classe}</p>
                </div>
                <p className="text-gray-700 text-xl leading-7 ml-4">{user.email}</p>
            </div>
        </div>
    );
};


export default Banner
