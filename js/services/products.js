"use strict";

app.factory('productsService', ['categoriesService', function(categoriesService){

  var stub = {};

  var _products = [];

  var _id = 1;

  stub.createProducts = function(){
  	var categories = categoriesService.getCategories();
  	for(var i = 0; i < 50; i++){
  		var prod = {id: _id,
  					name: faker.fake("{{commerce.productName}}"),
  					price: faker.fake("{{commerce.price}}"),
  					description: faker.fake("{{commerce.productAdjective}} {{commerce.productMaterial}}")};
  		var prodCategories = [];
  		for(var j = 0; j < Math.floor(Math.random()*20 + 1); j ++){
  			prodCategories.push(_.sample(categories).id);
  		}
  		prodCategories = _.sortedUniq(prodCategories);
  		prod.categories = prodCategories;
  		_products.push(prod);
  }

 

  // stub.david = function() {
  //   console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
  // };

  return stub;

}]);