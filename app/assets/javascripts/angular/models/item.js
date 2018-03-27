var app = angular.module('app');

app.factory('itemModel',itemModel);
itemModel.$inject = ['$resource']

function  itemModel($resource){
    return $resource("items/:id",{ id: '@id'},{
        query: { method: 'GET', isArray: true},
        update:  { method: 'PUT', responseType: 'json' }
    })
}