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