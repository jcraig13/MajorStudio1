
//natural chart
// set the dimensions and margins of the graph
var margin2 = {top: 15, right: 20, bottom: 20, left: 20},
width = 720 - margin2.left - margin2.right,
height = 800 - margin2.top - margin2.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#synthetic_chart")
.append("svg")
.attr("width", width + margin2.left + margin2.right)
.attr("height", height + margin2.top + margin2.bottom)
.append("g")
.attr("transform",
      "translate(" + margin2.left + "," + margin2.top + ")");

// Parse the Data
d3.csv("./data/syntheticMaterial.csv", function(data) {

// List of subgroups = header of the csv files
var subgroups = data.columns.slice(1)

// List of groups
var groups = d3.map(data, function(d){return(d.Year)}).keys()

console.log(groups)
console.log(data)
console.log(subgroups)

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
//   svg2.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x).tickSizeOuter(0));


// Add Y axis
var y = d3.scaleLinear()
.domain([0, 1800])
.range([ height, 0 ]);
// svg2.append("g")
// .call(d3.axisLeft(y));

// color palette = one color per subgroup
var color = d3.scaleOrdinal()
.domain(subgroups)
.range(['rgba(82,126,139,1)','rgba(82,126,139,.66)','rgba(82,126,139,.33)'])

//stack the data? --> stack per subgroup
var stackedData = d3.stack()
.keys(subgroups)
(data)

  // Show the bars
  svg2.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Year); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width",x.bandwidth())
})

//rotates the chart 90 degrees to the left
document.querySelector("#synthetic_chart").style.transform = 'rotate(90deg)';
// document.querySelector("#natural_chart").style.position = 'absolute';
// document.querySelector("#natural_chart").style.marginLeft = '0';
document.querySelector("#synthetic_chart").style.float = 'left';
// document.querySelector("#synthetic_chart").style.width = '50%';
document.querySelector("#synthetic_chart").style.paddingBottom = '37px';
