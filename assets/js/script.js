

  $('.cd100').countdown100({
    /*Set Endtime here*/
    /*Endtime must be > current time*/
    endtimeYear: 2020,
    endtimeMonth: 12,
    endtimeDate: 19,
    endtimeHours: 9,
    endtimeMinutes: 0,
    endtimeSeconds: 0,
    timeZone: "Africa/Lagos" 
    // ex:  timeZone: "America/New_York"
    //go to " http://momentjs.com/timezone/ " to get timezone
  });


const animateCSS = (element, animation, prefix = 'animate__') => {
  // We create a Promise and return it
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true }); 
 
  });
}



$('.custom-control-input[type="checkbox"]').change((e) => {
  console.log($('.custom-control-input[type="checkbox"]:checked'))
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('signupForm');
  // prevent submission
    form.addEventListener('submit', function (event) {

      const name = $('#name').val();
      const phone = $('#phone').val();
      const email = $('#email').val();
      const location = $('#location').val();
   

    console.log('submit')
  if (form.checkValidity() === false) {
  event.preventDefault();
    event.stopPropagation();

    // console.log('validated')    
      } 
      

        
  form.classList.add('was-validated');
      // console.log('dated')
      if (form.checkValidity() === true) {
        event.preventDefault();
        event.stopPropagation();

        tl.tweenFromTo("scene2", "scene3");




       
        
           $('#thirdResume').click((event) => {
             event.preventDefault()
             
             const twitter = $('#twitterCheck').prop('checked')?"Yes" : "No";
             const fb = $('#facebookCheck').prop('checked')?"Yes" : "No";
             const whatsapp = $('#whatsappCheck').prop('checked')?"Yes" : "No";
             const ig = $('#instagramCheck').prop('checked') ? "Yes" : "No";
    
     if ($('.custom-control-input[type="checkbox"]:checked').length) {
         
      $.post("https://market-influencer-landing-default-rtdb.firebaseio.com/users.json",
        JSON.stringify({
          name: name,
          phone: phone ? phone : "",
          email: email,
          location: location ? location : "",
          twitter: twitter,
          facebok: fb,
          whatsapp: whatsapp,
          instagram: ig             
        }),
        function (data, status) {
          if (data&&status==='success') {
            console.log(data);
            console.log(status);
          $('.hero-content-four .hero-title').text(`Thanks for coming on board ${name}`)

          tl.tweenFromTo("scene3", "scene4");
           
          }
          else {
           console.log('oops')
           
          }
        }
      )
    }
   });
   

      };
            
        

     //  $('.submit-btn').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Submitting...').addClass('disabled');
      //   $.post("https://api.declutter.ng/website-form",
      //   {
      //      name : contactName? contactName : "" ,
      //     state : contactState? contactState : "",
      //     email : contactEmail? contactEmail : "" ,
      //     phone : contactPhone? contactPhone : "",
      //     items_interested : contactInterested? contactInterested : "",
      //     items_to_sell : contactSelling? contactSelling : ""
      // },
      //   function (data, status) {
      //       if (data.success) {
      //         $(".hero-title h2").fadeToggle(300);
      //         $('.form-content').fadeOut(300);
      //         $(".hero-title h2").html("We would be in touch with you very soon");
      //         $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
      //         $(".hero-title h2").fadeToggle(300);
           
      //     }
      //       else {
      //         $(".hero-title h2").fadeToggle(300);
      //         $('.form-content').fadeOut(300);
      //         $(".hero-title h2").html("Oops! Something went wrong.");
      //         $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
      //         $(".hero-title h2").fadeToggle(300);
           
      //     }
          
      //     });
      
        
      }

  , false);

  }, false);
  })();



