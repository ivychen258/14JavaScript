// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;
// Select tbody 
tbody = d3.select("tbody")
// Using Object.entries to get key and value inside the table
// Loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)  
    })
})}
displayData(tableData)


//Select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// Filter data with date that the user input
function clickSelect(){
    d3.event.preventDefault();
    //Print the value that was input
    console.log(dateInputText.property("value"));
    //Create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //Display the new table
    displayData(new_table);
}


// Event listener to handle change and click
dateInputText.on("change", clickSelect)
