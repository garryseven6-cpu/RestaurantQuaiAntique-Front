import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/Home.html"),
    new Route("/Galerie", "La galerie", "/pages/Galerie.html"),
    new Route("/Signin", "Connexion", "/pages/Signin.html"),
    new Route("/Signup", "Inscripton", "/pages/Signup.html", "/js/Auth/Signup.js"),
    new Route("/Account", "Mon compte", "/pages/Account.html"),
    new Route("/EditPassword", "Changer mon mot de passe", "/pages/EditPassword.html"),
    new Route("/AllResa", "Vos réservations", "/pages/Reservations/AllResa.html"),
    new Route("/Reserver", "réservation", "/pages/Reservations/Reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";