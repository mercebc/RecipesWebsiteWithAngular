angular
	.module('app')
	.factory('recipesApi', recipesApi)

function recipesApi($http){
	var factory;

	var apiJson = 'https://myrecipes-a4bbf.firebaseio.com/';

	factory = {
		getSeasonRecipes: getSeasonRecipes,
		getRecipe : getRecipe
	};

	return factory;

	///////////////////////

	function getSeasonRecipes(season){
		return $http.get(apiJson);
	}

	function getRecipe(id){
		return $http.get(apiJson);
	}
}