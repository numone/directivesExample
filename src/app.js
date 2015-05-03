var app = angular.module('ChrisApp',['ngRoute']);

app.controller('main', function($scope) {
    $scope.mainText = 'hello there from main controller';
});

app.controller('childController', function($scope) {
     $scope.childText = 'hello there from the child controller';
});

app.controller('somewhereElse', function($scope) {
     $scope.somewhereElseText = 'hello there from the somewhere else controller';
});

app.directive('childArea', function() {
     return {
         restrict: 'E',
         templateUrl: 'html/child.html',
         controller: 'childController'
     }
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/main.html',
            controller: 'main'
        })
        .when('/somewhereelse', {
            templateUrl: 'html/somewhereelse.html',
            controller: 'somewhereElse'
        })
});


//angular.bootstrap(document, ['ChrisApp']);