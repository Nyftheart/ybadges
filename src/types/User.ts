import IBadge from "./Badge";
import IBadgeEvent from "./BadgeEvent";

export default interface IUser {
    id: String,
    Nom: String,
    Prenom: String,
    Filiere: String,
    Class: String,
    IdBadge: [IBadge],
    IdBadgeEvent: [IBadgeEvent]
}