var app = angular.module('app');

app.factory("itemModel",function($resource){
    return $resource("items/:id",{ id: '@id'},{
        query: { method: 'GET', isArray: true},
        update:  { method: 'PUT', responseType: 'json' }
    })
})