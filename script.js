const container = document.querySelector(".main-container");

function toggleIngredients() {
    const ingredientsDiv = document.getElementById("ingredients");
    const recipeDiv = document.getElementById("recipe");

    // Show ingredients, hide recipe
    // closed ingredients
    if (ingredientsDiv.style.display === "block") {
        ingredientsDiv.style.display = "none";


        ingredientsDiv.style.zIndex = -2;
        container.style.filter = "blur(0)";
        // when it's open
    } else {
        ingredientsDiv.style.display = "block";
        recipeDiv.style.display = "none";


        container.style.filter = "blur(5px)";
        ingredientsDiv.style.zIndex = 1000;

    }
}

function toggleRecipe() {
    const ingredientsDiv = document.getElementById("ingredients");
    const recipeDiv = document.getElementById("recipe");

    // Show recipe, hide ingredients
    if (recipeDiv.style.display === "block") {
        recipeDiv.style.display = "none";


        recipeDiv.style.zIndex = -2;
        container.style.filter = "blur(0)";

    } else {
        recipeDiv.style.display = "block";
        ingredientsDiv.style.display = "none";

        container.style.filter = "blur(5px)";
        recipeDiv.style.zIndex = 1000;
    }
}
