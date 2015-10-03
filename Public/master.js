angular.module("dynamicFormApp", [])
.config(['$interpolateProvider', function($interpolateProvider){
$interpolateProvider.startSymbol('{[{'); 
$interpolateProvider.endSymbol('}]}'); 
}

.controller("mainController", function($scope){
// sample data we would get back from an api
var users = [
    { 
      name: 'Flower',
      email: ''
    },
    {
      name: 'Flour',
      email: ''
    }
];  

// assign this data to an object to store all our form data
$scope.formData = {};
$scope.formData.users = users;
}