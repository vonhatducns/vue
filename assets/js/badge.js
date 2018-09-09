// Icon Badge JS

$(function() {
     $('#bell').each(function(){
        var count = $('#bell').data('notification-count');
        $(this).wrap($('<span>').css({'position':'relative'}))
            .parent().append($('<li>').addClass("circle").html(count));
     });
    
});

$(function() {
     $('#cartc').each(function(){
        var count = $('#cartc').data('notification-count');
        $(this).wrap($('<span>').css({'position':'relative'}))
            .parent().append($('<li>').addClass("circle").html(count));
     });
    
});