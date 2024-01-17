//TODO Modifier les services une fois la BDD en place.

import allBadges from "../LocalBdd/badges.json"
import IBadge from "../types/Badge";

const defaultBadge:IBadge = {
    id: "undefined",
    image: "undefined",
    name: "undefined",
    category: "undefined",
    description: "undefined",
    owners: [],
    requests: []
}
export default {
    getOneBadge(id: string | string[] | undefined) : IBadge {
        let badge;
        if(typeof id == "string"){
            badge = allBadges.find(badge => badge.id === id);
        }

        if(badge != undefined){
            return badge
        } else {
            return defaultBadge;
        }
    },
    getAllBadges(){

    },
    getAllOwners(){

    },
    getAllRequest() {

    },
    getOneBadgeByName(){

    },
    getBadgeFromCategory() {

    },
    createOne(){

    },
    deleteOne(){

    },
    updateOne() {

    },
    updateDesc(){

    },
    updateName() {

    },
    updateImage() {

    },
    updateCategory() {

    },
    addOwner() {

    },
    deleteOwner() {

    },
    addRequest() {

    },
    deleteRequest() {

    }
}

//cree un qr code pour attribution automatique

