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
  let consumedTotals = consolidateConsumedItems(consumedIngredients);
  let remainingRequired = subtractFromRequired(consumedTotals,requiredTotalsKH);
  console.log("remainingRequired",remainingRequired);
  return true
});

function getCheckedBoxes(formSubmit){
  let checkedBoxes = []
  for(let entry=0;entry< formSubmit.length;entry++){
  if(formSubmit[entry].checked) {
      checkedBoxes.push(formSubmit[entry].name)
    }
   }
  return checkedBoxes
}

function getItemsFromRecipe(recipeList,recipeName){
  const recipe = recipeList.find(({name}) => name === recipeName)
  return recipe.ingredients; 
}

function consolidateConsumedItems(consumedItems){
  const consolidatedList = {}
  //loop through full list of items and consolidate into unique pairs with qtys summed
  for(let i = 0; i < consumedItems.length; i++){
    let entry = consumedItems[i];
    let name = entry.name;
    let qty = entry.qty;

    //if the item is already in the consolidated list then add the qty
    if(consolidatedList[name]){
      consolidatedList[name] += qty;
    }
    //otherwise add an entry to the consolidated list with the qty on the current entry
    else {
      consolidatedList[name] = qty;
    }
  };
  //transform consolidated list back to array of objects format
  const consolidatedArray = []
  for(const [key, value] of Object.entries(consolidatedList)){
   consolidatedArray.push({"name":key,"qty":value});
  };
  return consolidatedArray;
};

function subtractFromRequired(itemsUsed,requiredTotals){
  const remaining = {}
  //loop through full list of items and consolidate into unique pairs with qtys summed
  for(let i = 0; i < requiredTotals.length; i++){
    let requiredEntry = requiredTotals[i];
    let requiredName = requiredEntry.name;
    let requiredQty = requiredEntry.qty;

    //transform required totals to key value pairs
    remaining[requiredName] = requiredQty;
  };
  
  //loop through full list of items and consolidate into unique pairs with qtys summed
  for(let j = 0; j < itemsUsed.length; j++){
    let itemUsedEntry = itemsUsed[j];
    let itemUsedName = itemUsedEntry.name;
    let itemUsedQty = itemUsedEntry.qty;

    //subtract the used items from the required totals
    remaining[itemUsedName] -= itemUsedQty;  
  };
  
  //transform consolidated list back to array of objects format
  const remainingArray = []
  for(const [key, value] of Object.entries(remaining)){
   remainingArray.push({"name":key,"qty":value});
  };
  return remainingArray;

}

//TODO:continue with logic to get remaining required based on form submit
    //return the remaining required in HTML table
    //tidy up to remove duplicate code

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
