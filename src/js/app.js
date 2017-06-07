/**
 * Created by Administrator on 2017/6/7.
 */
(function (angular) {
    'use strict';
    /*1.创建模块*/
    var app = angular.module('app',[]);
    /*2.创建一个控制器来管理整个项目*/
    app.controller('AppController',['$scope',function ($scope) {
        $scope.title = "WebApp";

       /* /!*监听tabbarchange通知*!/
        $scope.$on('tabbarChange',function (e,obj) {

            var title = "首页";
            switch (obj.type){
                case 'home':
                    title = "首页";
                    break;
                case 'author':
                    title = "作者";
                    break;
                case 'content':
                    title = "栏目";
                    break;
                case 'my':
                    title = "我的";
                    break;
            }
            /!*收到了tabbar切换
            * 告诉nav切换标题
            * *!/
            $scope.$broadcast('changeTitle',{title:title})
        })*/

       $scope.type = "home";
       $scope.tabbarChange = function (type) {
           $scope.type = type;
           var title = "首页";
           switch (type){
               case 'home':
                   title = "首页";
                   break;
               case 'author':
                   title = "作者";
                   break;
               case 'content':
                   title = "栏目";
                   break;
               case 'my':
                   title = "我的";
                   break;
           }
           $scope.$broadcast('changeTitle',{title:title})
       };


    }]);
    /*3.绑定模块*/
    /*4.绑定控制器*/

})(angular);