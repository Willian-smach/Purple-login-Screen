const $user = document.querySelector("#inpUser"); // Constant containing user value;
const $password = document.querySelector("#inpPassword"); // Constant containing password value

const API_URL = ''; // Constant contains your API login URL;

document.getElementById('btnLogin').addEventListener("click", () => {
    const response = fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            user: $user.value,
            password:$password.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
        .then((data) => {
            verifyUser(data);
        })
        .catch((error) => {
            console.log(`error: ${error}`);
        })
});

const verifyUser0 = async (data) => {
    for($i = 0; $i < data.users.length; $i++){
        let user = data.users.user; // json user data from your api
        let status = data.users.status; // json status of user data from your api

        if(status == true){
            localStorage.setItem("user", user);
            return window.location.href = ''; // URL API
        }else{
            if(status == false){
                let msg = data.users.message; // Message error from json
                alert(msg);
            }
        }
    }
}
