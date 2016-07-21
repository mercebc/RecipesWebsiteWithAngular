angular
    .module('app')
    .component('seasonRecipes', {
        templateUrl: 'recipes/season-recipes.html',
        controller: 'SeasonRecipesController'
    })
    .controller ('SeasonRecipesController', seasonsRecipes);


    function seasonsRecipes(recipesApi){
        var $ctrl = this;
        
        $ctrl.recipes = {
    "recipes": [
            {
            "recipeID" : "1",
            "recipePicture" : "https://firebasestorage.googleapis.com/v0/b/myrecipes-a4bbf.appspot.com/o/real_serious_stuff.jpg?alt=media&token=91e5fa40-4f13-4b6d-b3ba-35bf6efaca96",
            "recipeRate" : "5",
            "recipeName" : "Peach puff pastry tart with almonds",
            "recipeSeason" : "Summer",
            "recipeCourse" : "Dessert",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : "Flour", "quantity" : "1kg"},
                { "ingredient" : "Water", "quantity" : "200ml"},
                { "ingredient" : "Oil", "quantity" : "100ml"}
            ],      
            "recipeMethod" : "Heat oven to 200C/180C fan/gas 6. Linrt lightly with foil and cook for a further 30-40 mins. The frangipane should puff up between the peaches and be golden brown and set in the centre. Cool on a wire rack, then slice and serve. Leftovers will keep for 1 day."
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "3",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "",
            "recipeSeason" : "Winter",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : "Heat oven to 200C/180C fan/gas 6. Lif"      
        },{
            "recipeID" : "4",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my forth",
            "recipeSeason" : "Spring",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : "And its made like that"        
        },{
           "recipeID" : "5",
           "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeName" : "",
            "recipeSeason" : "Summer",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : "Heat oven to 200C/180C fan/gas 6. L30-40 mins. The frangipane should puff up between the peaches and be golden brown and set in the centre. Cool on a wire rack, then slice and serve. Leftovers will keep for 1 day"      
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        },{
            "recipeID" : "2",
            "recipePicture" : "http://www.nomasdemama.com/wp-content/uploads/2014/07/IMG_3253_1.jpg",
            "recipeRate" : "5",
            "recipeName" : "This is my second RECIPE",
            "recipeSeason" : "Autumn",
            "recipeCourse" : "",
            "recipeDifficulty" : "Easy",
            "recipeServes" : "8",
            "recipeIngredients" : [
                { "ingredient" : ""},
                { "ingredient" : ""},
                { "ingredient" : ""}
            ],      
            "recipeMethod" : ""     
        }
    ]
};

        
    }
