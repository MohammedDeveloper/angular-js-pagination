/**
 * Creating the module's router for this app
 */
// <script src="angular/app.module.js"></script>
// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>

/// set the router configuration...
myModule.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/dashboard", {
            templateUrl: "angular/templates/dashboard.html",
            controller: "dashboardCtrl"
        })
        .otherwise({
            redirectTo: "/dashboard"
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});