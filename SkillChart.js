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
          labels: ["Java", "Python", "C++", "Sql", "Html/CSS"],
          datasets: [{
              label: 'Skill Level',
              data: [90, 90, 70, 80, 40],
              backgroundColor: [
                  'rgba(128, 205, 50,0.8)',
                  'rgba(89, 205, 50,0.8)',
                  'rgba(50, 205, 50,0.8)',
                  'rgba(50, 205, 89,0.8)',	
                  'rgba(50, 205, 128,0.8)'
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

        scales: {
          xAxes: [{
                      gridLines: {
                          display:false
                      }
                  }],
          yAxes: [{
                      ticks: {
                          suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                          suggestedMax: 100
                        },
            
                      gridLines: {
                          display:false
                      }   
                  }]
        }
    }
  }); //end chart
}


