import IBadge from "./Badge";

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

/*
*
* All
* Un seul (via id,email)
* Tout ceux d'une filliere
* Tout ceux d'une classe
*
* */
