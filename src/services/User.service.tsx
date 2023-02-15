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
    }
}