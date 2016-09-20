var inViewPC = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#interests')) {
        if (inViewPC) { return; }
        inViewPC = true;
        makePieChart();
    } else {
        inViewPC = false;  
    }
});


function makePieChart(){
  var ctx = document.getElementById("interest").getContext("2d");
  var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
          labels: ["Software Development", "Machine Learning", "Data Science", "Systems", "Web Devlopment"],
          datasets: [{
              label: 'Skill Level',
              data: [90, 70, 50, 40, 70],
              backgroundColor: [
                  'rgba(128, 205, 50,0.8)',
                  'rgba(89, 205, 50,0.8)',
                  'rgba(50, 205, 50,0.8)',
                  'rgba(50, 205, 89,0.8)',	
                  'rgba(50, 205, 128,0.8)'
              ]
              /*
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
              ],
              */
          }]
      },
    options:{
          //responsive: true,
            // Boolean - whether to maintain the starting aspect ratio or not when responsive, 
            //if set to false, will take up entire container
          //maintainAspectRatio: true,
    } //end options
  }); //end chart

}


  
