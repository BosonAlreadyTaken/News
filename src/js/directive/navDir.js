/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('app').directive('navDir',function () {
   return {
       restrict:'EA',
       templateUrl:'../views/nav_tpl.html',
       link:function ($scope,ele,attr) {
           $scope.$on('changeTitle',function (e,obj) {
               ele.find('span').html(obj.title);
           })
       }
   }
});