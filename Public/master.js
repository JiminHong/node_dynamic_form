var app = angular.module("dynamicFormApp", []);

app.config(['$interpolateProvider', function($interpolateProvider){
$interpolateProvider.startSymbol('{[{'); 
$interpolateProvider.endSymbol('}]}'); 
}]);

app.controller("mainController", function($scope){

  $scope.saveItem = function(){
    console.log("data",$scope.formdata);
    console.log("data",$scope.os);
    console.log("data",$scope.gender);
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
      label:'Microsoft Windows 7',
      type:'checkbox',
      name:'windowsSeven',
      value:''  
    },
    { 
      label:'Ubuntu',
      type:'checkbox',
      name:'ubuntu',
      value:''  
    },
    { 
      label:'Windows XP Professional',
      type:'checkbox',
      name:'windowsXP',
      value:''  
    },
    { 
      label:'Linux Mint',
      type:'checkbox',
      name:'linuxMint',
      value:''  
    },
    { 
      label:'Macintosh OSX',
      type:'checkbox',
      name:'macintosh',
      value:''  
    },  
    { 
      label:'Male',
      type:'radio',
      name:'sex',
      value:''  
    },
    { 
      label:'Female',
      type:'radio',
      name:'sex',
      value:''  
    },
    { 
      label: 'Hidden',
      placeholder: 'This is not showing',
      type:'hidden',
      name:'hidden',
      value:'' 
    }

];


// assign this data to an object to store all our form data
$scope.formData = {};
})