/**
 * Created by Administrator on 2017/6/7.
 */
(function (angular) {
    'use strict';
    /*1.创建模块*/
    var app = angular.module('app',['ui.router']);
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
       
       //上面的方式是 我的指令有自己的控制器 所以自己控制了自己内部的点击事件,现在换到这种我自己没有控制器,
       //全部事件冒泡到上一级控制器监听
       $scope.type = "home";//这里绑定这个属性是切换类的作用的
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