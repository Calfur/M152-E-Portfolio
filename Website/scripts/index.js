var dynamicColor1 = [0, 149, 243];
var dynamicColor2 = [242, 34, 83];

$("#color-slider").on("input", function () {
   var rgb = getGradiantValue($(this).val()/100);
   $("body").get(0).style.setProperty("--dynamic-color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
});

function scrollToId(target) {
   $('body,html').animate({
      scrollTop: - 50
   }, 0);
}

$('#back-to-top').click(function () {
   console.log("delay?")
   $('body,html').animate({
      scrollTop: 0
   }, 0);
});

function scrollToDiv(id) {
   $('html,body').unbind().animate({ scrollTop: $(id).offset().top - 59 }, 0);
};

function getGradiantValue(shareColor1) {
   var shareColor2 = 1 - shareColor1;

   var r = parseInt(dynamicColor1[0] * shareColor1 + dynamicColor2[0] * shareColor2);
   var g = parseInt(dynamicColor1[1] * shareColor1 + dynamicColor2[1] * shareColor2);
   var b = parseInt(dynamicColor1[2] * shareColor1 + dynamicColor2[2] * shareColor2);

   return [r, g, b];
};
