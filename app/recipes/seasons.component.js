angular
    .module('app')
    .component('seasons', {
        templateUrl: 'recipes/seasons.html',
        controller: 'SeasonsController'
    })
    .controller ('SeasonsController', seasons);

    function seasons(){
        var $ctrl = this;
        $ctrl.title = 'Recipes';

    }