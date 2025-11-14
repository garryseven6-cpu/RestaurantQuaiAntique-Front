import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/Home.html"),
    new Route("/Galerie", "La galerie", "/pages/Galerie.html"),
    new Route("/Signin", "Connexion", "/pages/Signin.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";