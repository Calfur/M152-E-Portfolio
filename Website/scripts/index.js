const dynamicColor1 = [0, 149, 243];
const dynamicColor2 = [242, 34, 83];
const navHeight = 59;

$("#color-slider").on("input", function () {
   var sliderValue = $(this).val();
   
   setDynamicCssVariables(sliderValue);
});

$('#back-to-top').click(function () {
   $('body,html').animate({
      scrollTop: 0
   }, 0);
});

function scrollToDiv(id) {
   $('html,body').unbind().animate({ 
      scrollTop: $(id).offset().top - navHeight 
   }, 0);
};

function setDynamicCssVariables(sliderValue) {
   setDynamicColorCssVariables(sliderValue);
   setHueRotateCssVariable(sliderValue);
}

function setDynamicColorCssVariables(sliderValue) {
   var cssRgb = getCssRgb(sliderValue);

   $("body").get(0).style.setProperty("--dynamic-color", cssRgb);
   $("#home-logo").get(0).contentDocument.getElementsByTagName("svg")[0].style.setProperty("--dynamic-color", cssRgb);
}

function setHueRotateCssVariable(sliderValue) {
   var cssHueRotate = getCssHueRotate(sliderValue);
   $("body").get(0).style.setProperty("--dynamic-hue-rotate", cssHueRotate);
}

function getCssRgb(sliderValue) {
   var rgb = getGradiantValue(sliderValue / 100);
   var cssRgb = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
   return cssRgb;
}

function getCssHueRotate(sliderValue) {
   var hueRotate = -0.4 / 100 * sliderValue;
   var cssHueRotate = `${hueRotate}turn`;
   return cssHueRotate;
}

function getGradiantValue(shareColor1) {
   var shareColor2 = 1 - shareColor1;

   var r = parseInt(dynamicColor1[0] * shareColor1 + dynamicColor2[0] * shareColor2);
   var g = parseInt(dynamicColor1[1] * shareColor1 + dynamicColor2[1] * shareColor2);
   var b = parseInt(dynamicColor1[2] * shareColor1 + dynamicColor2[2] * shareColor2);

   return [r, g, b];
};
