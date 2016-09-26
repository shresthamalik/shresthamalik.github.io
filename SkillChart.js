// Wait for the DOM to load everything, just to be safe
var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#skills')) {
        if (inView) { return; }
        inView = true;
        makeChart();
    } else {
        inView = false;  
    }
});

$(window).scroll(function() {
    if (isScrolledIntoView('#interests')) {
        if (inView) { return; }
        inView = true;
        makePieChart();
    } else {
        inView = false;  
    }
});



function makeChart(){
  var ctx = document.getElementById("skill").getContext("2d");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Java", "Python", "Matlab", "Sql","C/C++","Html/CSS",
          "JavaScript","Bootsrap","Angular JS", "jQuery","PySpark","Keras"],
          datasets: [{
              //label: 'Skill Level',
              data: [90, 90, 60, 60, 60, 60, 60, 60, 30, 30, 60, 60],
              backgroundColor: [
                  '#FFA500',
                  '#DDA0DD',
                  '#DB7093',
                  '#FF6347',	
                  '#EE82EE',
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  '#48D1CC',
                  '#8FBC8F'
                  
              ],
              /*
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
              ],
              */
              borderWidth: 1
          }]
      },
      
      options:{
          responsive: true,
            // Boolean - whether to maintain the starting aspect ratio or not when responsive, 
            //if set to false, will take up entire container
          maintainAspectRatio: true,
        legend: {
                display: false
            },
        scales: {
          xAxes: [{
                      ticks:{
                        fontColor:'#663399',
                        fontFamily:'Monospace',
                        fontStyle:'Bold',
                      },
                      
                      gridLines: {
                        display:false
                      }
                  }],
          yAxes: [{ 
                      
                      ticks: {
                        fontColor:['#DB7093'],
                        fontFamily:'Monospace',
                        fontStyle:'Bold',
                        fontSize: 14,
                        min: 0,    // minimum will be 0, unless there is a lower value.
                        max: 90,
                        stepSize: 30,
                        beginAtZero: true,
                        //maxTicksLimit:5,
                        callback: function(value, index, values){
                          if(value>=90)    
                            return 'Proficient';
                          else if(value>=60)    
                            return 'Intermediate';
                          else if(value>=30)    
                            return 'Beginner';
                          else
                            return 'Just picked';
                        } 
                        
                      },
            
                      gridLines: {
                          display:false
                      }
                        
                  }]
        }
    }
  }); //end chart
}


