angular.module('redditApp', [])
.controller("MainCtrl", ['$scope', function($scope){
    $scope.tournaments = [
  {
    name: 'Pikachu',
    format: 0
  },
  {
    name: 'Caterpie',
    format: 1
  },
  {
    name: 'Jigglypuff',
    format: 0
  },
  {
    name: 'Gengar',
    format: 1
  },
  {
    name: 'Snorlax',
    format: 1
  }
  ];

  $scope.tournament = { title: "", format: 0 };

  $scope.createPost = function() {
    var errors = "";
    if ($scope.postForm.$valid == false) {
        alert("Please fill out correct formats");
        return false;
    }
    if ($scope.post == null) {
        //this one requires immediate-break to avoid crashes.
        alert("Please fill out required fields");
        return false;
    }
    //if (!$scope.post.hasOwnProperty('title') || !$scope.post.hasOwnProperty('format'))
    $scope.tournament = { title: $scope.post.title, format: $scope.post.format};
    $scope.tournaments.push($scope.tournament);
    $scope.tournament = { name: "", format: 0 };
  };
}]);
