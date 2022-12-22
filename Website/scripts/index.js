const dynamicColor1 = { r: 0, g: 149, b: 243 };
const dynamicColor2 = { r: 242, g: 34, b: 83 };
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

function getCssHueRotate(sliderValue) {
   var hueRotate = -0.4 / 100 * sliderValue;
   var cssHueRotate = `${hueRotate}turn`;
   return cssHueRotate;
}

function getCssRgb(sliderValue) {
   var rgb = getGradiantValue(sliderValue / 100);
   var cssRgb = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
   return cssRgb;
}

function getGradiantValue(shareColor1) {
   const shareColor2 = 1 - shareColor1;

   const r = Math.round(dynamicColor1.r * shareColor1 + dynamicColor2.r * shareColor2);
   const g = Math.round(dynamicColor1.g * shareColor1 + dynamicColor2.g * shareColor2);
   const b = Math.round(dynamicColor1.b * shareColor1 + dynamicColor2.b * shareColor2);

   return [r, g, b];
};
