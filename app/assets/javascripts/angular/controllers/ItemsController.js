

var app = angular.module('app');

app.factory("Item",function($resource){
    return $resource("items/:id",{ id: '@id'},{
        index: { method: 'GET', isArray: true, responseType: 'json'},
        update:  { method: 'PUT', responseType: 'json' }
    })
})

app.controller("ItemsController",function($scope, Item){
    $scope.items = Item.index();
    $scope.addItem = function(){
        item = Item.save($scope.newItem)
        $scope.items.push(item)
        $scope.newItem = {}
        window.location.reload(false);
    }

    $scope.deleteItem = function(index){
        item = $scope.items[index]
        Item.delete(item);
        $scope.items.splice(index,1)
    }
})
