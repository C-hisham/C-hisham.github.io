$('a[href="#about"]').on('click', function (e) {
    e.preventDefault();
    console.log("working");

    $('html, body').animate({
        scrollTop: 0
    }, 500, 'linear');
});


$('a[href="#projects"]').on('click', function (e) {
    e.preventDefault();

    var offset = $('#projects').offset().top - ($(window).height() * 0.025);
  
    $('html, body').animate({
        scrollTop: offset
    }, 500, 'linear');
});


$('a[href="#skills"]').on('click', function (e) {
    e.preventDefault();

    var offset = $('#skills').offset().top - ($(window).height() * 0.025);
  
    $('html, body').animate({
        scrollTop: offset
    }, 500, 'linear');
});


$('a[href="#contact"]').on('click', function (e) {
    e.preventDefault();

    var offset = $('#contact').offset().top - ($(window).height() * 0.1);
  
    $('html, body').animate({
        scrollTop: offset
    }, 500, 'linear');
});


