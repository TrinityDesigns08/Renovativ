// let tl = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".wrk_row",
// 		toggleActions: "restart complete reverse resume",
// 		start: "top top",
// 		markers: true,
// 		scrub: true,
// 		pin: true
// 	}
// });

// tl.to(".p-one", {
// 	autoAlpha: 0
// });
// tl.from(".p-two", {
// 	autoAlpha: 0,
// 	y: 20
// });
// tl.set(
// 	".img-one",
// 	{
// 		autoAlpha: 0
// 	},
// 	"<"
// );
// tl.from(
// 	".img-two",
// 	{
// 		autoAlpha: 0
// 	},
// 	"<"
// );
ScrollTrigger.defaults({
    markers:false
  })
  
  var points = gsap.utils.toArray('.point');
  var indicators = gsap.utils.toArray('.indicator');
  
  var height = 100 * points.length;
  
  gsap.set('.indicators', {display: "flex"});
  
  var gtl = gsap.timeline({
    duration: points.length,
    scrollTrigger: {
      trigger: ".philosophie",
      start: "top center",
      end: "+="+height+"%",
      scrub: true,
      id: "points",
    }
  })
  
  var pinner = gsap.timeline({
    scrollTrigger: {
      trigger: ".philosophie .wrapper",
      start: "top top",
      end: "+="+height+"%",
      scrub: true,
      pin: ".philosophie .wrapper",
      pinSpacing: true,
      id: "pinning",
      
    //   markers: true
    }
  })
  
  
  
  points.forEach(function(elem, i) {
    gsap.set(elem, {position: "absolute", top: 0});
  
    gtl.to(indicators[i], {backgroundColor: "#1D1A55", duration: 0.25}, i)
    gtl.from(elem.querySelector('img'), {autoAlpha:0}, i)
    gtl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
    
    if (i != points.length-1) {
      gtl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
      gtl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
      gtl.to(elem.querySelector('img'), {autoAlpha:0}, i + 0.75)
    }
    
  });
