function scrollToId(target){
   $('body,html').animate({
       scrollTop: - 50
    }, 0);
}
// back to top Button
$('#back-to-top').click(function () {
   $('body,html').animate({
      scrollTop: 0
   }, 800, function(){
   });
});
function scrollToDiv(id){
   $('html,body').unbind().animate({scrollTop: $(id).offset().top-59},800);
};