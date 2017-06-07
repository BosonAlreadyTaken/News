angular.module('app')
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('root',{
            url:'/',
            views:{
                home:{
                    templateUrl:'../views/home_tpl.html',
                    controller:'homeController'
                },
                author:{
                    templateUrl:'../views/author_tpl.html',
                    controller:'authorController'
                },
                content:{
                    templateUrl:'../views/content_tpl.html',
                    controller:'authorController'
                },
                my:{
                    templateUrl:'../views/my_tpl.html',
                    controller:'authorController'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
    }])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('root.list',{
            template: '<home-list></home-list>'
        })

    }])