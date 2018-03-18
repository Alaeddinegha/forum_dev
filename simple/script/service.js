var app=angular.module('myApp')
app.service('monService',['$http',function($http){
    this.temp_k = [];
    //$scope.id_response = 'blalalala';
    //recuperer les données du serveur en utilisant la method GET en http
    this.getQuestions=function($scope){
        $http({
            method:'GET',
            url:'http://forum/api/questions'
        }).then(function successCallback(response) {
            $scope.questions = [];
            $scope.questions = response.data;
            for(var i=0;i<$scope.questions.length;i++) {
                this.temp_k = $scope.questions[i] 
                $scope.questions[i]['countResp']= 0;
              console.log(i)
                $http({
                    method:'GET',
                    url:'http://forum/api/question/'+$scope.questions[i].id_ques
                }).then(function successCallback(response) {
                   
                //    $scope.compteur = response.data.length;
                //    console.log(response.data.length)
                if(response.data.length !== 0){
                    console.log(this.temp_k)
                    this.temp_k['countResp'] =  response.data.length ;
                }
                 
                //    console.log($scope.questions[i])
                   
                })
                // $scope.questions[i] = this.temp_k;
                // console.log($scope.questions[i])
                // $scope.questions[i] += ["countResp", $scope.compteur];
                
            //  $scope.questions[i].push({'countResp' : $scope.compteur});
            
                
              }
            
         
           
        
 });

    };
    this.getQuestion=function($scope, id){
        var id_temp = id;
        console.log('Here');
        console.log(id_temp)
       
        $http({
            method:'GET',
            url:'http://forum/api/question/'+id_temp
        }).then(function successCallback(response) {
            this.question = response.data;
            console.log(this.question)
            $scope.responses = response.data;
            $scope.id_response = id_temp;
            $scope.compteur=response.data.length;
       // this.compteur=function(){ 
              
             // return compteur;
              
           
           console.log('compteur')
           console.log($scope.compteur)
            //$scope.reponses = response.data;
            
    });
    };

    this.sendResponse=function($scope,text_resp,id_uti, id_response){
        console.log('service var')
        console.log(text_resp)
        console.log(id_uti)
        console.log(id_response)
        $http({
            method:'POST',
            url:'http://forum/api/ajoutr',
            data: {text_rep:text_resp,id_ques:id_response,id_uti:id_uti}
        }).then(function successCallback(response) {
            console.log('success')
            console.log(response);
            $http({
                method:'GET',
                url:'http://forum/api/question/'+id_response
            }).then(function successCallback(response) {
                console.log('get successfully')
       
                // this.question = response.data;
                $scope.responses = response.data;
               
                console.log($scope.responses)
            })
            
     });

    };
    /*
this.getNombre=function($scope, id_ques){
    var id_temp = id_ques;
    console.log('la question');
    console.log(id_temp)
    var id_temp = id_ques;
    console.log(id_temp)
    $http({
        method:'GET',
        url:'http://forum/api/nbr_rep/'+id_temp
    }).then(function successCallback(response) {
       
        $scope.nombres = response.data;
        $scope.id_ques = id_temp;
    });
};*/
}]);
