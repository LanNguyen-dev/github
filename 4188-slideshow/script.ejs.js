var $section = $(".gt_section-<%=id%>");
if (!$section || !$section.length) {
  return;
}

var _mode = "<%=mode%>";

var $owlElement = $section.find(".gt_list-slidehome");
if (!$owlElement || !$owlElement.length) {
  return;
}

var timeAutoPlay = 5000;
$owlElement.owlCarousel({
  animateOut: "fadeOut",
  loop: true,
  margin: 0,
  dots: true,
  nav: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: timeAutoPlay,
  navText: ['<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg>', '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg>']
});

/*Comment*/
// Listen edit text in iframe
store.change("edit-text", function () {
  $owlElement.trigger("stop.owl.autoplay");
});
store.change("stop-edit-text", function () {
  $owlElement.trigger("play.owl.autoplay", [timeAutoPlay]);
});

// image uploader
store.change("optimal-<%=id%>-imgSlide1", function (value) {
  jQuery(".gt_section-<%=id%> [data-index='1'] .gt_slideshow-image").css({
    "background-image": "url(" + value + ")"
  });
  $owlElement.trigger("to.owl.carousel", 0, 0);
});
store.change("optimal-<%=id%>-imgSlide2", function (value) {
  jQuery(".gt_section-<%=id%> [data-index='2'] .gt_slideshow-image").css({
    "background-image": "url(" + value + ")"
  });
  $owlElement.trigger("to.owl.carousel", 1, 0);
});
store.change("optimal-<%=id%>-imgSlide3", function (value) {
  jQuery(".gt_section-<%=id%> [data-index='3'] .gt_slideshow-image").css({
    "background-image": "url(" + value + ")"
  });
  $owlElement.trigger("to.owl.carousel", 2, 0);
});
// end image uploader

// heading
store.change("optimal-<%=id%>-titleSmall1", function () {
  $owlElement.trigger("to.owl.carousel", 0, 0);
});
store.change("optimal-<%=id%>-titleSmall2", function () {
  $owlElement.trigger("to.owl.carousel", 1, 0);
});
store.change("optimal-<%=id%>-titleSmall3", function () {
  $owlElement.trigger("to.owl.carousel", 2, 0);
});
// end heading

// subHeading
store.change("optimal-<%=id%>-titleLager1", function () {
  $owlElement.trigger("to.owl.carousel", 0, 0);
});
store.change("optimal-<%=id%>-titleLager2", function () {
  $owlElement.trigger("to.owl.carousel", 1, 0);
});
store.change("optimal-<%=id%>-titleLager3", function () {
  $owlElement.trigger("to.owl.carousel", 2, 0);
});
// end subHeading

// button hideshow
store.change("optimal-<%=id%>-hideshowbutton1", function () {
  $owlElement.trigger("to.owl.carousel", 0, 0);
});
store.change("optimal-<%=id%>-hideshowbutton2", function () {
  $owlElement.trigger("to.owl.carousel", 1, 0);
});
store.change("optimal-<%=id%>-hideshowbutton3", function () {
  $owlElement.trigger("to.owl.carousel", 2, 0);
});
// end button hideshow

// button text
store.change("optimal-<%=id%>-nameButton1", function () {
  $owlElement.trigger("to.owl.carousel", 0, 0);
});
store.change("optimal-<%=id%>-nameButton2", function () {
  $owlElement.trigger("to.owl.carousel", 1, 0);
});
store.change("optimal-<%=id%>-nameButton3", function () {
  $owlElement.trigger("to.owl.carousel", 2, 0);
});
// end button text

// button link
store.change("optimal-<%=id%>-linkButton1", function () {
  $owlElement.trigger("to.owl.carousel", 0, 0);
});
store.change("optimal-<%=id%>-linkButton2", function () {
  $owlElement.trigger("to.owl.carousel", 1, 0);
});
store.change("optimal-<%=id%>-linkButton3", function () {
  $owlElement.trigger("to.owl.carousel", 2, 0);
});
// end button link
/*End_Comment*/

var $buttonSlider = $section.find(".gt-button-slider");
if (!$buttonSlider || !$buttonSlider.length) {
  return;
}

$buttonSlider.off("click.buttonSlider1<%=id%>").on("click.buttonSlider1<%=id%>", function (event) {
  var $target = $(this);
  var newUrl;
  if ($target.hasClass("gt-button-slider1")) {
    newUrl = "<%=linkButton1%>";
  }
  else if ($target.hasClass("gt-button-slider2")) {
    newUrl = "<%=linkButton2%>";
  }
  else if ($target.hasClass("gt-button-slider3")) {
    newUrl = "<%=linkButton3%>";
  }

  event.preventDefault();
  event.stopPropagation();

  if (_mode == "production" && newUrl != "")  {
    window.location.href = newUrl;
  } else {
    return;
  }
});
