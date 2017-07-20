var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/contactlist').then(function(response){
        console.log("I got it: "+response.data);
        $scope.contactlist = response.data;
    });﻿

   /* person1 = {
        name: 'Tim',
        email: 'tim@gmail.com',
        number:'(571) 426-1433'
    };

    person2 = {
        name:'Liam',
        email:'neason@taken2.com',
        number: '(777) 777-7777'
    };

    person3={
        name: 'Jessie',
        email:'jessie@vma.com',
        number: '(684) 426-1232'
    };

var contactlist = [person1, person2, person3];

$scope.contactlist = contactlist;*/

}]);﻿