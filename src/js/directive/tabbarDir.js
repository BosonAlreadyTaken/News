/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('app').directive('tabbar',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/tabbar_tpl.html',
        /*controller:function ($scope) {
            $scope.tabbarChange = function (type) {
              /!*发通知，告诉外界tabbar切换 （当前是哪一个会告诉外界）*!/
              $scope.$emit('tabbarChange',{type:type});
            };
        }*/
    }
});