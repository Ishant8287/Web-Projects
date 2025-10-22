function page1Animation() {
  var t1 = gsap.timeline();
  t1.from("nav h1,nav a, nav button", {
    y: -40,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });
  t1.from(".center-part1 h1", { x: -300, duration: 0.5, opacity: 0 });
  t1.from(".center-part1 p", { x: -100, duration: 0.4, opacity: 0 });
  t1.from(".center-part1 button", { x: -300, duration: 0.3, opacity: 0 });
  t1.from(".center-part2 img", { opacity: 0, duration: 0.5, x: 200 }, "-=0.5");
  t1.from(".section1-bottom img", { opacity: 0, duration: 0.6, stagger: 0.15 });
}

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

t2.from(".service", { x: 30, opacity: 0 });
t2.from(".part1 , #part2", { y: -30, opacity: 0, duration: 0.1 });

page1Animation();
