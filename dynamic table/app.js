var app=angular.module("app",[]);

app.controller("myCtr",function($scope){
    $scope.myData=[];
    $scope.addData=function(){
        $scope.myData.push({'name':$scope.name, 'job':$scope.job, 'sal':$scope.sal,'pno':$scope.pno, /*'pic':$scope.pic*/});
        $scope.name='';
        $scope.job='';
        $scope.sal='';
        $scope.pno='';
    };

    $scope.removeData=function(index){
        $scope.myData.splice(index,1);
    };
});