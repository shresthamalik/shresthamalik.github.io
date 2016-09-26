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

  $scope.interests= [
    {name:'Software Development', color:'DeepPink'},
    {name:'Machine Learning', color:'DarkTurquoise '},
    {name:'Web Development', color:'DarkViolet'},
    {name:'Object Oriented Design', color: 'LightSeaGreen' },
    {name:'Data Mining', color:'RebeccaPurple', },
    {name:'Front end Development', color:'Purple'},
    {name:'Distributed Systems' , color: 'OrangeRed'},
    {name:'Computer Vision' , color: 'Orchid'},
    {name:'Back end Development', color:'PaleVioletRed'},
    {name:'Parallel Computing', color: 'Crimson'},
    {name:'Neural Networks' , color:'Teal'}
    ];

});

portfolioAppModule.controller("portfolioController",function($scope){
  $scope.message='Portfolio';

  $scope.showPopover = function(data) {
    this.popoverIsVisible = true;
    this.description=data;
 };

  $scope.hidePopover = function () {
    this.popoverIsVisible = false;
  };



  $scope.projects = [
    // Proj 1
    {name:'Facial Expression Recognition',
    source:'Academic Project', period:"May '16",
    link:'',
    desc:'Built a convolutional neural network that achieves a classification accuracy of 65% ' +
    'on the Kaggle Facial Expression Recognition Dataset(FER-2013). '+
    'This accuracy matches the human accuracy on the dataset.The dataset has around 35890 images ' +
    'of human faces labeled with one of the 7 expressions(0=Angry, 1=Disgust, 2=Fear, 3=Happy, '+
    '4=Sad, 5=Surprise, 6=Neutral).',
    imageSrc: 'https://farm9.staticflickr.com/8573/29892502666_6bbaae30f3_m.jpg'
    },

    //Proj 2
    {name:'Random Quote Generator',
    source:'Free Code Camp', period:"Aug '16",
    link:'http://codepen.io/sMalik/full/JKmBZm/',
    desc:'Designed a web-app that displays random quotes from movies on click of a button. '+
    'Used Random Famous Quotes API from mashape for this. It is also possible to tweet the quote.',
    imageSrc: 'https://farm9.staticflickr.com/8455/29303216162_9c0b440cb6_b.jpg'

    },

    //Proj 3
    {name:'Weather App',
    source:'Free Code Camp', period:"Aug '16",
    link:'http://codepen.io/sMalik/full/NAZjWw/',
    desc:'This webapp uses geolocation to get the current location coordinates of the user and '+
    'then makes an API call to OpenWeatherMap to get the local weather for that location.' +
    'Also displays the current location on map ',
    imageSrc: 'https://farm9.staticflickr.com/8284/29411895355_c8bef7a897_b.jpg'
    },

    //Proj 4
    {name:'Leet Code Problems\' Solutions',
    source:'', period:"Ongoing",
    link:'https://github.com/shresthamalik/LeetCode',
    desc:'I love solving the algorithm and data structures problems on various online portals. '+
    'My solutions to few of the problems on leetcode are here.',
    imageSrc: 'https://farm9.staticflickr.com/8355/29927458085_d5ec92606e_m.jpg'
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
