// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
// // Step 1: Loop Through `data` and console.log each UFO Sighting object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
// // Step 2:  Use d3 to append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
// // Step 3:  Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
// // Step 4: Use d3 to append 1 cell per UFO Sighting value 
// // (date/time, city, state, country, shape, duration, comment)
        var cell = row.append("td");
// // Step 5: Use d3 to update each cell's text with UFO Sighting values
// // (date/time, city, state, country, shape, duration, comment) 
        cell.text(value);
    });
});

// Refactor to use Arrow Functions!
// data.forEach((ufoSighting) => {
//   var row = tbody.append("tr");
//   Object.entries(ufoSighting).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });



