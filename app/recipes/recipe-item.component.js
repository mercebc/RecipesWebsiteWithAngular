angular
    .module('app')
    .component('recipeItem', {
        templateUrl: 'recipes/recipe-item.html',
        controller: 'RecipeItemController'
    })
    .controller ('RecipeItemController', recipeItem);

    function recipeItem(){
        var $ctrl = this;
        $ctrl.title = 'Recipes';

    }