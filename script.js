const Inputbox = document.getElementById("inputbox")
const btn = document.getElementById("btn")




const passwordLength = 14;
function generatepassword(passwordLength){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
     let password = '';
     for (let i = 0; i <passwordLength;i++){
        let randomnumber = Math.floor(Math.random() * characters.length)
        password += characters[randomnumber]
    
     } return password;

}

btn.addEventListener("click",()=>{

    Inputbox.value = generatepassword(passwordLength)
    

})



















btn.addEventListener("click",()=>{
    


})
