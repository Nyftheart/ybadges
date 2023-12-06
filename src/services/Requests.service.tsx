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
