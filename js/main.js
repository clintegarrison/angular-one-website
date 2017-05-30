'use strict'

var app = angular.module('clintegarrison', []);

app.controller('SideNavController', ['$scope',
  function($scope){
    $scope.myName = "Clint Garrison";
    $scope.mySkills = [
      {
        "Skill": "Database",
        "icon": "./images/database.png"
      },
      {
        "Skill": "Server Side",
        "icon": "./images/server.png"
      },
      {
        "Skill": "Mobile",
        "icon": "./images/mobile.png"
      },
      {
        "Skill": "User Interface",
        "icon": "./images/desktop.png"
      },
    ]
  }]);
