angular.module('MyApp')
.controller("CseCtrl", function($scope, $http) {
	$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyDW2WlXY8pP89GKA3tH4fH9dDiWE8H6G1I&cx=003482793751288746519:oyeo8dsb7ve&q=uluwatu&searchType=image&fileType=jpg&imgSize=xxlarge&alt=json")
  .then(function(response){ $scope.details = response.data; });

 
	  // $http.get('http://www.googleapis.com/customsearch/v1?key=AIzaSyDW2WlXY8pP89GKA3tH4fH9dDiWE8H6G1I&cx=003482793751288746519:oyeo8dsb7ve&q=uluwatu&searchType=image&fileType=jpg&imgSize=xxlarge&alt=json').
	  //   success(function(data, status, headers, config) {
	  //     $scope.posts = data.items;
	  //     $scope.title = data.queries.request[0].title;
	  //     $scope.results = data.queries.request[0].totalResults;
	  //   }).
	  //   error(function(data, status, headers, config) {
	  //     // log error
	  //   });
	});