export const getCheckedBoxes= (formSubmit) =>{
    let checkedBoxes = []
    for(let entry=0;entry< formSubmit.length;entry++){
    if(formSubmit[entry].checked) {
        checkedBoxes.push(formSubmit[entry].name)
      }
     }
    return checkedBoxes
  };
  
export const getItemsFromRecipe = (recipeList,recipeName) => {
    const recipe = recipeList.find(({name}) => name === recipeName)
    return recipe.ingredients; 
  };
  
export const consolidateConsumedItems = (consumedItems) =>{
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
  
export const subtractFromRequired = (itemsUsed,requiredTotals) =>{
    const remaining = {}
    //loop through required items and map to key value pairs
    for(let i = 0; i < requiredTotals.length; i++){
      remaining[requiredTotals[i].name] = requiredTotals[i].qty;
    };
    
    //loop through items used of items and subtract from required totals to get remaining
    for(let j = 0; j < itemsUsed.length; j++){
      remaining[itemsUsed[j].name] -= itemsUsed[j].qty;  
    };
    
    //transform consolidated list back to array of objects format
    const remainingArray = []
    for(const [key, value] of Object.entries(remaining)){
     remainingArray.push({"name":key,"qty":value});
    };
    return remainingArray;
  }


  