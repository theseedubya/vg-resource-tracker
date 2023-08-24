/*Result Data*/
/*const dataName = 'required-resources-table'

const form = document.querySelector('resource-form')
const table = document.querySelector(`.resource-required-table`);
const header = document.querySelector(`.resource-required-table-header`);
const body = document.querySelector(`.resource-required-table-body`);

document.addEventListener("DOMContentLoaded", function () {
    //prevent attempt to submit form to server
    console.log("Page Loading")
    //populate tables
    populateTable(header, body, requiredTotals);
    //populateTable(header, body, recipeList);
    console.log("Page Loaded")
})


//Insert data function
function populateTable(tableHeader, tableBody, data) {
    //insert table headers
    tableHeader.innerHTML = '';
    //create a new row
    let tr = document.createElement('tr');
    //set headers to keys in data
    const headers = Object.keys(data[0]);
    //iterate over headers to generate table header
    headers.forEach((key) => {
        let th = document.createElement('th')
        th.innerHTML = key
        tr.appendChild(th);
    })
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
            //add header as a class for CSS
            td.classList.add(key)
            //set table data to current value set in loop
            td.innerHTML = data[i][key]
            //add data to row
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    }
}*/