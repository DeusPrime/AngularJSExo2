app.controller("annonceCtrl", function ($scope) {
    $scope.title = "Annonce";
    $scope.offres = JSON.parse(localStorage.getItem("offres")).offres;
    console.log($scope.offres)
});