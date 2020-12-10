

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
  .to(".hero-content-three", { opacity: 0,}, "scene1")
  .addLabel("scene2")
  .to(".hero-section-one", { x: '0vw', width: '100vw', height: '34.8vh', position: 'absolute', bottom: 0 }, "scene2")
  .to(".hero-block", { marginTop: 0, height: '100%', backgroundColor: '#17C7FF', boxShadow: 'none', padding: '3.7vh 8.33vw' }, "scene2")
  .to(".hero-content-two", { opacity: 0, display: 'none', position:'absolute'}, "scene2")
  .to(".hero-content-three", { opacity: 1, display: 'block', position: 'static', }, "scene2")
  .addLabel("scene3")
  .to(".hero-section-one", { x: '0vw', width: '54.64vw', height: 'unset', top: 0}, "scene3")
  .to(".hero-block", {backgroundColor: '#F86624', padding: '5.2vh 8.33vw', marginTop: '30%', width: '100%', height: 'unset', position: 'relative'},"scene3")
  .to(".hero-content-three", { opacity: 0, display: 'none', position: 'absolute', }, "scene3")
  .to(".hero-content-four", {opacity: 1, display: 'block', position: 'static', }, "scene3")
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
})

