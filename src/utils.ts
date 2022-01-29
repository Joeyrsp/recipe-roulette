export const textToRecipes = (text: string) => {
    const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
    const recipes: [[string?]?] = [];

    lines.forEach((line) => {
        if (line == "recipe") {
            recipes.push([]);
        } else {
            recipes[recipes.length - 1].push(line);
        }
    });

    return recipes;
};
