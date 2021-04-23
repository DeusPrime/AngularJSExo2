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
    $scope.page = 1;
    $scope.searchMode;

    $scope.jobSearch;

    $scope.offres;
    $scope.jobCount;

    $scope.searchJob = function () {
        $scope.jobSearch = {
            emploi: $scope.emploi,
        }

        if ($scope.ville) {
            $scope.jobSearch.ville = $scope.ville;
        }

        if ($scope.rayon) {
            $scope.jobSearch.rayon = $scope.rayon;
        }

        if ($scope.salaire) {
            $scope.jobSearch.ville = $scope.salaire;
        }

        if ($scope.ville) {
            $scope.jobSearch.ville = $scope.ville;
        }

        if ($scope.page) {
            $scope.jobSearch.page = $scope.page;
        }

        if ($scope.searchMode) {
            $scope.jobSearch.searchMode = $scope.searchMode;
        }

        console.log($scope.jobSearch)

        job.recherche($scope.jobSearch)
            .then(function (response) {
                console.log(response)
                $scope.offres = response.jobs;
                $scope.jobCount = response.totalCount;
                
            });

    }

    $scope.getDateFromString = function(date){
        console.log(new Date(Date.parse(response.jobs[0].updated)).toLocaleDateString("fr-FR"))
        return new Date(Date.parse(response.jobs[0].updated)).toLocaleDateString("fr-FR")
    }

    $scope.goToPage = function(page) {

        if (typeof page == "string"){
            $scope.page = Math.floor($scope.jobCount / 20)
        }else{
            if (page > 0 && page < $scope.jobCount / 20){
                $scope.page = page
            }else{
                $scope.page = 1
            }
        }
        
        $scope.searchJob()
    }

    $scope.saveOffre = function(offre) {
        let savedOffers = JSON.parse(localStorage.getItem("offres"));

        console.log(savedOffers)

        if (!savedOffers) {
            savedOffers = [{offres: []}];
            console.log(savedOffers)
        }
        savedOffers.offres.push(offre);
        console.log(savedOffers)
        localStorage.setItem(JSON.stringify(offres));
    }

});