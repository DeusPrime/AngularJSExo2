app.controller("annonceCtrl", function ($scope) {
    $scope.title = "Annonce";
    $scope.offres = JSON.parse(localStorage.getItem("offres")).offres;

    $scope.removeAnnonce = function (offre) {
        idToRemove = offre.id;

        $scope.offres = $scope.offres.filter(function (item) {
            return item.id != idToRemove;
        });
        localStorage.setItem("offres", JSON.stringify($scope.offres));
    }

});