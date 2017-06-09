angular.module('app').directive('detail',[function () {
    return {
        restrict:'EA',
        template:'<div class="detail">详情123</div>',
        link: function ($scope,ele,attr) {
            ele.html(attr.content);
        }
    }
}])