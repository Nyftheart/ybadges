const urlApi = "https://ybadges.azurewebsites.net/api";
export default {
    getAllUsers(){
        return fetch("https://ybadges.azurewebsites.net/api/Users",{
            mode : 'cors',
            method : "GET",
            headers: {
                'Content-type':"application/json",
            },
        }).then(res => res.json())
    }
}