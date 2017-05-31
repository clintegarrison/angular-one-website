'use strict'

var app = angular.module('clintegarrison', []);

app.factory('contentService', ['$document',
  function($document){
    var contentObj = {
      selectedSkill:""
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
      contentService.selectedSkill = skill.Skill;
      console.log(contentService.selectedSkill)
    }
  }]);

app.controller('ContentController', ['$scope','contentService',
  function($scope,contentService){
      $scope.contentService = contentService;

      $scope.$watch('contentService.selectedSkill', function(newValue, oldValue) {
        if(newValue==="Mobile"){
          $scope.icons = [
            {"icon":"android","image":"./images/android.png"},
            {"icon":"ios","image":"./images/ios.png"},
            {"icon":"phonegap","image":"./images/phonegap.png"}
          ]
        }else{
          $scope.icons = []
          $scope.blurbs = []
        }
      });


      $scope.iconClicked = function(icon) {
        if(icon.icon==="android"){
          $scope.blurbs = [
            { "title" : "TC70", "text" : "Integration owner of 40k in store devices"},
            { "title" : "TC70", "text" : "Authentication launcher for store and corportate users"},
            { "title" : "TC70", "text" : "Extension management for the softphone application"},
            { "title" : "TC70", "text" : "Customized text and audio notifications"}
          ]
        }else{
          $scope.blurbs = []
        }
      }
  }
]);
