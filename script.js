//hamburger menu section 

let hamburger = document.querySelector('.header__hamburger');
hamburger.addEventListener("click", function() {
  document.body.classList.toggle('menu-open');
});

// GSAP animations section 

let tl = gsap.timeline();

tl.to(".fade-in", { opacity: 1, y:0, duration: 1, stagger: 0.3, ease: Power2.easeOut }, "1").from(".cover__bg", { scale: 0.6, duration: 4, opacity: 0, ease: Power2.easeOut} , "0")


gsap.to(".text-reveal", { clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)", y:0, duration: 1, stagger: 0.7, ease: Power2.easeOut });


gsap.to(".cover__bg", {
  y: 200,
  scrollTrigger: {
    trigger: ".cover--intro",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


ScrollTrigger.batch(".fade-up",{
  start: "top 80%",
  onEnter: (elements, triggers) => {
    gsap.to(elements, { opacity: 1, stagger: 0.3, y:0, duration: 1.5,  ease: Power2.easeOut });
    console.log(elements.length, "elements entered");
  },
});

// scroll menu

window.addEventListener('scroll', function() {
  if(window.scrollY > 200){
    document.body.classList.add('scroll-down');
  } else {
    document.body.classList.remove('scroll-down');
  }
});

/*let underline = document.querySelectorAll('.header__menu a');

underline.forEach((item) => {
  item.addEventListener("click", function() {

    underline.forEach((item) => {
     
        item.classList.remove('underline');
        document.body.classList.remove('menu-open');
      });
    item.classList.add('underline');
    });
    
  });
*/

// slider section 

var splide = new Splide( '.splide', {
perPage: 3,
rewind : true,
pagination : false,
breakpoints : {
  768: {perPage:1}
}
} );

splide.mount();


//cursor section 

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%) )`
});

document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursorinner.style.left = x + 'px';
cursorinner.style.top = y + 'px';
});



a.forEach(item => {
item.addEventListener('mouseover', () => {
  cursor.classList.add('hover');
});
item.addEventListener('mouseleave', () => {
  cursor.classList.remove('hover');
});
})

