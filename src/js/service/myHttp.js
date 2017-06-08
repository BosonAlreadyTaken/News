angular.module('app').service('myHttp',['$http',function ($http) {
    //包装一下$http实现更好的扩展性
   this.getData =  function (successFn,errorFn) {
        $http({
            // url: "http://localhost/home.php",
            // method: 'jsonp'

            //json_server 服务器
            url: "http://localhost:3000/posts",
            method: 'get'
            
        }).then(function (res) {
            successFn(res.data)
        }).catch(function (error) {
            errorFn(error)
        })
   } 
}])