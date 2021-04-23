app.controller("formCtrl", function ($scope) {
    $scope.title = "Formulaire";
    $scope.ville = false;
    $scope.rayon = false;
    $scope.rayons = [
        { id: 0, text: "< 0 km" },
        { id: 8, text: "< 8 km" },
        { id: 16, text: "< 16 km" },
        { id: 24, text: "< 24 km" },
        { id: 40, text: "< 40 km" },
        { id: 80, text: "< 80 km" }];
    $scope.salaire = false;
    $scope.filtre = false;

    $scope.jobSearch = false;

    $scope.searchJob = function () {
        $scope.jobSearch = {
            ville: $scope.ville,
            ville: $scope.rayon,
            ville: $scope.salaire,
            ville: $scope.filtre
        }
    }

});