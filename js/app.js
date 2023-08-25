import { requiredTotalsKH } from "./requiredTotalsKH.js"
import { recipeListKH } from "./recipeListKH.js"

addEventListener("submit", (event) => {
  event.preventDefault();
  let recipeForm = event.target
  let completedRecipes = getCheckedBoxes(recipeForm)
  console.log("completedRecipes: ",completedRecipes)
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

//console.log(generateRecipeFormHTML(recipeListKH));
//const recipe1 = (getItemsFromRecipe(requiredTotalsKH,recipeListKH,"Mega Potion"))
// const recipe2 = (getItemsFromRecipe(requiredTotalsKH,recipeListKH,"AP Up"))
// console.log([...recipe1,...recipe2])
