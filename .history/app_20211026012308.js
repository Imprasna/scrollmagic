let tl = gsap.timeline({
    ScrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1
    },
});

tl.fromTo('.sliding-text', { y: 0 }, { y: -400 });

let tl = gsap.timeline({
    ScrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1
    },
});