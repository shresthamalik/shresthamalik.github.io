// Code goes here

var portfolioAppModule=angular.module('portfolioApp',['ngRoute']);

//Routing
portfolioAppModule.config(function($routeProvider){
  $routeProvider
  
  .when("/about",{
    templateUrl:'about.html',
    controller: 'aboutController'
  })
  
  .when('/portfolio',{
    templateUrl: 'portfolio.html',
    controller: 'portfolioController'
  })
  
  .when('/contact',{
    templateUrl: 'contact.html',
    controller: 'contactController'
  })
  
  .when('/CV',{
    templateUrl: 'CV.html',
    controller: 'CVController'
  })
  
  
  .otherwise({
    templateUrl:'about.html'
  });
  
});

// Define Controllers
portfolioAppModule.controller("aboutController",function($scope){
  $scope.message="About page";
  
});

portfolioAppModule.controller("portfolioController",function($scope){
  $scope.message='Portfolio';
  $scope.projects = [
    // Proj 1
    {name:'Facial Expression Recognition', 
    source:'Academic Project', period:"May '16",
    link:'',
    imageSrc: 'https://farm9.staticflickr.com/8292/29377358636_2c8b182a59_b.jpg'
    },
    
    //Proj 2
    {name:'Random Quote Generator', 
    source:'Free Code Camp', period:"Aug '16",
    link:'http://codepen.io/sMalik/full/JKmBZm/',
    imageSrc: 'https://farm9.staticflickr.com/8455/29303216162_9c0b440cb6_b.jpg'
    },
    
    //Proj 3
    {name:'Weather App', 
    source:'Free Code Camp', period:"Aug '16",
    link:'http://codepen.io/sMalik/full/NAZjWw/',
    imageSrc: 'https://farm9.staticflickr.com/8284/29411895355_c8bef7a897_b.jpg'
    },
    
    //Proj 4
    {name:'Leet Code Problem Solutions', 
    source:'', period:"Ongoing",
    link:'https://github.com/shresthamalik/LeetCode',
    imageSrc: 'https://leetcode.com/apple-touch-icon-144x144.png'
    }
    
  ];
});

portfolioAppModule.controller("CVController",function($scope){
  $scope.message='CV';
});



portfolioAppModule.controller("contactController",['$scope','$http', function($scope, $http){
  
  $scope.user={};
  $scope.message="";
  
  $scope.emailMe= function(){
    $http({
          url: '//formspree.io/shrestha87@gmail.com',
          method: 'POST',
          //data: 'hello',
          //datatype: 'json'
          data:$scope.user,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          }
    });
    /*
    .success(function(data, status, headers, config){
        //called for result & error because 200 status
        if (data.result){
            //handle success here
            $scope.message="Thank you for your email.";
        } 
        else if (data.error) {
            //handle error here
            $scope.message="Error 00.Please try again in some time. Sorry!"
        }
    })
    .error(function(data, status, headers, config){
        //handle non 200 statuses
        $scope.message="Error non 200 .Please try again in some time. Sorry!"
    })
    */
    alert($scope.user.name);
    alert('success');
  }
  }
]);


//Directives
portfolioAppModule.directive("headerDirective",function(){
  return {
    templateUrl: 'header.html'
  };
});

portfolioAppModule.directive("footerDirective",function(){
  return{
    templateUrl:'footer.html'
  };
});
  
  