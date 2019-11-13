/*copyright notice automatically updated to the current year*/

$(document).ready(function () {
  var a = (new Date().getFullYear()>2010) ? new Date().getFullYear() : "2010"
  $("div.copyright").html("&copy; "+ a + " Jeremy Lanssiers");
});

/*change tracks*/

$(document).ready(function () {

  /*set track content*/

  var track1Quotes = ["gaga","red-hot","wacky","rabid","keen"];
  var track2Quotes = ["wannabe paperback writer","homo journalisticus","pencil-handler","tinker","walking philosopher","fox on the run"];
  var track3Quotes = ["with fruity","with cool","with hip","with fresh","with askew", "with wild"];
  var track4Quotes = ["ideas","opinions","theories","views","suspicions"];

  /*init counter*/

  var m1 = 0;
  var m2 = 0;
  var m3 = 0;
  var m4 = 0;

  /*set default content*/

  document.getElementById("1").innerHTML=(track1Quotes[m1]);
  document.getElementById("2").innerHTML=(track2Quotes[m1]);
  document.getElementById("3").innerHTML=(track3Quotes[m1]);
  document.getElementById("4").innerHTML=(track4Quotes[m1]);

  /*set track change frequency*/

  setInterval(changeTrack1, 5500);
  setInterval(changeTrack2, 2000);
  setInterval(changeTrack3, 6500);
  setInterval(changeTrack4, 4500);

  /*change track content*/

  function changeTrack1(){
      document.getElementById("1").innerHTML=(track1Quotes[m1]);
      if(m1 == 4)
          m1 = 0;
      else
          m1++;
  };

  function changeTrack2(){
      document.getElementById("2").innerHTML=(track2Quotes[m2]);
      if(m2 == 4)
          m2 = 0;
      else
          m2++;
  };

  function changeTrack3(){
      document.getElementById("3").innerHTML=(track3Quotes[m3]);
      if(m3 == 4)
          m3 = 0;
      else
          m3++;
  };

  function changeTrack4(){
      document.getElementById("4").innerHTML=(track4Quotes[m4]);
      if(m4 == 4)
          m4 = 0;
      else
          m4++;
  };
});

/*move the great annoyer*/

function annoyMe(){
  var annoyer = document.getElementById('grrrrr');

  if (annoyer.className === "topLeft") {
        annoyer.className = "topRight";
        return 
    }
  if (annoyer.className === "topRight") {
        annoyer.className = "bottomRight";
        return
    }
  if (annoyer.className === "bottomRight") {
        annoyer.className = "bottomLeft";
        return
    }
  if (annoyer.className === "bottomLeft") {
        annoyer.className = "topLeft";
    } else {
        annoyer.className = "topRight";
        return
    }
};

/*animations*/

$(document).ready(function () {
  var titles = document.querySelectorAll("h1, .mark, fadein");
  var h = 1;
  for(var k = 0; k < titles.length; k++){
    titles[k].id = "animationId" + h;
    h++;
  }
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + ($(window).height())*0.75;

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('h1, .mark').each(function() {
      var activeElementId = $(this).attr('id');
    if ($(this).isInViewport()) {
      $('#' + activeElementId).addClass('animated');
    } else {
      $('#' + activeElementId).removeClass('animated');
    }
  });
});

/*
$(window).on('resize scroll', function() {
  $('.fadein, .fadeout').each(function() {
      var activeFadeinId = $(this).attr('id');
    if ($(this).isInViewport()) {
      $('#' + activeFadeinId).addClass('animated');
    }
  });
});
*/


function randomizeCase(){
  var randomCaseTxts = document.querySelectorAll('.randomCaseTxt');

  for(var i = 0; i < randomCaseTxts.length; i++){
    
    randomCaseTxts[i].textContent = randomCaseTxts[i].textContent.split('').map(function(v) {
    var chance = Math.round(Math.random());
    return v = chance ? v.toUpperCase() : v.toLowerCase();
    }).join('');
  }
};

setInterval(randomizeCase, 1000);