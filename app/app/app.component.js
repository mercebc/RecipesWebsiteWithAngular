(function (){
    'use strict';

    angular
        .module('app', ['ngComponentRouter'])
        .config(function($locationProvider){
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'myApp')
        .component('myApp', {
            templateUrl: 'app/app.tpl.html',
            controller: 'AppController',
            $routeConfig: [
                {path: '/', name: 'Seasons', component: 'seasons', useAsDefault: true},
                {path: '/season/:season', name: 'SeasonRecipes', component: 'seasonRecipes'},
                {path: '/recipe/:id', name: 'RecipeItem', component: 'recipeItem'}
            ]
        });

})();