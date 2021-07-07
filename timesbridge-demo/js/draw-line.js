    $(document).ready(function() {
            var $dashOffset = $(".path").css("stroke-dashoffset");

            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*140);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
          });
      });

$(document).ready(function() {
        var $dashOffset = $(".path-sec").css("stroke-dashoffset");

        $(window).on('scroll', function () {     
            var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*140);    
            var $newUnit = parseInt($dashOffset, 10); 
            var $offsetUnit = $percentageComplete * ($newUnit / 110);
            $(".path-sec").css("stroke-dashoffset", $newUnit - $offsetUnit);
      });
  });

        $(document).ready(function() {
                var $dashOffset = $(".bnb-path").css("stroke-dashoffset");
    
                $(window).on('scroll', function () {     
                    var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*70);    
                    var $newUnit = parseInt($dashOffset, 10); 
                    var $offsetUnit = $percentageComplete * ($newUnit / 100);
                    $(".bnb-path").css("stroke-dashoffset", $newUnit - $offsetUnit);
              });
          });

        $(document).ready(function() {
                var $dashOffset = $(".bnb-path-o").css("stroke-dashoffset");
    
                $(window).on('scroll', function () {     
                    var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*70);    
                    var $newUnit = parseInt($dashOffset, 10); 
                    var $offsetUnit = $percentageComplete * ($newUnit / 120);
                    $(".bnb-path-o").css("stroke-dashoffset", $newUnit - $offsetUnit);
              });
          });



        $(document).ready(function() {
            var $dashOffset = $(".path2").css("stroke-dashoffset");
            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*550);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                $(".path2").css("stroke-dashoffset", $newUnit - $offsetUnit);
            });

        });

        $(document).ready(function() {
                var $dashOffset = $(".path-double").css("stroke-dashoffset");

                $(window).on('scroll', function () {     
                    var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*550);    
                    var $newUnit = parseInt($dashOffset, 10); 
                    var $offsetUnit = $percentageComplete * ($newUnit / 100);
                    $(".path-double").css("stroke-dashoffset", $newUnit - $offsetUnit);
            });
        });



        $(document).ready(function() {
            var $dashOffset = $(".pathsl").css("stroke-dashoffset");
            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*550);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 110);
                $(".pathsl").css("stroke-dashoffset", $newUnit - $offsetUnit);
            });

        });

        $(document).ready(function() {
                var $dashOffset = $(".path-double-2").css("stroke-dashoffset");

                $(window).on('scroll', function () {     
                    var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*550);    
                    var $newUnit = parseInt($dashOffset, 10); 
                    var $offsetUnit = $percentageComplete * ($newUnit / 110);
                    $(".path-double-2").css("stroke-dashoffset", $newUnit - $offsetUnit);
            });
        });


    $(document).ready(function() {
        var $dashOffset = $(".path3").css("stroke-dashoffset");
        $(window).on('scroll', function () {     
            var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))* 400);    
            var $newUnit = parseInt($dashOffset, 10); 
            var $offsetUnit = $percentageComplete * ($newUnit / 100);
            $(".path3").css("stroke-dashoffset", $newUnit - $offsetUnit);
        });

    });

    $(document).ready(function() {
        var $dashOffset = $(".path3").css("stroke-dashoffset");
        $(window).on('scroll', function () {     
            var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))* 400);    
            var $newUnit = parseInt($dashOffset, 10); 
            var $offsetUnit = $percentageComplete * ($newUnit / 100);
            $(".path3").css("stroke-dashoffset", $newUnit - $offsetUnit);
        });

    });

$(document).ready(function() {
        var $dashOffset = $(".path-three").css("stroke-dashoffset");

        $(window).on('scroll', function () {     
            var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*400);    
            var $newUnit = parseInt($dashOffset, 10); 
            var $offsetUnit = $percentageComplete * ($newUnit / 110);
            $(".path-three").css("stroke-dashoffset", $newUnit - $offsetUnit);
      });
  });

    $(document).ready(function() {
            var $dashOffset = $(".path31").css("stroke-dashoffset");
    
            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*400);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 110);
                $(".path31").css("stroke-dashoffset", $newUnit - $offsetUnit);
          });
      });

$(document).ready(function() {
    var $dashOffset = $(".path4").css("stroke-dashoffset");
    $(window).on('scroll', function () {     
        var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*300);    
        var $newUnit = parseInt($dashOffset, 10); 
        var $offsetUnit = $percentageComplete * ($newUnit / 100);
        $(".path4").css("stroke-dashoffset", $newUnit - $offsetUnit);
    });

});

$(document).ready(function() {
        var $dashOffset = $(".path-four").css("stroke-dashoffset");

        $(window).on('scroll', function () {     
            var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*325);    
            var $newUnit = parseInt($dashOffset, 10); 
            var $offsetUnit = $percentageComplete * ($newUnit / 110);
            $(".path-four").css("stroke-dashoffset", $newUnit - $offsetUnit);
      });
  });

  function positionTheDot() {

// What percentage down the page are we? 
var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)   ;

// Get path length
var path = document.getElementById("Path-59");
var pathLen = path.getTotalLength();

// Get the position of a point at <scrollPercentage> along the path.
var pt = path.getPointAtLength(scrollPercentage  * pathLen*5.75 )  ;



// Position the red dot at this point
var dot = document.getElementById("Oval1");
dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");

};

// Update dot position when we get a scroll event.
window.addEventListener("scroll", positionTheDot );

// Set the initial position of the dot.


positionTheDot();

function positionTheDot2() {
    
    // What percentage down the page are we? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)   ;
    
    // Get path length
    var pathrt = document.getElementById("path-double");
    var pathLen = pathrt.getTotalLength();
    
    // Get the position of a point at <scrollPercentage> along the path.
    var pt = pathrt.getPointAtLength(scrollPercentage * pathLen) ;
    
    
    
    // Position the red dot at this point
    var dot = document.getElementById("double-cc");
    dot.setAttribute("transform", "translate("+ pt.x  + "," + pt.y  + ")");
    
    };
    
    // Update dot position when we get a scroll event.
    window.addEventListener("scroll", positionTheDot2 );
    
    // Set the initial position of the dot.
    positionTheDot2();


    function positionTheDot3() {
    
    // What percentage down the page are we? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)   ;
    
    // Get path length
    var pathrt = document.getElementById("Path3");
    var pathLen = pathrt.getTotalLength();
    
    // Get the position of a point at <scrollPercentage> along the path.
    var pt = pathrt.getPointAtLength(scrollPercentage  * pathLen * 2.01)  ;
    
    
    
    // Position the red dot at this point
    var dot = document.getElementById("Oval-Copy2");
    dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
    
    };
    
    // Update dot position when we get a scroll event.
    window.addEventListener("scroll", positionTheDot3 );
    
    // Set the initial position of the dot.
    positionTheDot3();



    function positionTheDot4() {
    
    // What percentage down the page are we? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)   ;
    
    // Get path length
    var pathrt = document.getElementById("path4");
    var pathLen = pathrt.getTotalLength();
    
    // Get the position of a point at <scrollPercentage> along the path.
    var pt = pathrt.getPointAtLength(scrollPercentage  * pathLen  )  ;
    
    
    
    // Position the red dot at this point
    var dot = document.getElementById("Oval-Copy3");
    dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
    
    };
    
    // Update dot position when we get a scroll event.
    window.addEventListener("scroll", positionTheDot4 );
    
    // Set the initial position of the dot.
    positionTheDot4();



    function positionTheDot5() {
    
        // What percentage down the page are we? 
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)   ;
        
        // Get path length
        var pathrt = document.getElementById("bnb-path");
        var pathLen = pathrt.getTotalLength();
        
        // Get the position of a point at <scrollPercentage> along the path.
        var pt = pathrt.getPointAtLength(scrollPercentage  * pathLen * 2.18 )  ;
        
        
        
        // Position the red dot at this point
        var dot = document.getElementById("oval-bnb");
        dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
        
        };
        
        // Update dot position when we get a scroll event.
        window.addEventListener("scroll", positionTheDot5 );
        
        // Set the initial position of the dot.
        positionTheDot5();
 $(document).ready(function() {
            var $dashOffset = $(".mob-first").css("stroke-dashoffset");

            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*300);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                $(".mob-first").css("stroke-dashoffset", $newUnit - $offsetUnit);
          });
      });   
$(document).ready(function() {
            var $dashOffset = $(".bnb-mobile").css("stroke-dashoffset");

            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*150);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                $(".bnb-mobile").css("stroke-dashoffset", $newUnit - $offsetUnit);
          });
      });
$(document).ready(function() {
            var $dashOffset = $(".course").css("stroke-dashoffset");

            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*500);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                $(".course").css("stroke-dashoffset", $newUnit - $offsetUnit);
          });
      });
$(document).ready(function() {
            var $dashOffset = $(".uber").css("stroke-dashoffset");

            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*400);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                $(".uber").css("stroke-dashoffset", $newUnit - $offsetUnit);
          });
      });
 $(document).ready(function() {
            var $dashOffset = $(".last-mob").css("stroke-dashoffset");

            $(window).on('scroll', function () {     
                var $percentageComplete = (($(window).scrollTop()/($("html").height()-$(window).height()))*300);    
                var $newUnit = parseInt($dashOffset, 10); 
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                $(".last-mob").css("stroke-dashoffset", $newUnit - $offsetUnit);
          });
      });



   
