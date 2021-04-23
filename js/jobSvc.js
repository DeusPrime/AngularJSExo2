app.service("job", function ($http) {

    this.apiKey = "214a72e6-d707-4354-8b25-4b55490ea13a";
    this.url = "https://fr.jooble.org/api/";
    this.recherche = function (searchObject) {

        return $http({
            method: "POST",
            url: `https://fr.jooble.org/api/${this.apiKey}`,
            data: {
                keywords: searchObject.emploi,
                location: searchObject.ville,
                radius: searchObject.rayon,
                salary: searchObject.salaire,
                page: searchObject.page,
                searchMode: searchObject.searchMode
            }
        })
        // return $http.post(this.url+this.apiKey)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

});