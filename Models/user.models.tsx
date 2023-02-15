import {AutoId} from "@firebase/firestore/dist/firestore/src/util/misc";

export interface Etudiant  {
    id? : string;
    nom? : string;
    prenom? : string;
    filiere? : string;
}