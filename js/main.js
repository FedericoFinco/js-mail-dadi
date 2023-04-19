

const submit=document.getElementById("submitBtn")

const verifiedUsers = ["mario@gmail.com","luca@gmail.com","cluster@gmail.com","blades@gmail.com","knives@gmail.com"]

let verify = false


submit.addEventListener("click", function () {
    let usermail= document.getElementById("user-mail").value
    
    for (let i = 0; i < verifiedUsers.length; i++) {
        const actualUser= verifiedUsers[i]
        
        if (usermail==actualUser) {
            verify = true
        }

    }

console.log(verify)

if (verify==true) {
    alert(`benvenuto ${usermail}`)
}
else{
    alert(`utente ${usermail} non autorizzato all'accesso`)
}
})