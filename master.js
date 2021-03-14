$(document).ready(function () {

var link = $(".menu-items");

console.log(link);


link.mouseenter(function(){
    $(this).children().css("display", "block");
})

link.mouseleave(function(){
    $(this).children().last().css("display", "none");
})
});