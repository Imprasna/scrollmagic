const tl = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "100%",
        scrub: 1,
        pin: true,
    },
});


const tl2 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "100%",
        pin: true,
        scrub: 1,
    },
});

const tl3 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "100%",
        pin: true,
        scrub: 1,
        pinS
    },
});

tl.fromTo(".sliding-text", { y: 0 }, { y: 60, opacity: 0 });
tl2.fromTo(".logo", {scale: 6}, {scale: 1, top: "2rem", left: "12rem", x: "50%", y: "50%", pin: true});