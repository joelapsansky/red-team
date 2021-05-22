function init() {

    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.csv("https://raw.githubusercontent.com/joelapsansky/red-team/main/Excel%20%26%20CSV/reshaped_full_cleaned_dataset.csv", function(data) {

      var stats = Object.keys(data[0]).splice(1,22)
      
      stats.forEach((stat) => {
        selector
          .append("option")
          .text(stat)
          .property("value", stat);
      });

      // Use the first sample from the list to build the initial plots
      var firststat = "SG_approach_green_AVERAGE";
      buildCharts(firststat);
    });
};

// Initialize the dashboard
init();

function optionChanged(newSample) {

  // Fetch new data each time a new sample is selected
  // buildMetadata(newSample);
  buildCharts(newSample);
  
};
   
// Create the buildChart function.
function buildCharts(golfstat) {

  // Use d3.json to load the samples.json file 
  d3.csv("https://raw.githubusercontent.com/joelapsansky/red-team/main/Excel%20%26%20CSV/reshaped_full_cleaned_dataset.csv", function(data) {
    console.log(data);

    // Filter 5 years
    var data2017 = data.filter(golfdata => golfdata["Year"]==2017)

    var data2018 = data.filter(golfdata => golfdata["Year"]==2018)

    var data2019 = data.filter(golfdata => golfdata["Year"]==2019)

    var data2020 = data.filter(golfdata => golfdata["Year"]==2020)

    var data2021 = data.filter(golfdata => golfdata["Year"]==2021)

    // New x, y, and player name variables for trace
    var yvalues2017 = data2017.map(golfdata => golfdata["money_MONEY"])

    var xvalues2017 = data2017.map(golfdata => golfdata[golfstat])

    var playername2017 = data2017.map(golfdata => golfdata["PLAYER NAME"])

    var yvalues2018 = data2018.map(golfdata => golfdata["money_MONEY"])

    var xvalues2018 = data2018.map(golfdata => golfdata[golfstat])

    var playername2018 = data2018.map(golfdata => golfdata["PLAYER NAME"])

    var yvalues2019 = data2019.map(golfdata => golfdata["money_MONEY"])

    var xvalues2019 = data2019.map(golfdata => golfdata[golfstat])

    var playername2019 = data2019.map(golfdata => golfdata["PLAYER NAME"])

    var yvalues2020 = data2020.map(golfdata => golfdata["money_MONEY"])

    var xvalues2020 = data2020.map(golfdata => golfdata[golfstat])

    var playername2020 = data2020.map(golfdata => golfdata["PLAYER NAME"])

    var yvalues2021 = data2021.map(golfdata => golfdata["money_MONEY"])

    var xvalues2021 = data2021.map(golfdata => golfdata[golfstat])

    var playername2021 = data2021.map(golfdata => golfdata["PLAYER NAME"])

    // Make 5 traces
    var trace2021 = {
      x: xvalues2021,
      y: yvalues2021,
      mode: 'markers',
      type: 'scatter',
      text: playername2021,
      name: "2021"
    };

    var trace2020 = {
      x: xvalues2020,
      y: yvalues2020,
      mode: 'markers',
      type: 'scatter',
      text: playername2020,
      name: "2020"
    };

    var trace2019 = {
      x: xvalues2019,
      y: yvalues2019,
      mode: 'markers',
      type: 'scatter',
      text: playername2019,
      name: "2019"
    };

    var trace2018 = {
      x: xvalues2018,
      y: yvalues2018,
      mode: 'markers',
      type: 'scatter',
      text: playername2018,
      name: "2018"
    };
    
    var trace2017 = {
      x: xvalues2017,
      y: yvalues2017,
      mode: 'markers',
      type: 'scatter',
      text: playername2017,
      name: "2017"
    };
    
    // Define legend (and filters) for scatter plot
    var scatterData = [trace2021, trace2020, trace2019, trace2018, trace2017];

    // Define layout
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
};