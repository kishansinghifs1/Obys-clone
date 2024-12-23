function cursoranimation(){
    const cursor = document.querySelector("#crsr");
    const videoCursor = document.querySelector("#vedio-cursor");
    const videoContainer = document.querySelector("#vediocontainer");
    const video = videoContainer.querySelector("video");
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
    })
    Shery.makeMagnet("#nav-part2 h4");
}
cursoranimation();
function Photo1(){
   Shery.imageEffect(".image-div" ,{
    style : 5,
    config : {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272614206201047},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey : true,
   })
}
Photo1();
function loadingloader(){
    var t1 = gsap.timeline();
    t1.from(".line h1",{
        y:150,
        stagger:0.3,
        duration : 0.6,
        delay : 0.5
    });
    t1.from("#line1-part1",{
        opacity :0,
       onStart : function(){
           var h5timer = document.querySelector("#line1-part1 h5")
           var grow = 0;
           setInterval(() => {
           if(grow <= 100){
           h5timer.innerHTML = grow++;   
           } 
           },32); 
       }
    })
    t1.to( ".line h2" ,{
        animationName : "anime",
        opacity :1
    
    })
    t1.to("#loader",{
        opacity : 0,
        delay : 3.5,
        duration : 0.2,
    })
    t1.from("#page1 , #page2" ,{
         delay : 0.1,
         y:1200,
         opacity:0,
         duration : 0.6,
         ease:Power0,
    })
    t1.to("#loader",{
        display: "none",
    })
    t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
      y:1200,
      stagger:0.4
    })
    t1.from("#nav",{
        opacity : 0
    })
    t1.from("#hero1",{
      opacity : 0,
    }) 
    t1.from("#page2" ,{
     opacity : 0, 
    }, "-1")
}
loadingloader();
function flagAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#flag", {
        x: dets.x,
        y: dets.y
      })
    })
    document.querySelector("#hero3").addEventListener("mouseenter", function () {
      gsap.to("#flag", {
        opacity: 1
      })
    })
    document.querySelector("#hero3").addEventListener("mouseleave", function () {
      gsap.to("#flag", {
        opacity: 0
      })
    })
}
flagAnimation();