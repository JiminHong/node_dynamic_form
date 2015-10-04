var app = angular.module("dynamicFormApp", []);

app.config(['$interpolateProvider', function($interpolateProvider){
$interpolateProvider.startSymbol('{[{'); 
$interpolateProvider.endSymbol('}]}'); 
}]);

app.controller("mainController", function($scope){

  $scope.saveItem = function(){
    console.log("data",$scope.formdata);
    
    }


// sample data we would get back from an api
$scope.formdata = [
    { 
      label: 'First Name',
      placeholder: 'Enter your first name',
      type:'text',
      name:'firstname',
      value:'' 
    },
    { 
      label: 'Last Name',
      placeholder: 'Enter your last name',
      type:'text',
      name:'lastname',
      value:''  
    },
    { 
      label: 'Email Address',
      placeholder: 'Enter your email address',
      type:'email',
      name:'email',
      value:''  
    },
    { 
      label: 'Username',
      placeholder: 'Enter your username',
      type:'text',
      name:'username',
      value:''  
    },
    { 
      label: 'Password',
      placeholder: 'Enter your password',
      type:'password',
      name:'password',
      value:''  
    },
    { 
      label: 'Date of Birth',
      placeholder: 'Enter your date of birth',
      type:'date',
      name:'dob',
      value:''  
    },
    { 
      class:"windows",
      label:'I have Windows',
      type:'checkbox',
      name:'windows',
      value:'windows'  
    },
    { 
      class:"mac",
      label:'I have a Mac',
      type:'checkbox',
      name:'mac',
      value:'mac'  
    },
    { 
      class:"male",
      label:'Male',
      type:'radio',
      name:'sex',
      value:'male'  
    },
    { 
      class:"female",
      label:'Female',
      type:'radio',
      name:'sex',
      value:'female'  
    }


    ];  

// assign this data to an object to store all our form data
$scope.formData = {};
})