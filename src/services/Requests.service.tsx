//TODO Modifier les services une fois la BDD en place.

import allRequest from "../LocalBdd/demands.json"
import IBadgeReq from "../types/BadgeReq";

const defaultReq = {
    id: "",
    idBadge: "",
    idUser: "",
    object:"",
    comment: "",
    proof: ""
}
export default {
    getOneRequest(idReq: string) : IBadgeReq{
        let request = allRequest.find(req => req.id === idReq);
        if(request != undefined){
            return request;
        }

        return defaultReq
    }
}

//Recuperer toute les requete
//Recuperer une requete par id
//Recuperer une requete par id Badge
//Recuperer une requete par id User

//Creer une requete
//Delete une requete

//modifier un commentaire
//modififer une preuve
