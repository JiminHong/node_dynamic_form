var app = angular.module("dynamicFormApp", []);

app.config(['$interpolateProvider', function($interpolateProvider){
$interpolateProvider.startSymbol('{[{'); 
$interpolateProvider.endSymbol('}]}'); 
}]);

app.controller("mainController", function($scope){
// sample data we would get back from an api
$scope.formdata = [
    { 
      label: 'Flower',
      placeholder: 'a'
    },
    {
      label: 'Flour',
      placeholder: 'b'
    }
];  

// assign this data to an object to store all our form data
$scope.formData = {};
})