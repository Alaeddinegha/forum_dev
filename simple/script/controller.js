'use strict';
var app=angular.module("myApp",[]);
app.controller('questionsController',['$scope','monService',function($scope,monService){
    //console.log($routeParams)
    $scope.text_resp = '';
        $scope.id_uti ='';
        
    monService.getQuestions($scope);
    $scope.responses = '';
    $scope.getQuestion = function(id, currentQ){
        $scope.currentQuestion = currentQ;
        $scope.showResponsesTable = true;
        //console.log(id)
        monService.getQuestion($scope, id);
       
    } 
    
    $scope.ajoutRep = function () {
        console.log($scope.text_resp)
        console.log($scope.id_uti)
        console.log($scope.id_response)
        monService.sendResponse($scope,$scope.text_resp, $scope.id_uti , $scope.id_response)

    }

    
    //monService.getQuestion($scope);

    //un controlleur pour recuperer les resultats de mon service

    $scope.init = function() {
        console.log('init')
        $scope.showResponsesTable = false;
        
        monService.getQuestions($scope);
        monService.getQuestion($scope, $scope.id_response);
    }


}])

app.controller('questionController',['$scope','monService',function($scope,monService){

    monService.getQuestion($scope,id);
    $scope.compteur=response.data.length;
    
}])
/* 
app.controller('nbrController',['$scope','monService',function($scope,monService){
    monService.getNombre($scope,id);*/
  

