/**
 * Dashboard controller
 */
myModule.controller("dashboardCtrl", ["$http", "$scope", "paginationService", function ($http, $scope, paginationService) {

    /**
     * Initializers
     */
    $scope.pager = {};

    /// get flights...
    $scope.GetFlights = function () {
        return $http.get("/flights.json", function (response) {
            return response;
        });
    };

    /// set flights...
    $scope.GetFlights().then(function (response) {

        /// set the data...
        $scope.flights = response.data;

        /// set the page here    
        $scope.initController();
    });


    /// init of pagination
    $scope.initController = function () {
        /// initialize to page 1
        $scope.setPage(1);
    }

    /// set the page in pagination...
    $scope.setPage = function (page) {

        /// check...
        if (page < 1 || page > $scope.pager.totalPages) {
            return;
        }

        /// get pagination object from service
        $scope.pager = paginationService.GetPager($scope.flights.length, page, 5);

        /// get current page of items
        $scope.items = $scope.flights.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
    };


}]);