import IBadge from "./Badge";
import IBadgeEvent from "./BadgeEvent";

export default interface IUser {
    id: string,
    ProfilPic : string,
    Nom: string,
    Prenom: string,
    email:string,
    Filiere: string,
    Classe: string,
    IdBadge:string[] ,
}
