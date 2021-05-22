function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.csv("https://raw.githubusercontent.com/joelapsansky/red-team/main/Excel%20%26%20CSV/reshaped_full_cleaned_dataset.csv", function(data) {

      stats = Object.keys(data[0])
      stats.pop()
  
      stats.forEach((stat) => {
        selector
          .append("option")
          .text(stat)
          .property("value", stat);
      });

      // Use the first sample from the list to build the initial plots
      var firststat = "SG_approach_green_AVERAGE";
      buildCharts(firststat);

      // var firstyear = "2021";
      // buildCharts(firstyear);
    });
}
  // Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  // buildMetadata(newSample);
  buildCharts(newSample);
  
}
  
  // Demographics Panel 
  // function buildMetadata(sample) {
  //   d3.json("samples.json").then((data) => {
  //     var metadata = data.metadata;
  //     // Filter the data for the object with the desired sample number
  //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
  //     var result = resultArray[0];

  //     // Use d3 to select the panel with id of `#sample-metadata`
  //     var PANEL = d3.select("#sample-metadata");
  
  //     // Use `.html("") to clear any existing metadata
  //     PANEL.html("");
  
  //     // Use `Object.entries` to add each key and value pair to the panel
  //     // Hint: Inside the loop, you will need to use d3 to append new
  //     // tags for each key-value in the metadata.
  //     Object.entries(result).forEach(([key, value]) => {
  //       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
  //     });
  
  //   });
  // }
  
// Create the buildChart function.
function buildCharts(golfstat) {
  // Use d3.json to load the samples.json file 
  d3.csv("https://raw.githubusercontent.com/joelapsansky/red-team/main/Excel%20%26%20CSV/reshaped_full_cleaned_dataset.csv", function(data) {
    console.log(data);

    var data2017 = data.filter(golfdata => golfdata["Year"]==2017)

    var data2018 = data.filter(golfdata => golfdata["Year"]==2018)

    var data2019 = data.filter(golfdata => golfdata["Year"]==2019)

    var data2020 = data.filter(golfdata => golfdata["Year"]==2020)

    var data2021 = data.filter(golfdata => golfdata["Year"]==2021)
    
    var yvalues2017 = data2017.map(golfdata => golfdata["money_MONEY"])

    var xvalues2017 = data2017.map(golfdata => golfdata[golfstat])

    var playername2017 = data2017.map(golfdata => golfdata["PLAYER NAME"])

    var yvalues2018 = data2018.map(golfdata => golfdata["money_MONEY"])

    var xvalues2018 = data2018.map(golfdata => golfdata[golfstat])

    var playername2018 = data2018.map(golfdata => golfdata["PLAYER NAME"])

    var yvalues2019 = data2019.map(golfdata => golfdata["money_MONEY"])

    var xvalues2019 = data2019.map(golfdata => golfdata[golfstat])

    var playername2019 = data2019.map(golfdata => golfdata["PLAYER NAME"])


    var trace1 = {
      x: xvalues2018,
      y: yvalues2018,
      mode: 'markers',
      type: 'scatter',
      text: playername2018,
      name: "2018"
    };

    var trace2 = {
      x: xvalues2017,
      y: yvalues2017,
      mode: 'markers',
      type: 'scatter',
      text: playername2017,
      name: "2017"
    };
    
    var scatterData = [trace1, trace2];

    var layout = {
      xaxis: {title: golfstat},
      yaxis: {title: "Annual Winnings (millions $)"},
      title:'Relationship between Performance Stat and Winnings',
      legend: {
        y: 0.5,
        yref: 'paper',
        font: {
          family: 'Arial, sans-serif',
          size: 20,
          color: 'grey',
        }
    }
    };

    // Use Plotly to plot the data with the layout. 
    Plotly.newPlot("scatter",scatterData, layout);
  });
}