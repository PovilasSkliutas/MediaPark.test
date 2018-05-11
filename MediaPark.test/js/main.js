/* Responsive menu toggler function */
$(document).ready(function() {

    // menu toggler function
    let navToggler = $('.navToggler');
        menuResponsive = $('.navbar-collapse');

    $(navToggler).on ('click', function(e) {
        e.preventDefault();
        menuResponsive.slideToggle();
    })

    /* Jquery realtime form validation */

    /* form variables regex */
    let $regexmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let $regexphone=/^([0-9\s]{0,13})+$/i;
    let $regexdate=/^([0-9a-zA-Z\s\.]{0,})+$/i;

    /* Email realtime validation function */
       $('.email').on('keypress keydown keyup',function(){
                if (!$(this).val().match($regexmail)) {
                 // there is a mismatch, hence show the error message
                    $('.emsg-1').removeClass('hidden');
                    $('.emsg-1').show();
                }
              else{
                   // else, do not display message
                   $('.emsg-1').addClass('hidden');
                  }
            });
    /* Phone realtime validation function */
       $('.phone').on('keypress keydown keyup',function(){
                if (!$(this).val().match($regexphone)) {
                 // there is a mismatch, show the error message
                    $('.emsg-2').removeClass('hidden');
                    $('.emsg-2').show();
                }
              else{
                   // else, do not display message
                   $('.emsg-2').addClass('hidden');
                  }
            });

    /* Date realtime validation function */
       $('.date').on('keypress keydown keyup',function(){
                if (!$(this).val().match($regexdate)) {
                 // there is a mismatch, show the error message
                    $('.emsg-3').removeClass('hidden');
                    $('.emsg-3').show();
                }
              else{
                   // else, do not display message
                   $('.emsg-3').addClass('hidden');
                  }
            });


    /* JavaScript form validation */
    function validateForm() {

        let mail = false,
            fone = false,
            data = false;

        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let date = document.getElementById("date").value;

        let regMail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regPhone=/^([0-9\s]{0,13})+$/i;
        let regDate=/^[0-9a-zA-Z\s\.]+$/i;

        // validation fails if the input doesn't match our regular expression
    	if(!regMail.test(email)) {
    		document.getElementById('error1').innerHTML="Email contains invalid characters";
    		contactForm.email.focus();
        } else {
            document.getElementById('error1').innerHTML="";
            mail = true;
        }

        if(!regPhone.test(phone)) {
    		document.getElementById('error2').innerHTML="Phone contains invalid characters";
    		contactForm.phone.focus();

        } else {
            document.getElementById('error2').innerHTML="";
            fone = true;
        }

        if(!regDate.test(date)) {
    		document.getElementById('error3').innerHTML="Date contains invalid characters";
    		contactForm.date.focus();
        } else {
            document.getElementById('error3').innerHTML="";
            data = true;
        }

        if(mail == true && fone == true && data == true) {
            // validation was successful
            alert("Form successfully submitted");
            document.getElementById("contactForm").reset();
        }
    return;
    };

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        validateForm();

    })


});
