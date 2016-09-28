"use strict";

app.controller('StoreCtrl', 
  ['$scope', '_', 'productsService','categoriesService', "cartService", '$stateParams', 
  function($scope, _, productsService, categoriesService, cartService, $stateParams) {

  //init
  categoriesService.createCategories();

  productsService.createProducts();

  $scope.categories = categoriesService.getCategories();
  $scope.products = productsService.getProducts();
  
}]);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});