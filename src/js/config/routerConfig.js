angular.module('app')
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('root',{
            url:'/root',
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
        $urlRouterProvider.otherwise('/root');
    }])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('root.list',{
            url: '/list',
            template: '<home-list></home-list>'
        })
    }])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('root.detail',{
            url: '/detail/:id',
            template:'<detail content="{{content}}"></detail>',
            controller: 'detailController'
        })
    }])