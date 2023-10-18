import IBadge from "./Badge";
import IBadgeEvent from "./BadgeEvent";

export default interface IUser {
    id: string,
    profilPic : string,
    nom: string,
    prenom: string,
    email:string,
    filiere: string,
    classe: string,
    idBadge:string[] ,
}
