var app = angular.module('app');

app.controller('ItemsController',ItemsController);

ItemsController.$inject = ['$scope', '$stateParams','$location','itemModel']

function ItemsController($scope, $stateParams,$location,itemModel){
    $scope.item = itemModel.get({ id: $stateParams.id });
    $scope.items = itemModel.query();
   
    $scope.addItem = function(){
        item = itemModel.save($scope.newItem)
        $scope.items.push(item)
        $scope.newItem = {}
        window.alert("Item adicionado !")
        $location.path('items');
    }

    $scope.deleteItem = function(index){
        item = $scope.items[index]
        itemModel.delete(item);
        $scope.items.splice(index,1)
    }

    $scope.editItem = function() {
        $scope.item.$update(function() {
          window.alert("Item salvo !")
          $location.path('items');
        });
      };
}