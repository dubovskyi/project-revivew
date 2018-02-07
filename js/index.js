/* global $ */
$('#visitor-submit').click(function(ev){
    if ($('form')[0].checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/dubovskyi12@ukr.net", 
            method: "POST",
            data: {
                visitorName: $('#visitor-name').val(),
                visitorEmail: $('#visitor-email').val(),
                visitorInfo: $('#visitor-message').val()
            },
            dataType: "json"
        }).done(function() {
            $('answer-msg')[0].reset();
            $('#answer-msg').html('<p>Thank you for contacting us!</p>')
        }).fail(function(){
            $('#answer-msg').html('<p>Sorry! An error has occured!</p>')
        });
    }
});