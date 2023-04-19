let usermail= prompt ("inserisci la mail")

const verifiedUsers = ["mario@gmail.com","luca@gmail.com","cluster@gmail.com","blades@gmail.com","knives@gmail.com"]

let verify = false

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