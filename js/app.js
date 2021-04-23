// Module principal + table de routage
var app = angular.module('app', ["ngRoute"]);

//configuration des routes
app.config(function($routeProvider){
    // si / dans l'url, appel de home.html et controleur homeCtrl
    $routeProvider
    .when("/",{
        templateUrl: "../templates/form.html",
        controller: "formCtrl"
    })
    .when("/form",{
        templateUrl: "../templates/form.html",
        controller: "formCtrl"
    })
    .when("/annonce",{
        templateUrl: "../templates/annonce.html",
        controller: "annonceCtrl"
    })
    .when("/credit",{
        templateUrl: "../templates/credit.html",
        controller: "creditCtrl"
    })
    .otherwise({
        redirectTo: "/"
    });

})