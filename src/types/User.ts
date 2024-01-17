export default interface IUser {
    id: string,
    profilPic : string,
    nom: string,
    prenom: string,
    email:string,
    password:string,
    filiere: string,
    classe: string,
    ownedBadge:string[],
}

