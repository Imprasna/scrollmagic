// gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "100%",
        scrub: 1,
    }
});


const tl2 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "100%",
        pin: true,
        // scrub: 1,
    }
});


tl.fromTo(".sliding-text", { y: 0 }, { y: 60, opacity: 0 });
tl2.fromTo(".logo", { scale: 6 }, { scale: 1, top: "2rem", left: "12rem", x: "50%", y: "50%", pin: true, position: 'fixed' });

const tl3 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "200%",
        pin: true,
        scrub: 1,
        pinSpacing: false,
    }
});