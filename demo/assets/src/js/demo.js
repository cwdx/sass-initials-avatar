angular.module('demo', [])

.controller('DemoInitialsCtrl', ['$scope', function($scope) {
  
  $scope.initials = "#abcdefghijklmnopqrstuvwxyz".split(""); 
  $scope.initialsDouble = ["cw", "ei", "jd", "io", "sj", "13"]; 
  $scope.sizes = ["xs", "sm", "md", "lg"];
  
}]);