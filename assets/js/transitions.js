  
  gsap.registerPlugin(ScrollToPlugin);
var screenWidth = $(window).width()
var isDesktop = screenWidth >  767.98
  //create a timeline instance
  var tl = gsap.timeline({
    paused:true,
     defaults: { duration: 0.5, ease: "power2.out" }
   });
gsap.registerPlugin(ScrollToPlugin);

   //the following two lines do the SAME thing:
   // tl.add( gsap.to("#id", {duration: 2, x: 100}) );
   tl.addLabel("scene1")
     .to(".hero-section-one", { top: isDesktop? 0 :'35.74vw', width: isDesktop?'41vw':'100vw', x: '0', minWidth: isDesktop&&'49rem', height: '100%' }, "scene1")
     .to(".hero-block", {
       height: screenWidth >  767.98? '100%' : 'unset', backgroundColor: '#EFC111',
       boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', justifyContent: 'center', padding:  screenWidth >  767.98?  '0 8rem' : '5.2vh 8.33vw 10.4vh'
     }, "scene1")
     .to(".hero-content-one", { opacity: 0, display: 'none', position: 'absolute' }, "scene1")
     .to(".hero-content-two", { opacity: 1, display: 'block', position: 'static',
       onStart: () => {
      $('.username').text(username|| "User")
    }  }, "scene1")
     .to(".hero-content-three", { opacity: 0, }, "scene1")
     .to(".logo path:last-of-type", { fill: '#EFC111', }, "scene1")
     .to(window, {
       scrollTo: 0, onComplete: () => {
       //  console.log('scrolled')
       }
     }, "scene1")
     .addLabel("scene2")
    //  .from(".hero-section-one", isDesktop ? { left: '0', width: '34.323vw', }:{  width: '100vw'   }, "scene2")
     .to(".hero-section-one", isDesktop ? {left: 'unset', right: '0', width: '34.323vw', }: {  width: '100vw'}, "scene2")
     .to(".hero-block", { marginTop: 0, backgroundColor: '#61BB5A', boxShadow: 'none'}, "scene2")
     .to(".hero-content-two", { opacity: 0, display: 'none', position:'absolute'}, "scene2")
       .to(".hero-content-three", { opacity: 1, display: 'block', position: 'static', }, "scene2")
       .to(window, {
        scrollTo: 0, onComplete: () => {
        //  console.log('scrolled2')
        }
      }, "scene2")
    // .to(window, {scrollTo: "max", onComplete:()=>{console.log('scrolled')}}, "scene2")
     .to(".logo path:last-of-type", { fill:'#61BB5A',}, "scene2")
     .addLabel("scene3")
     .to(".pro-header", { paddingTop:!isDesktop && '0px'},"scene3")
     .to(".hero-section-one", { x: '0vw', width: '100vw', }, "scene3")
     .to(".hero-block", { marginTop: 0, height: '100%', backgroundColor: '#1790FF', boxShadow: 'none',justifyContent: 'start'  }, "scene3")
     .to(".hero-content-three", { opacity: 0, display: 'none', position:'absolute'}, "scene3")
     .to(".hero-content-four", {
       opacity: 1, display: 'flex', flexDirection: 'column', justifyContent: isDesktop ?'center': 'start',
       position: 'relative', maxWidth: '64rem', margin: 'auto', height: '100%', width: !isDesktop && "100%", paddingTop: !isDesktop&&'15rem'
     }, "scene3")
    
     .to(window, {
      scrollTo: 0, onComplete: () => {
      //  console.log('scrolled3')
      }
    }, "scene3")
  .to(".logo path:last-of-type", { fill: '#1790FF', }, "scene3")
 
    
     

  // .to(".group-one label", { opacity: 0, x:'100%', display: 'none',}, "scene4")  
  // .to(".group-one .form-control", { opacity: 0, x:'100%', display: 'none', }, "scene4")     
  // .to(".group-one", { opacity: 0, display: 'none', position:'absolute'}, "scene4")
  //    .to(".group-two", { opacity: 1, display: 'flex', position: 'static', }, "scene4")
  //    .from(".group-two label", { opacity: 0, x:'-100', display: 'block',}, "scene4")  
  //    .to(".group-two label", { opacity: 1, x:'0',}, "scene4")  
  // .to(".group-two .form-control", { opacity: 1, display: 'block', }, "scene4")     
  // .addLabel("scene5")


 
var numAsStr = ['one', 'two', 'three','four', 'five']
   




//console.log(tl)


//tl.tweenTo("scene4")
   
  //  $('#firstResume').click(() => {
  //    //tl.tweenTo("scene2")
  //    var tween1 = tl.tweenFromTo("scene1", "scene2");
  //    //console.log(tween1)
  //  });
   
  //  $('#secondResume').click((event) => {
  //    event.preventDefault()
  //    var tween2 = tl.tweenFromTo("scene2", "scene3");
  //    //console.log(tween2)
  //  })
   
  //  $('#thirdResume').click((event) => {
  //    event.preventDefault()
  //    var tween3 = tl.tweenFromTo("scene3", "scene4");
  //    console.log(tween3)
  //  });
      

  //  $('#goBack').click((event) => {
  //   tl.tweenTo( tl.previousLabel() )
  //  });
  
  

  //  $('#goForward').click((event) => {
  //   tl.tweenTo( tl.nextLabel()  )
  //  });
  
 