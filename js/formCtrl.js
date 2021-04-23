app.controller("formCtrl", function ($scope, job) {
    $scope.title = "Formulaire";
    $scope.emploi;
    $scope.ville;
    $scope.rayon;
    $scope.rayons = [
        { id: 0, text: "< 0 km" },
        { id: 8, text: "< 8 km" },
        { id: 16, text: "< 16 km" },
        { id: 24, text: "< 24 km" },
        { id: 40, text: "< 40 km" },
        { id: 80, text: "< 80 km" }];
    $scope.salaire;
    $scope.filtre;

    $scope.jobSearch;

    $scope.searchJob = function () {
        $scope.jobSearch = {
            emploi: $scope.emploi,
            ville: $scope.ville,
            rayon: $scope.rayon,
            salaire: $scope.salaire,
            filtre: $scope.filtre
        }

        console.log($scope.jobSearch)

        job.recherche(jobSearch)
            .then(function (response) {
                console.log(response)
            });

    }

});