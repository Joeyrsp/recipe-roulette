import { textToRecipes } from "/utils";

import recipes from "/data/recipes.txt?raw";

export default () => ({
    recipes: textToRecipes(recipes),
    // recipe: [],
});
