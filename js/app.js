import { requiredTotalsKH } from "./requiredTotalsKH.js"
import { recipeListKH } from "./recipeListKH.js"

addEventListener("submit", (event) => {
  event.preventDefault();
  let recipeForm = event.target
  let completedRecipes = getCheckedBoxes(recipeForm)
  let consumedIngredients = []
  for(let completedRecipe = 0; completedRecipe < completedRecipes.length; completedRecipe++){
    consumedIngredients.push(...getItemsFromRecipe(recipeListKH,completedRecipes[completedRecipe]))
  }
  console.log(consumedIngredients)
});

function getCheckedBoxes(formSubmit){
  let synthed = []
  for(let entry=0;entry< formSubmit.length;entry++){
  if(formSubmit[entry].checked) {
      synthed.push(formSubmit[entry].name)
    }
   }
  return synthed
}

function getItemsFromRecipe(recipeList,recipeName){
  const recipe = recipeList.find(({name}) => name ===recipeName)
  return recipe.ingredients; 
}

//TODO:continue with logic to get remaining required based on form submit
    //get all ingredients already used -- including that logic for dark matter or something
    //subtract used ingredients from required totals
    //return the remaining required in HTML table

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
