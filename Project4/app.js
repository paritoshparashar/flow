const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


 tl.to(".text", { y: "0%", duration: 0.5, stagger: 0.3 });
tl.to(".slider", { y: "-100%", duration: 2, delay: 0.7 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 2, duration: 3 }, "-=0.7");
