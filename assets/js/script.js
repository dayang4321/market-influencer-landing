

// gsap.registerEffect({
//     name: "anim1",
//     effect: (targets, config) => {
//       return gsap.to(targets, {
//         duration: config.duration, opacity: 0,
//         onComplete: () => {
//           $(targets).attr("src", "/assets/img/svg/naira.svg");
//           gsap.to(targets,{duration:1, opacity: 1})
//         }, ...config
//       });
     
//     },
//     defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
//     extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
//   });
  
  //gsap.effects.fade(".box");
  
//       let timeline = gsap.timeline()
//   timeline.am('.pos1', { duration: 2, delay: 5, })

  //create a timeline instance
var tl = gsap.timeline({
 paused:true,
  defaults: { duration: 3, ease: "power2.out" }
});

//the following two lines do the SAME thing:
// tl.add( gsap.to("#id", {duration: 2, x: 100}) );
tl.addLabel("scene1")
  .to(".hero-section-one", { x: '54.65vw', width: '45.35vw', height: '100%' }, "scene1")
  .to(".hero-block", { marginTop: 0, height: '100%', backgroundColor: '#EFC111', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', }, "scene1")
  .to(".hero-content-one", { opacity: 0, display: 'none', position: 'absolute' }, "scene1")
  .to(".hero-content-two", { opacity: 1, display: 'block', position: 'static', padding: '12.13vh 0 0 0', }, "scene1")
  .to(".hero-base", { yPercent: 100, onComplete: () => { $('.hero-base').hide() } }, "scene1")
  .addLabel("scene2")
  .to(".hero-section-one", { x: '0vw', width: '100vw', height: '34.8vh', position: 'absolute', bottom: 0 }, "scene2")
  .to(".hero-block", { marginTop: 0, height: '100%', backgroundColor: '#17C7FF', boxShadow: 'none', }, "scene2")
  .to(".hero-content-two", { opacity: 0, display: 'none', }, "scene2")
  .to(".hero-content-three", { opacity: 1, display: 'block', position: 'static', }, "scene2")
  .addLabel("scene3")

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
  var tween3 = tl.tweenFromTo("scene3", 0);
  //console.log(tween2)
})

