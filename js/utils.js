//TODO:
  //tidy up to remove duplicate code between consolidate and subtract functions
  //add logic for recipes with dark matter to correctly subtract 

export const getCheckedBoxes = (formSubmit) => {
  let checkedBoxes = []
  for (let entry = 0; entry < formSubmit.length; entry++) {
    if (formSubmit[entry].checked) {
      checkedBoxes.push(formSubmit[entry].name)
    }
  }
  return checkedBoxes
};

export const getItemsFromRecipe = (recipeList, recipeName) => {
  const recipe = recipeList.find(({ name }) => name === recipeName)
  return recipe.ingredients;
};

export const consolidateConsumedItems = (consumedItems) => {
  const consolidatedList = {}
  //loop through full list of items and consolidate into unique pairs with qtys summed
  for (let i = 0; i < consumedItems.length; i++) {
    let entry = consumedItems[i];
    let name = entry.name;
    let qty = entry.qty;

    //if the item is already in the consolidated list then add the qty
    if (consolidatedList[name]) {
      consolidatedList[name] += qty;
    }
    //otherwise add an entry to the consolidated list with the qty on the current entry
    else {
      consolidatedList[name] = qty;
    }
  };
  //transform consolidated list back to array of objects format
  const consolidatedArray = []
  for (const [key, value] of Object.entries(consolidatedList)) {
    consolidatedArray.push({ "name": key, "qty": value });
  };
  return consolidatedArray;
};

export const subtractFromRequired = (itemsUsed, requiredTotals) => {
  const remaining = {}
  //loop through required items and map to key value pairs
  for (let i = 0; i < requiredTotals.length; i++) {
    remaining[requiredTotals[i].name] = requiredTotals[i].qty;
  };

  //loop through items used of items and subtract from required totals to get remaining
  for (let j = 0; j < itemsUsed.length; j++) {
    remaining[itemsUsed[j].name] -= itemsUsed[j].qty;
  };

  //transform consolidated list back to array of objects format
  const remainingArray = []
  for (const [key, value] of Object.entries(remaining)) {
    remainingArray.push({ "name": key, "qty": value });
  };
  return remainingArray;
}

//Insert data function
export const populateTable = (table, data) => {
  //clear placeholder data
  table.innerHTML = '';
  //Create header row
  let tr = document.createElement('tr');
  let headers = ["Ingredient&#160;Name","Qty&#160;Remaining"]
  headers.forEach((key) => {
    let th = document.createElement('th')
    th.innerHTML = key
    tr.appendChild(th);
  })
  table.appendChild(tr);
  //set headers to keys in data to allow iteration to generate rows
  headers = Object.keys(data[0]);
  //insert data into table body
  for (let i = 0; i < data.length; i++) {
    //create a new row
    tr = document.createElement('tr');
    //iterate over data
    headers.forEach((key) => {
      //create table data inside of row
      let td = document.createElement('td');
      //add header as a class for CSS
      td.classList.add(key)
      //set table data to current value set in loop
      td.innerHTML = data[i][key]
      //add data to row
      tr.appendChild(td);
    });
    table.appendChild(tr);
  }
}
