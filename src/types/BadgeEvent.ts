export default interface IBadgeEvent {
    id: String,
    Nom: String,
    Desc: String,
    categorie: String,
    underCategorie: String,
    images: [],
    date: Date,
    possesion: bigint,
    maxPossesion: bigint,
    finaleDate: Date,
}
