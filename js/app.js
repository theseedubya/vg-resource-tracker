const requiredTotals = [
    { 'name': "Lucid Shard", 'total': 35 },
    { 'name': "Lucid Gem", 'total': 13 },
    { 'name': "Lucid Crystal", 'total': 9 },
    { 'name': "Power Shard", 'total': 13 },
    { 'name': "Power Gem", 'total': 11 },
    { 'name': "Power Crystal", 'total': 7 },
    { 'name': "Bright Shard", 'total': 13 },
    { 'name': "Bright Gem", 'total': 8 },
    { 'name': "Bright Crystal", 'total': 4 },
    { 'name': "Spirit Shard", 'total': 13 },
    { 'name': "Spirit Gem", 'total': 7 },
    { 'name': "Shiny Crystal", 'total': 3 },
    { 'name': "Blaze Shard", 'total': 12 },
    { 'name': "Blaze Gem", 'total': 10 },
    { 'name': "Frost Shard", 'total': 10 },
    { 'name': "Frost Gem", 'total': 10 },
    { 'name': "Thunder Shard", 'total': 12 },
    { 'name': "Thunder Gem", 'total': 15 },
    { 'name': "Mythril Shard", 'total': 12 },
    { 'name': "Mythril", 'total': 13 },
    { 'name': "Mystery Goo", 'total': 14 },
    { 'name': "Gale", 'total': 6 },
    { 'name': "Orichalcum", 'total': 19 },
    { 'name': "Stormy Stone", 'total': 4 },
    { 'name': "Fury Stone", 'total': 5 },
    { 'name': "Power Stone", 'total': 5 },
    { 'name': "Lightning Stone", 'total': 5 },
    { 'name': "Energy Stone", 'total': 6 },
    { 'name': "Dazzling Stone", 'total': 6 },
    { 'name': "Blazing Stone", 'total': 7 },
    { 'name': "Frost Stone", 'total': 7 },
    { 'name': "Mythril Stone", 'total': 8 },
    { 'name': "Serenity Power", 'total': 7 },
    { 'name': "Dark Matter", 'total': 14 },
]

const recipeList = [
    {
        "name": "Mega Potion",
        "ingredients": [
            {
                "name": "Spirit Shard",
                "qty": 1
            },
            {
                "name": "Power Shard",
                "qty": 1
            },
            {
                "name": "Mythril Shard",
                "qty": 1
            },
        ],
        "group": 1,
        "description": "Restore 30HP for all party members"
    },
    {
        "name": "Cottage",
        "ingredients": [
            {
                "name": "Lucid Shard",
                "qty": 1
            },
            {
                "name": "Bright Shard",
                "qty": 1
            }
        ],
        "group": 1,
        "description": "Restores all HP and MP for entire party"
    },
    {
        "name": "Energy Bangle",
        "ingredients": [
            {
                "name": "Spirit Shard",
                "qty": 1
            },
            {
                "name": "Bright Shard",
                "qty": 2
            }
        ],
        "group": 1,
        "description": ""
    },
    {
        "name": "Power Chain",
        "ingredients": [
            {
                "name": "Power Shard",
                "qty": 2
            },
            {
                "name": "Lucid Shard",
                "qty": 1
            }
        ],
        "group": 1,
        "description": ""
    },
    {
        "name": "Magic Armlet",
        "ingredients": [
            {
                "name": "Blaze Shard",
                "qty": 3
            },
            {
                "name": "Frost Shard",
                "qty": 3
            },
            {
                "name": "Thunder Shard",
                "qty": 3
            }
        ],
        "group": 1,
        "description": "Increase MP by 1"
    },
    {
        "name": "EXP Earring",
        "ingredients": [
            {
                "name": "Fury Stone",
                "qty": 1
            },
            {
                "name": "Power Stone",
                "qty": 1
            },
            {
                "name": "Mythril Stone",
                "qty": 1
            },
            {
                "name": "Serenity Power",
                "qty": 3
            },
            {
                "name": "Dark Matter",
                "qty": 3
            }
        ],
        "group": 1,
        "description": "Increase MP by 1 and EXP Gain by 20%"
    },
    {
        "name": "Mega Ether",
        "ingredients": [
            {
                "name": "Frost Shard",
                "qty": 1
            },
            {
                "name": "Blaze Shard",
                "qty": 1
            },
            {
                "name": "Thunder Shard",
                "qty": 1
            },
            {
                "name": "Mythril",
                "qty": 2
            }

        ],
        "group": 2,
        "description": "Restore 3MP for entire party"
    },
    {
        "name": "Guard Earring",
        "ingredients": [
            {
                "name": "Bright Shard",
                "qty": 3
            },
            {
                "name": "Frost Shard",
                "qty": 1
            },
            {
                "name": "Mythril Shard",
                "qty": 3
            }
        ],
        "group": 2,
        "description": ""
    },
    {
        "name": "Angel Bangle",
        "ingredients": [
            {
                "name": "Thunder Shard",
                "qty": 3
            },
            {
                "name": "Bright Gem",
                "qty": 1
            }
        ],
        "group": 2,
        "description": ""
    },
    {
        "name": "Golem Chain",
        "ingredients": [
            {
                "name": "Blaze Shard",
                "qty": 3
            },
            {
                "name": "Spirit Gem",
                "qty": 1
            }
        ],
        "group": 2,
        "description": ""
    },
    {
        "name": "Rune Armlet",
        "ingredients": [
            {
                "name": "Blaze Gem",
                "qty": 3
            },
            {
                "name": "Frost Gem",
                "qty": 3
            },
            {
                "name": "Thunder Gem",
                "qty": 3
            }
        ],
        "group": 2,
        "description": ""
    },
    {
        "name": "Moogle Badge",
        "ingredients": [
            {
                "name": "Blazing Stone",
                "qty": 1
            },
            {
                "name": "Frost Stone",
                "qty": 1
            },
            {
                "name": "Lightning Stone",
                "qty": 1
            },
            {
                "name": "Mythril",
                "qty": 5
            },
            {
                "name": "Orichalcum",
                "qty": 3
            }
        ],
        "group": 2,
        "description": ""
    },
    {
        "name": "AP Up",
        "ingredients": [
            {
                "name": "Blaze Gem",
                "qty": 2
            },
            {
                "name": "Frost Gem",
                "qty": 2
            },
            {
                "name": "Thunder Gem",
                "qty": 2
            },
            {
                "name": "Mythril",
                "qty": 4
            }
        ],
        "group": 3,
        "description": "Permanently increase AP by 1"
    },
    {
        "name": "Dark Ring",
        "ingredients": [
            {
                "name": "Lucid Gem",
                "qty": 2
            },
            {
                "name": "Bright Gem",
                "qty": 2
            }
        ],
        "group": 3,
        "description": ""
    },
    {
        "name": "Master Earring",
        "ingredients": [
            {
                "name": "Spirit Shard",
                "qty": 5
            },
            {
                "name": "Spirit Gem",
                "qty": 3
            },
            {
                "name": "Fury Stone",
                "qty": 1
            }
        ],
        "group": 3,
        "description": ""
    },
    {
        "name": "Gaia Bangle",
        "ingredients": [
            {
                "name": "Lucid Shard",
                "qty": 5
            },
            {
                "name": "Lucid Gem",
                "qty": 3
            },
            {
                "name": "Lightning Stone",
                "qty": 1
            }
        ],
        "group": 3,
        "description": ""
    },
    {
        "name": "Titan Chain",
        "ingredients": [
            {
                "name": "Power Shard",
                "qty": 5
            },
            {
                "name": "Lucid Gem",
                "qty": 3
            },
            {
                "name": "Lightning Stone",
                "qty": 1
            }
        ],
        "group": 3,
        "description": ""
    },
    {
        "name": "Mythril",
        "ingredients": [
            {
                "name": "Mythril Shard",
                "qty": 5
            },
            {
                "name": "Mythril Stone",
                "qty": 1
            },
            {
                "name": "Mystery Goo",
                "qty": 1
            }
        ],
        "group": 3,
        "description": "Rare material used in synthesis"
    },
    {
        "name": "Elixir",
        "ingredients": [
            {
                "name": "Power Shard",
                "qty": 1
            },
            {
                "name": "Shiny Crystal",
                "qty": 1
            },
            {
                "name": "Bright Crystal",
                "qty": 2
            },
            {
                "name": "Orichalcum",
                "qty": 3
            }
        ],
        "group": 4,
        "description": "Restore all HP and MP"
    },
    {
        "name": "Defense Up",
        "ingredients": [
            {
                "name": "Lucid Shard",
                "qty": 3
            },
            {
                "name": "Bright Shard",
                "qty": 3
            },
            {
                "name": "Bright Gem",
                "qty": 2
            },
            {
                "name": "Power Crystal",
                "qty": 1
            },
            {
                "name": "Orichalcum",
                "qty": 5
            }
        ],
        "group": 4,
        "description": "Permanently increase Defense by 1"
    },
    {
        "name": "Heartguard",
        "ingredients": [
            {
                "name": "Lucid Gem",
                "qty": 3
            },
            {
                "name": "Lucid Crystal",
                "qty": 1
            },
            {
                "name": "Bright Crystal",
                "qty": 1
            }
        ],
        "group": 4,
        "description": ""
    },
    {
        "name": "Three Stars",
        "ingredients": [
            {
                "name": "Power Gem",
                "qty": 1
            },
            {
                "name": "Mystery Goo",
                "qty": 3
            },
            {
                "name": "Shiny Crystal",
                "qty": 1
            }
        ],
        "group": 4,
        "description": ""
    },
    {
        "name": "Altas Armlet",
        "ingredients": [
            {
                "name": "Blaze Shard",
                "qty": 5
            },
            {
                "name": "Frost Shard",
                "qty": 5
            },
            {
                "name": "Thunder Shard",
                "qty": 5
            },
            {
                "name": "Mystery Goo",
                "qty": 1
            },
            {
                "name": "Dark Matter",
                "qty": 3
            }
        ],
        "group": 4,
        "description": ""
    },
    {
        "name": "Crystal Crown",
        "ingredients": [
            {
                "name": "Lucid Crystal",
                "qty": 5
            },
            {
                "name": "Power Crystal",
                "qty": 1
            },
            {
                "name": "Shiny Crystal",
                "qty": 1
            },
            {
                "name": "Blazing Stone",
                "qty": 3
            },
            {
                "name": "Frost Stone",
                "qty": 3
            }
        ],
        "group": 4,
        "description": ""
    },
    {
        "name": "Dark Matter",
        "ingredients": [
            {
                "name": "Lucid Shard",
                "qty": 9
            },
            {
                "name": "Gale",
                "qty": 1
            },
            {
                "name": "Mythril",
                "qty": 2
            }
        ],
        "group": 5,
        "description": "Rare material used in synthesis"
    },
    {
        "name": "Megalixer",
        "ingredients": [
            {
                "name": "Lucid Gem",
                "qty": 5
            },
            {
                "name": "Lucid Crystal",
                "qty": 3
            },
            {
                "name": "Gale",
                "qty": 2
            },
            {
                "name": "Dark Matter",
                "qty": 1
            }
        ],
        "group": 5,
        "description": "Restores all HP and MP for entire party"
    },
    {
        "name": "Power Up",
        "ingredients": [
            {
                "name": "Spirit Shard",
                "qty": 5
            },
            {
                "name": "Spirit Gem",
                "qty": 3
            },
            {
                "name": "Power Shard",
                "qty": 5
            },
            {
                "name": "Power Gem",
                "qty": 3
            },
            {
                "name": "Dark Matter",
                "qty": 1
            }
        ],
        "group": 5,
        "description": "Permanently increase Strength by 1"
    },
    {
        "name": "Cosmic Arts",
        "ingredients": [
            {
                "name": "Bright Shard",
                "qty": 5
            },
            {
                "name": "Bright Gem",
                "qty": 3
            },
            {
                "name": "Bright Crystal",
                "qty": 1
            },
            {
                "name": "Mythril Stone",
                "qty": 3
            }
        ],
        "group": 5,
        "description": ""
    },
    {
        "name": "EXP Bracelet",
        "ingredients": [
            {
                "name": "Energy Stone",
                "qty": 1
            },
            {
                "name": "Dazzling Stone",
                "qty": 1
            },
            {
                "name": "Stormy Stone",
                "qty": 1
            },
            {
                "name": "Orichalcum",
                "qty": 8
            },
            {
                "name": "Dark Matter",
                "qty": 3
            }
        ],
        "group": 5,
        "description": "Increase EXP Gain by 30%. Reduce Strength by 2. Reduce Defense by 2"
    },
    {
        "name": "Ribbon",
        "ingredients": [
            {
                "name": "Blaze Gem",
                "qty": 5
            },
            {
                "name": "Frost Gem",
                "qty": 5
            },
            {
                "name": "Thunder Gem",
                "qty": 5
            },
            {
                "name": "Gale",
                "qty": 1
            },
            {
                "name": "Serenity Power",
                "qty": 3
            }
        ],
        "group": 5,
        "description": ""
    },
    {
        "name": "Fantasista",
        "ingredients": [
            {
                "name": "Fury Stone",
                "qty": 3
            },
            {
                "name": "Power Stone",
                "qty": 3
            },
            {
                "name": "Mythril Stone",
                "qty": 3
            },
            {
                "name": "Energy Stone",
                "qty": 5
            }
        ],
        "group": 6,
        "description": ""
    },
    {
        "name": "Seven Elements",
        "ingredients": [
            {
                "name": "Blazing Stone",
                "qty": 3
            },
            {
                "name": "Frost Stone",
                "qty": 3
            },
            {
                "name": "Lightning Stone",
                "qty": 3
            },
            {
                "name": "Dazzling Stone",
                "qty": 5
            }
        ],
        "group": 6,
        "description": ""
    },
    {
        "name": "Ultima Weapon",
        "ingredients": [
            {
                "name": "Thunder Gem",
                "qty": 5
            },
            {
                "name": "Mystery Goo",
                "qty": 5
            },
            {
                "name": "Serenity Power",
                "qty": 3
            },
            {
                "name": "Stormy Stone",
                "qty": 3
            },
            {
                "name": "Dark Matter",
                "qty": 3
            }
        ],
        "group": 6,
        "description": ""
    }
]
/*Result Data*/
const resourcesName = 'resource-required-table'
const recipeName = 'recipes-table'

const resourcesHeader = document.querySelector(`.${resourcesName}-header`);
const resourcesBody = document.querySelector(`.${resourcesName}-body`);
const resourcesForm = document.querySelector(`.resources-gathered`);

const recipeHeader = document.querySelector(`.${recipeName}-header`);
const recipeBody = document.querySelector(`.${recipeName}-body`);
const recipeForm = document.querySelector(`.recipes-crafted`);

document.addEventListener("DOMContentLoaded", function () {
    //prevent attempt to submit form to server
    console.log("Page Loading")
    //populate tables
    populateTable(resourcesHeader, resourcesBody, requiredTotals);
    populateTable(recipeHeader, recipeBody, recipeList);
    // generate forms
    populateForm(requiredTotals, resourcesForm, 'number');
    populateForm(recipeList, recipeForm, 'checkbox')
    console.log("Page Loaded")
})


//Insert data function
function populateTable(tableHeader, tableBody, data) {
    //insert table headers
    tableHeader.innerHTML = '';
    //create a new row
    let tr = document.createElement('tr');
    //set headers to keys in first object in data
    const headers = Object.keys(data[0]);
    //iterate over property names to generate table header
    headers.forEach((key) => {
        let th = document.createElement('th')
        th.innerHTML = key
        tr.appendChild(th);
    })
    //insert the created row as the table header
    tableHeader.appendChild(tr);

    //insert data into table body
    tableBody.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        //create a new row
        tr = document.createElement('tr');
        //iterate over data
        headers.forEach((key) => {
            //create table data inside of row
            let td = document.createElement('td');
            //if the value is an object, loop through and create sub-table
            if (typeof data[i][key] === 'object') {
                let subTable = document.createElement('table');
                let subTableHeader = document.createElement('thead');
                let subTableBody = document.createElement('tbody');

                //generate the headers by looping through object property names
                let subTableHeaders = Object.keys(data[i][key][0]);

                //create the sub-table header row
                let subTableHeaderRow = document.createElement('tr');
                subTableHeaders.forEach((subTableHeaderKey) => {
                    let subTableHeaderCell = document.createElement('th');
                    subTableHeaderCell.innerHTML = subTableHeaderKey;
                    subTableHeaderRow.appendChild(subTableHeaderCell);
                });
                //insert the created row as the sub-table header
                subTableHeader.appendChild(subTableHeaderRow);

                //insert sub-table data
                for (let j = 0; j < data[i][key].length; j++) {
                    let subTableRow = document.createElement('tr');
                    subTableHeaders.forEach((subTableHeaderKey) => {
                        let subTableDataCell = document.createElement('td');
                        subTableDataCell.innerHTML = data[i][key][j][subTableHeaderKey];
                        subTableRow.appendChild(subTableDataCell);
                    });
                    subTableBody.appendChild(subTableRow);
                }
                subTable.appendChild(subTableHeader);
                subTable.appendChild(subTableBody);
                td.appendChild(subTable);
            } else {
                //set table data to current value set in loop
                td.innerHTML = data[i][key];
            }
            //add data to row
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    }
}



function populateForm(data, formName, entryType) {
    //const form = document.createElement('form')    
    //loop through data to dynamically generate the form
    data.forEach((material) => {

        //create field label of form
        const label = document.createElement('label');
        label.innerText = material.name;

        //create input of form
        const input = document.createElement('input');
        input.setAttribute('type', entryType);
        input.setAttribute('label', material.name);
        if (entryType == 'number') {
            input.setAttribute('min', '0');
        }
        //append each to the form
        formName.appendChild(label);
        formName.appendChild(input);
    });

    //formName.appendChild(formName);

}
