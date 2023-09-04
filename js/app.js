import { requiredTotalsKH } from "./requiredTotalsKH.js";
import { recipeListKH } from "./recipeListKH.js";
import { getCheckedBoxes, getItemsFromRecipe, subtractFromRequired, consolidateConsumedItems } from "./utils.js";

addEventListener("submit", (event) => {
  event.preventDefault();
  let recipeForm = event.target
  let completedRecipes = getCheckedBoxes(recipeForm)
  let consumedIngredients = []
  for(let completedRecipe = 0; completedRecipe < completedRecipes.length; completedRecipe++){
    consumedIngredients.push(...getItemsFromRecipe(recipeListKH,completedRecipes[completedRecipe]))
  }
  let consumedTotals = consolidateConsumedItems(consumedIngredients);
  let remainingRequired = subtractFromRequired(consumedIngredients,requiredTotalsKH);
  console.log("remainingRequired",remainingRequired);

  //return a HTML table of the remaining required
  return true
});

//TODO:continue with logic to get remaining required based on form submit
    //write function to to transform array of objects into HTML table
    //add return of remaining required HTML table to event listener functions
    //tidy up to remove duplicate code between consolidate and subtract functions
    

function generateRecipeFormHTML(recipeArray){
    const formContent = []
    for(let i=0;i<recipeArray.length;i++){ 
       formContent.push(
            `<input type="checkbox" id="${recipeArray[i]["name"]}" name="${recipeArray[i]["name"]}" value="synthed">
              <label for="${recipeArray[i]["name"]}">${recipeArray[i]["name"]}</label><br>
              `
       );
    }
formContent.push(`<input type="submit" value="Submit"></input>`)
return formContent.join("")
};
//TODO: change index.html to dynamically create the table
