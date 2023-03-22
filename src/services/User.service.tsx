const urlApi = "https://ybadges.azurewebsites.net/api";
export default {
    getAllUsers(){
        return fetch(`${urlApi}/Users`,{
            mode : 'cors',
            method : "GET",
            headers: {
                'Content-type':"application/json",
            },
        }).then(res => res.json())
    },
    deleteOne(id : number){
        return fetch(`${urlApi}/Users/${id}`,{
            method : "DELETE",
            headers: {
                'Content-type':"application/json",
            },
        })
    },
    createOne(user : {}){
        return fetch(`${urlApi}/Users`,{
            method : "POST",
            headers: {
                'Content-type':"application/json",
            },
            // @ts-ignore
            body :JSON.stringify(user),
        })
    },
    editOne(id : number, user : {}){
        return fetch(`${urlApi}/Users/${id}`,{
            method : "PUT",
            headers: {
                'Content-type':"application/json",
            },
            body :JSON.stringify(user),
        })
    }
}
