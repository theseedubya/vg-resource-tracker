import { requiredTotalsKH } from "./requiredTotalsKH.js";
import { recipeListKH } from "./recipeListKH.js";
import { getCheckedBoxes, getItemsFromRecipe, subtractFromRequired, consolidateConsumedItems, populateTable } from "./utils.js";

addEventListener("submit", (event) => {
  event.preventDefault();
  
  //extract form data
  let recipeForm = event.target
  let completedRecipes = getCheckedBoxes(recipeForm)
  
  //get ingredients from recipes
  let consumedIngredients = []
  for (let completedRecipe = 0; completedRecipe < completedRecipes.length; completedRecipe++) {
    consumedIngredients.push(...getItemsFromRecipe(recipeListKH, completedRecipes[completedRecipe]))
  }

  //calculate remaining items required
  //let consumedTotals = consolidateConsumedItems(consumedIngredients);
  let remainingRequired = subtractFromRequired(consumedIngredients, requiredTotalsKH);
  console.log("remainingRequired", remainingRequired);

  //generate html for remaining table
  const remainingTable = document.querySelector(".remaining-table");
  populateTable(remainingTable, remainingRequired);

  //return a HTML table of the remaining required
  return true
});

//TODO: change index.html to dynamically create the form
function generateRecipeFormHTML(recipeArray) {
  const formContent = []
  for (let i = 0; i < recipeArray.length; i++) {
    formContent.push(
      `<input type="checkbox" id="${recipeArray[i]["name"]}" name="${recipeArray[i]["name"]}" value="synthed">
              <label for="${recipeArray[i]["name"]}">${recipeArray[i]["name"]}</label><br>
              `
    );
  }
  formContent.push(`<input type="submit" value="Submit"></input>`)
  return formContent.join("")
};

