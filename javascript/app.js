var app = angular.module("commentSys",[]);

app.controller("commentControl",function($scope){

    $scope.test="yash";
    $scope.Listcomment=[
    "This is the first comment",
    "Here's the second comment",
    "And this is one More",
    "Here is another one"]; 

    $scope.insertComment = function(){
        if($scope.commentInput== null){
            window.alert("Please insert a comment");
        }else{
            $scope.Listcomment.push($scope.commentInput);
			$scope.commentInput = "";
        }
    }
});


