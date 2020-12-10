

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


  //create a timeline instance
var tl = gsap.timeline({
 paused:true,
  defaults: { duration: 0.8, ease: "power2.out" }
});

//the following two lines do the SAME thing:
// tl.add( gsap.to("#id", {duration: 2, x: 100}) );
tl.addLabel("scene1")
  .to(".hero-section-one", { x: '54.65vw', width: '45.35vw', height: '100%' }, "scene1")
  .to(".hero-block", { marginTop: 0, height: '100%', backgroundColor: '#EFC111', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', }, "scene1")
  .to(".hero-content-one", { opacity: 0, display: 'none', position: 'absolute' }, "scene1")
  .to(".hero-content-two", { opacity: 1, display: 'block', position: 'static', padding: '12.13vh 0 0 0', }, "scene1")
  .to(".hero-base", { yPercent: 100, onComplete: () => { $('.hero-base').hide() } }, "scene1")
  .to(".hero-content-three", { opacity: 0, }, "scene1")
  .to(".logo path:last-of-type", { fill: '#EFC111',}, "scene1")
  .addLabel("scene2")
  .to(".hero-section-one", { x: '0vw', width: '100vw', height: '34.8vh', position: 'absolute', bottom: 0 }, "scene2")
  .to(".hero-block", { marginTop: 0, height: '100%', backgroundColor: '#17C7FF', boxShadow: 'none', padding: '3.7vh 8.33vw' }, "scene2")
  .to(".hero-content-two", { opacity: 0, display: 'none', position:'absolute'}, "scene2")
  .to(".hero-content-three", { opacity: 1, display: 'block', position: 'static', }, "scene2")
  .to(".logo path:last-of-type", { fill:'#17C7FF',}, "scene2")
  .addLabel("scene3")
  .to(".hero-section-one", { x: '0vw', width: '54.64vw', height: 'unset', top: 0}, "scene3")
  .to(".hero-block", {backgroundColor: '#F86624', padding: '5.2vh 8.33vw', marginTop: '27%', width: '100%', height: 'unset', position: 'relative'},"scene3")
  .to(".hero-content-three", { opacity: 0, display: 'none', position: 'absolute', }, "scene3")
  .to(".hero-content-four", { opacity: 1, display: 'block', position: 'static', }, "scene3")
  .to(".logo path:last-of-type", { fill:'#F86624',}, "scene3")
  .addLabel("scene4");



// var master = gsap.timeline(
//   {paused:true}
// );

$('#firstResume').click(() => {
  //tl.tweenTo("scene2")
  var tween1 = tl.tweenFromTo("scene1", "scene2");
  //console.log(tween1)
});

$('#secondResume').click((event) => {
  event.preventDefault()
  var tween2 = tl.tweenFromTo("scene2", "scene3");
  //console.log(tween2)
})

$('#thirdResume').click((event) => {
  event.preventDefault()
  var tween3 = tl.tweenFromTo("scene3", "scene4");
  console.log(tween3)
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


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA72mqJ6pYg2NrdEfA8kMQZueRF5Pwj5IA",
  authDomain: "market-influencer-landing.firebaseapp.com",
  projectId: "market-influencer-landing",
  storageBucket: "market-influencer-landing.appspot.com",
  messagingSenderId: "998677505434",
  appId: "1:998677505434:web:9522d63892e3d1f2d88623"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


(function() {
  'use strict';
  window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('signupForm');
  // prevent submission
    form.addEventListener('submit', function (event) {

      const contactName = $('#contactName').val();
      const contactState = $('#contactState').val();
      const contactEmail = $('#contactEmail').val();
      const contactPhone = $('#contactPhone').val();
      const contactInterested = $('#contactInterested').val();
      const contactSelling = $('#contactSelling').val();


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
        $('.submit-btn').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Submitting...').addClass('disabled');
        $.post("https://api.declutter.ng/website-form",
        {
           name : contactName? contactName : "" ,
          state : contactState? contactState : "",
          email : contactEmail? contactEmail : "" ,
          phone : contactPhone? contactPhone : "",
          items_interested : contactInterested? contactInterested : "",
          items_to_sell : contactSelling? contactSelling : ""
      },
        function (data, status) {
            if (data.success) {
              $(".hero-title h2").fadeToggle(300);
              $('.form-content').fadeOut(300);
              $(".hero-title h2").html("We would be in touch with you very soon");
              $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
              $(".hero-title h2").fadeToggle(300);
           
          }
            else {
              $(".hero-title h2").fadeToggle(300);
              $('.form-content').fadeOut(300);
              $(".hero-title h2").html("Oops! Something went wrong.");
              $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
              $(".hero-title h2").fadeToggle(300);
           
          }
          
        });
      }

  }, false);

  }, false);
  })();
