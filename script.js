var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
    // console.log(dets.x)
    // cursor.style.transition = "left " + 0.5 
})

var h4All = document.querySelectorAll("#nav h4");
var cards = document.querySelectorAll(".card");


h4All.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        cursor.style.scale = 6
        cursor.style.outline = "0.5px solid white"
        cursor.style.backgroundColor = "transparent"
    })
})
h4All.forEach(function(ele){
    ele.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "none"
        cursor.style.backgroundColor = "#bdf431"
    })
})
// cards.forEach(function(ele){
//     ele.addEventListener("mouseenter",function(){
//         cursor.style.scale = 4
//         cursor.style.border = "0.1px solid white"
//         cursor.style.backgroundColor = "transparent"
//     })
// })
// cards.forEach(function(ele){
//     ele.addEventListener("mouseout",function(){
//         cursor.style.scale = 1
//         cursor.style.border = "0px solid white"
//         cursor.style.backgroundColor = "#bdf431"
//     })
// })

gsap.to("#nav",{
    backgroundColor: "#000",    
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 3,
    }
})

gsap.from("#about-us img",{
    y:50,
    opacity: 0,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub:3
    }
})

gsap.from("#about-us-in",{
    y:50,
    opacity:0,
    duration:2,
    // stagger:0.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})
gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})

gsap.from("#comma1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#comma1",
        scroller: "body",
        start: "top 55%",
        end: "top 66%",
        scrub: 4
    }
})
gsap.from("#comma2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#comma1",
        scroller: "body",
        start: "top 55%",
        end: "top 66%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y:20,
    duration:0.5,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 75%",
        scrub: 4
    }
})