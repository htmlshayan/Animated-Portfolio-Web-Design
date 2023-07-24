var tl = gsap.timeline()


tl.from(".page1 h4",{
    y:-100,
    duration:0.8,
    delay:0.5,
    stagger:0.5
})

tl.to(".logo h3",{
    x:5,
    duration:0.5,
    yoyo:true,
    repeat:-1,
    delay:1,
})



gsap.to(".page1 .content h1 ",{
    transform: "translateX(-100%)",
    duration:1,
    fontWeight: "100",
    color: "red",
    opacity:0,
    // delay:0.5,
    scrollTrigger:{
    // markers:true,
    trigger: ".page1",
    scroller: "body",
    start: "top 0",
    end: "top -20%",
    scrub:2,
    pin:true
    }
})

gsap.from(".page2 .web-box h1",{
    // transform: "translateY(-80%)",
    scale:5,
    duration:1,
    fontWeight: "100",
    // delay:0.5,
    scrollTrigger:{
    // markers:true,
    trigger: ".page2 .web-box",
    scroller: "body",
    start: "top 40%",
    end: "top 0%",
    scrub:1,
    pin:true
    }
})


gsap.from(".page3 .coder #L",{
    transform:"translateX(-500%)",
    delay:1,
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1
    }
})

gsap.from(".page3 .coder #C",{
    transform:"translateY(100%)",
    delay:1,
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1
    }
})


gsap.from(".page3 .coder #R",{
    transform:"translateX(600%)",
    delay:1,
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1
    }
})

gsap.from(".page4 img",{
    y:1000,
    duration:1,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1
    }
})

gsap.from(".page4 h1,.page4 p",{
   x:1000,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1
    }
})

gsap.from(".page5 h1, .page5 p",{
    x:1200,
    duration:4,
    delay:1,
    opacity:0,
    stagger:2,
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1
    }
})

gsap.from(".page5 img",{
    x:-1200,
    duration:4,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1
    }
})

gsap.from(".page6 img",{
    x:-800,
    y:-400,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        // markers: true,
        start: "top 50%",
        end: "top 0%",
        scrub:1
    }
})

gsap.from(".page6 h1, .page6 p",{
    y:800,
    delay:1,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        // markers: true,
        start: "top 40%",
        end: "top 0%",
        scrub:1
    }
})

gsap.from(".page7 i",{
    x:800,
    delay:1,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page7",
        scroller:"body",
        // markers: true,
        start: "top 40%",
        end: "top 0%",
        scrub:1
    }
})

gsap.from(".page7 h1",{
    x:800,
    delay:1,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page7",
        scroller:"body",
        // markers: true,
        start: "top 40%",
        end: "top 0%",
        scrub:1
    }
})

gsap.from(".page8 h1",{
    scale:5,
    delay:1,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page8",
        scroller:"body",
        // markers: true,
        start: "top 40%",
        end: "top 0%",
        scrub:1
    }
})