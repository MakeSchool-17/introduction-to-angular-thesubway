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

  $scope.tournament = { title: "", voteCount: 0 };

  $scope.createPost = function() {
    console.log($scope.tournament);
    $scope.tournaments.push($scope.tournament);
    $scope.tournament = { name: "", format: 0 };
  };
}]);
