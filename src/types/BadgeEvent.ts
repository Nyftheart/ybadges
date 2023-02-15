export default interface IBadgeEvent {
    id: String,
    Nom: String,
    Desc: String,
    Categorie: String,
    UnderCategorie: String,
    Image: [],
    Date: Date,
    Possesion: bigint,
    MaxPossesion: bigint,
    finaleDate: Date,
}