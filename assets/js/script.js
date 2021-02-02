
       $(document).ready(function() {
        $('select.form-control').multiselect({
            maxHeight: 200,
            buttonClass: 'form-control sort-button',
            buttonWidth: '100%',
            nonSelectedText: "\00",
              checkboxName: function (option) {
            var $select = $(option).closest('select');
           // console.log($select[0].name)
            return $select[0].name
          }
        });
    });



$(function () {
  var $sections = $('.form-section');

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections
      .removeClass('current')
      .eq(index)
        .addClass('current');
    // // Show only the navigation buttons that make sense for the current section:
    // $('.form-navigation .previous').toggle(index > 0);
    // var atTheEnd = index >= $sections.length - 1;
    // $('.form-navigation .next').toggle(!atTheEnd);
    // $('.form-navigation [type=submit]').toggle(atTheEnd);
  }
  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter('.current'));
  }

  // Previous button is easy, just go back
  $('.form-navigation.previous').click(function() {
    navigateTo(curIndex() - 1);
    tl.tweenTo( tl.previousLabel() )
  });

  // Next button goes forward if current block validates
  $('.form-navigation.next').click(function() {
    $('#mainForm').parsley().whenValidate({
      group: 'block-' + curIndex()
    }).done(function() {
      navigateTo(curIndex() + 1);
      tl.tweenTo( tl.nextLabel() )
    });
  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function(index, section) {
    $(section).find(':input').attr('data-parsley-group', 'block-' + index);
  });
  navigateTo(2); // Start at the beginning
});


// $('.custom-control-input[type="checkbox"]').change((e) => {
//   console.log($('.custom-control-input[type="checkbox"]:checked'))
// });

// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var form = document.getElementById('signupForm');
//   // prevent submission
//     form.addEventListener('submit', function (event) {

//       const name = $('#name').val();
//       const email = $('#email').val();
//       const phone = $('#phone').val();     
//       const location = $('#location').val();
   

//     console.log('submit')
//   if (form.checkValidity() === false) {
//   event.preventDefault();
//     event.stopPropagation();

//     // console.log('validated')    
//       } 
      

        
//   form.classList.add('was-validated');
//       // console.log('dated')
//       if (form.checkValidity() === true) {
//         event.preventDefault();
//         event.stopPropagation();

//         tl.tweenFromTo("scene2", "scene3");




       
        
//            $('#thirdResume').click((event) => {
//              event.preventDefault()
             
//              const twitter = $('#twitterCheck').prop('checked')?"Yes" : "No";
//              const fb = $('#facebookCheck').prop('checked')?"Yes" : "No";
//              const whatsapp = $('#whatsappCheck').prop('checked')?"Yes" : "No";
//              const ig = $('#instagramCheck').prop('checked') ? "Yes" : "No";
    
//      if ($('.custom-control-input[type="checkbox"]:checked').length) {
         
//       $.post("https://market-influencer-landing-default-rtdb.firebaseio.com/users.json",
//         JSON.stringify({
//           name: name,
//           phone: phone ? phone : "",
//           email: email,
//           location: location ? location : "",
//           twitter: twitter,
//           facebok: fb,
//           whatsapp: whatsapp,
//           instagram: ig             
//         }),
//         function (data, status) {
//           if (data&&status==='success') {
//             console.log(data);
//             console.log(status);
//           $('.hero-content-four .hero-title').text(`Thanks for coming on board ${name}`)

//           tl.tweenFromTo("scene3", "scene4");
           
//           }
//           else {
//            console.log('oops')
           
//           }
//         }
//       )
//     }
//    });
   

//       };
            
        

//      //  $('.submit-btn').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Submitting...').addClass('disabled');
//       //   $.post("https://api.declutter.ng/website-form",
//       //   {
//       //      name : contactName? contactName : "" ,
//       //     state : contactState? contactState : "",
//       //     email : contactEmail? contactEmail : "" ,
//       //     phone : contactPhone? contactPhone : "",
//       //     items_interested : contactInterested? contactInterested : "",
//       //     items_to_sell : contactSelling? contactSelling : ""
//       // },
//       //   function (data, status) {
//       //       if (data.success) {
//       //         $(".hero-title h2").fadeToggle(300);
//       //         $('.form-content').fadeOut(300);
//       //         $(".hero-title h2").html("We would be in touch with you very soon");
//       //         $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
//       //         $(".hero-title h2").fadeToggle(300);
           
//       //     }
//       //       else {
//       //         $(".hero-title h2").fadeToggle(300);
//       //         $('.form-content').fadeOut(300);
//       //         $(".hero-title h2").html("Oops! Something went wrong.");
//       //         $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
//       //         $(".hero-title h2").fadeToggle(300);
           
//       //     }
          
//       //     });
      
        
//       }

//   , false);

//   }, false);
//   })();



