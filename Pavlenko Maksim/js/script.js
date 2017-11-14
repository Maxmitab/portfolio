$('.side-bar-menu').on('click', 'a', function(){
    $('.side-bar-menu li a').removeClass('active');
    $(this).addClass('active');
});

$('.category a').click(function() {
    $(".category .submenu").toggle("slow");
/*    $(".category .fa-caret-down").toggleClass("fa-rotate");*/
});

$('.brand a').click(function() {
    $(".brand .submenu").toggle("slow");
/*    $(".brand .fa-caret-down").toggleClass("fa-rotate");*/
});

$('.designer a').click(function() {
    $(".designer .submenu").toggle("slow");
/*    $(".designer .fa-caret-down").toggleClass("fa-rotate");*/
});

$('.burger').click(function() {
    $(".nav").slideToggle();
});


/*
$(".category .submenu li").click(function() {
    var text = $(this).html();
    //$(".category li a").html(text);
    $(".category .submenu").hide();
});

$(".brand .submenu li").click(function() {
    var text = $(this).html();
    //$(".category li a").html(text);
    $(".brand .submenu").hide();
});

$(".designer .submenu li").click(function() {
    var text = $(this).html();
    //$(".category li a").html(text);
    $(".designer .submenu").hide();
});
*/

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("category"))
        $(".category .submenu").hide();
});

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("brand"))
        $(".brand .submenu").hide();
});

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("designer"))
        $(".designer .submenu").hide();
});

/*var date = new Date(); // получаем текущую дату
var time = date.getHours(); // получаем текущее время в часах
if(time < 13) // сравниваем время с число 13
    alert('Доброе утро!'); // если время меньше 13
else
    alert('Добрый вечер!'); // если время равно 13 и больше*/