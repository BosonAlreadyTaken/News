
angular.module('app').controller('homeController',['$scope','$state','myHttp',function ($scope,$state,myHttp) {
    
    //子路由默认跳转到
    $state.go('root.list')

    myHttp.getData(function (res) {
        // $scope.data = res.posts;

        //json_server 
        $scope.data = res;
        // console.log($scope.data);
    }, function (err) {
        console.log(err);
    })
}])