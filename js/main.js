'use strict'

var app = angular.module('clintegarrison', []);

app.factory('contentService', ['$document',
  function($document){
    var contentObj = {
      content:""
    }

    return contentObj;
}]);

app.controller('SideNavController', ['$scope','contentService',
  function($scope, contentService){
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
    $scope.skillClicked = function(skill) {
      console.log('skill clicked local',skill.Skill)
      contentService.content = skill.Skill;
      console.log('skill clicked contentService',contentService.content)
    }
  }]);

app.controller('ContentController', ['$scope','contentService',
  function($scope,contentService){
      $scope.contentService = contentService;
  }
]);
