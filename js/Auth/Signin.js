const EmailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSignin =document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Inporter l'API ici //

    if(EmailInput.value == "test@mail.com" && PasswordInput.value == "test123"){
        alert("Connexion réussie !");

        const token = "fake-jwt";
        setToken(token);
        
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        EmailInput.classList.add("is-invalid");
        PasswordInput.classList.add("is-invalid");
        alert("Email ou mot de passe incorrect");
    }
}