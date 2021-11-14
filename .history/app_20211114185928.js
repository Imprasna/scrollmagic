const tl = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        // end: "100%",
        scrub: 1,
    },
});


const tl2 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        // end: "100%",
        scrub: 1,
        pin: true,
    },
});

const tl3 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        // end: "100%",
        scrub: 1,
        pin: true,
    },
});

tl.to(".sliding-text", { y: 0 }, { y: 60 });
tl2.fromTo(".logo", {scale: 6}, {scale: 1, top: "2rem", left: "12rem", x: "50%", y: "50%", pin: true});