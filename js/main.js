

const submit=document.getElementById("submitBtn")

const verifiedUsers = ["mario@gmail.com","luca@gmail.com","cluster@gmail.com","blades@gmail.com","knives@gmail.com"]

let verify = false

const resultBox=document.getElementById("access")    

submit.addEventListener("click", function () {
    let usermail= document.getElementById("user-mail").value
    let classe=""

    for (let i = 0; i < verifiedUsers.length; i++) {
        const actualUser= verifiedUsers[i]
        
        if (usermail==actualUser) {
            verify = true
        }

    }

console.log(verify)

if (verify==true) {
    resultBox.innerText =`benvenuto ${usermail}`
    classe="bg-green"
}
else{
    resultBox.innerText =(`utente ${usermail} non autorizzato all'accesso`)
    classe="bg-red"
}

resultBox.className = `rounded ${classe}`
})