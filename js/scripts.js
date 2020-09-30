$(document).ready(function () {
  $("#ReserveButton").click(function () {
    $("#ReserveModal").modal();
  });
});

$(document).ready(function () {
  $("#loginModal").click(function () {
    $("#LoginBody").modal();
  });
});

$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  //i set the interval of the carousel into 2s

  //for carouselButton button if a click is done by a user that's mean we shoud execute which into the function:
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      //if this carouselButton has a children span and his class called fa-pause
      $("#mycarousel").carousel("pause"); //alors carousel va initier la fonction pause
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });
});
