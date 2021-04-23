app.service("job", function ($http) {


    this.recherche = function(searchObject) {

        return $http({
            method: "GET",
            url: "https://geo.api.gouv.fr/communes",
            params: {
                nom: cityName,
                fields: "departement,centre,contour"
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

});