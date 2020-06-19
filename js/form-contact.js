
// JavaScript contact form Document

    // $('#contact-form').submit(function() {
    //     // window.alert("Thank you. I'll get back to you shortly");

    //     var action = $(this).attr('action');

    //     $("#message").slideUp(750, function() {
    //         $('#message').hide();

    //         $('#submit')
    //             .before('')
    //             .attr('disabled', 'disabled');

    //         $.post(action, {
    //                 name: $('#name').val(),
    //                 email: $('#email').val(),
    //                 comments: $('#comments').val(),
    //             },
    //             function(data) {
    //                 document.getElementById('message').innerHTML = data;
    //                 $('#message').slideDown('slow');
    //                 $('#cform img.contact-loader').fadeOut('slow', function() {
    //                     $(this).remove()
    //                 });
    //                 $('#submit').removeAttr('disabled');
    //                 if (data.match('success') != null) $('#cform').slideUp('slow');
    //             }
    //         );

    //     });

    //     return false;

    // });

$(document).ready(function(){
  $("#contact-form").submit(function(){
    alert("Submitted Thank you! will get back to you shortly");
  });
});