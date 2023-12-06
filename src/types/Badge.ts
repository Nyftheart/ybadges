export default interface IBadge {
    id: string;
    image: string;
    name: string;
    category: string;
    description: string;
    owners: string[];
    requests: string[];
}

/*
*
* All
* One Badge par id (prévoir peut être de récuperer un badge via un autre champs)
* Tout les badges d'une catégorie
* Tout les owner par id badge
* Tout les requester par id badge
* Insert
* Update
* Delete
*
* */
