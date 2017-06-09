angular.module('app').controller('detailController',['$scope','$stateParams',function ($scope,$stateParams) {
    
    console.log($scope.data);
    var curItem = $scope.data[$stateParams.id];
    //console.log(curItem);
    $scope.content = curItem.content;
    console.log($scope.content);
}])