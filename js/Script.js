

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  mobile: {
     smooth: true
 },
 tablet: {
     smooth: true
 }
});


/*
#page2 .skills-doc #cover ani #cv vr hover krtana text vr link dyacyh drive chi documnetsn  
*/

// var tl = gsap.timeline({
//   scrollTrigger:{
//       trigger:"#page2 .skills-doc #cover",
//       scroller:"body",
//       start:`top center`,
//       end:`bottom center`,
//       // scrub:2.3,
//       // ease:Power3,
//       duration:1,
//       markers:true,
//       // stagger:3,
//       // yoyo:true
//   },
//   });

  // gsap.from("#page2 .skills-doc #cover",{
  //   opacity:1,
  //   y:300,
  //   // duration:3,
  //   // delay:1,
  //   ease:Power4,
  //   markers:true,

  // });


let bounding =document.querySelector(".intro .bounding-elem");
let head= document.querySelectorAll(".intro .bounding-elem h1 span");


gsap.from(head,{
    // opacity:0,
    transform:`translateY(100%)`,
    stagger:0.2,
  duration:1,
  ease:Power4,
  })




let intro = document.querySelector(".intro p")
var cursor =document.querySelector(".cursor")

document.querySelector("#main").addEventListener("mousemove",function (dets){
  gsap.to(cursor, {
      left:dets.clientX ,
      top:dets.clientY 

   })
})

intro.addEventListener("mouseenter",function (){
  gsap.to(cursor,{    
    scale:8,
    ease:Power3

  })
})

intro.addEventListener("mouseleave",function (){
  gsap.to(cursor,{
    scale:1,
    ease:Power4,

  })  
})  

function navbar() {
  
var time=gsap.timeline()

time.to("#page .navbar",{
right:0,
duration:.5,
ease:Power4,
})
time.from("#page .navbar ul a",{
x:100,
opacity:0,
stagger:0.2,
duration:.5,
ease:Power4,
})
time.pause();

var  menu=document.querySelector("#page nav sub-nav a");
var cross=document.querySelector("#page .navbar .close i");

menu.addEventListener("click",function(){
  time.play();
})
cross.addEventListener("click",function(){
  time.reverse();
})

}
navbar();

function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();


function sheryon(){
  

// Shery.mouseFollower();

Shery.makeMagnet("sub-nav a" /* Element to target.*/, {

    //Parameters are optional.
    ease:Expo,
    duration: .2,
  });
Shery.makeMagnet(".sticky-icons a" /* Element to target.*/, {

    //Parameters are optional.
    ease:Expo,
    duration: .2,
  });

  // Shery.hoverWithMediaCircle("p span" /* Element to target.*/, {
  //   mouseFollower:true,
  //   images: ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1703607518981-b3c1fdb1f740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D", "image3.jpg"] /*OR*/,
  //   // videos: ["./assets/pro1.mp4","./assets/pro2.mp4"],
  // });
}
sheryon();

function textanim(){

  var clutter="";
  document.querySelector("#page1 .about-content h2").textContent.split(" ").forEach(function(dets){
      clutter+=`<span> ${dets} </span>`
      document.querySelector("#page1 .about-content h2").innerHTML=clutter;
  })

  gsap.to("#page1 .about-content h2 span",{
      scrollTrigger:{ 
          trigger:`#page1 .about-content h2 span`,
          start: `top bottom`,
          end:`bottom top`,
          scroller:"#main",
          scrub:.7,
          // markers:true,
          ease: Expo.easeOut
        },
          stagger:.1,
          color:`#fff`
  })


}
textanim();


function textanim2(){

  var clutter="";
document.querySelector("#page2 .skills-content h2").textContent.split(" ").forEach(function(dets){
    clutter+=`<span> ${dets} </span>`
    document.querySelector("#page2 .skills-content h2").innerHTML=clutter;
})

gsap.to("#page2 .skills-content h2 span",{
  scrollTrigger:{
      trigger:`#page2 .skills-content h2 span `,
      start: `top bottom`,
      end:`bottom top`,
      scroller:"#main",
      scrub:.7,
      ease: Expo.power3
    },
      stagger:.1,
      color:`#fff`

    });

gsap.from("#page2 .skills-doc #cover",{
  scrollTrigger:{
    trigger:`#page2 .skills-content h2 span`,
    start: `top bottom`,
    end:`bottom top`,
    scroller:"#main",
    scrub:.7,
    // markers:true,
    ease: Expo.power3
  },
    opacity:0.6,
    y:300,
    rotate:45,
    // duration:3,
    delay:-20,
    ease:Power4,
    // markers:true,

  });

gsap.from("#page2 .skills-doc #cv",{
  scrollTrigger:{
    trigger:`#page2 .skills-content h2 span`,
    start: `top bottom`,
    end:`bottom top`,
    scroller:"#main",
    scrub:.7,
    ease: Expo.power3
  },
    opacity:0.7,
    x:300,
    rotate:45,
    // duration:3,
    delay:-20,
    // ease:Power4,
    // markers:true,

  });

  gsap.from("#page2 .skills-doc .cursor",{
  scrollTrigger:{
    trigger:`#page2 .skills-content h2 span`,
    start: `top bottom`,
    end:`bottom top`,
    scroller:"#main",
    scrub:.7,
    ease: Expo.power3
  },
    opacity:0.3,
    y:-300,
    rotate:45,
    // duration:3,
    delay:-20,
    // ease:Power4,
    // markers:true,

  });


}

textanim2();

// function cvcursor() {


//   let doc = document.querySelector("#page2 .skills-doc  ")
//   let overlay = document.querySelector("#page2 .skills-doc #overlay  ")
//   let cursor2 =document.querySelector("#  ")

//   doc.addEventListener("mouseenter",function (){
//     gsap.to(cursor,{    
//       scale:0,
//       ease:Power3
  
//     })
//   })
  
//   doc.addEventListener("mouseleave",function (){
//     gsap.to(cursor,{
//       scale:1,
//       ease:Power4,
  
//     })  
//   }) 



// doc.addEventListener("mousemove",function (details){
//   gsap.to(cursor2, {
//     left:details.x,
//     top:details.y
   
//   })
// })

// overlay.addEventListener("mouseenter",function (){
//   gsap.to(cursor2,{    
//     scale:4,
//     ease:Power3

//   })
// })

// doc.addEventListener("mouseleave",function (){
//   gsap.to(cursor2,{
//     scale:0,
//     ease:Power4,

//   })  
// })  

// }


// cvcursor();







function textanim3(){

  var clutter="";
document.querySelector("#page4 .mini-projects h2").textContent.split(" ").forEach(function(dets){
    clutter+=`<span> ${dets} </span>`
    document.querySelector("#page4 .mini-projects h2").innerHTML=clutter;
})

gsap.to("#page4 .mini-projects h2 span",{
  scrollTrigger:{
      trigger:`#page4 .mini-projects h2 span`,
      start: `top bottom`,
      end:`bottom top`,
      scroller:"#main",
      scrub:.7,
      ease: Expo.power3
    },
      stagger:.1,
      color:`#fff`

    })
}
textanim3();

    
  //   document.querySelector("#bottom-nav a").addEventListener("mouseenter", function(event) {
  //     event.preventDefault();
  //     var link = this.getAttribute('href');
  //     window.scrollTo({
  //        top: 0,
  //        behavior: 'smooth'
  //     });
   
  //     var elementsToAnimate = document.querySelectorAll(link + " *[id]");
  //     gsap.to(elementsToAnimate, { autoAlpha: 1 });
  //  });
   
    
    

function bottomnav() {

  let bottom = document.querySelectorAll("#bottom-nav h6")
  
 bottom.forEach(function(item){
  item.addEventListener("mouseenter",function(){
  
  gsap.to(item.querySelector("#bottom-nav i"),{
     rotate:"-45deg", 
  })
  })
  item.addEventListener("mouseleave",function(){
  gsap.to(item.querySelector("#bottom-nav i"),{
     rotate:"0deg", 
  })
  })
 })  
}

bottomnav();
  

function works() {
  

document.querySelectorAll(".elem").
forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  
  elem.addEventListener("mousemove", function (dets) {
    
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    
    gsap.to(elem.querySelector("video"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-10, 10, diffrot * 5),
    });

    gsap.to(elem.childNodes[0],{
      x:50,
      opacity:1,
      ease:Power3
    })

  });


    elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("video"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });

    gsap.to(elem.childNodes[0],{
      x:0,      
      opacity:1,
      ease:Power3
    })

  });
});
 
}
works();


function swiperjs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { 
      delay: 3552,
      disableOnInteraction: false,
    },
    swiper
  });

}
swiperjs();


function swiperjs2() {
  var swiper2 = new Swiper(".mySwiperr", {
    slidesPerView:1,
    spaceBetween:10,
    loop: true,
    reverse:true,
    autoplay: { 
      delay: 3552,
      disableOnInteraction: false,
    },
    swiper2
  });

}
swiperjs2();


var minipro = document.querySelector(".swiper-slide .pro")

minipro.addEventListener("mouseenter",function(){

  gsap.to("minipro img ",{
     
    onStart:()=>{
       document.querySelector("minipro video").play();
   }
 })
})




   
function masker(){

  const masker = document.querySelector("#page5 .container .body");
  const quotes = document.querySelector("#page5 ");

  quotes.addEventListener("mousemove", function(event) {
    const x = event.clientX ;
    const y = event.clientY ;

    gsap.to(masker, {
      duration: 0.1,
      opacity:1,
      "--mask-x": `${x}px`,
      "--mask-y": `${y}px`,
      ease:Power1.inOut,
    });
    gsap.to(cursor, {
      scale:0,
      duration: 0.1,
      ease:Power1.inOut,
    });
  });

  quotes.addEventListener("mouseenter", function() {
    gsap.to(masker, {
      "--mask-size":"450px",
      opacity:1,
      color: "#000",
      ease:Power4,
    });
  });

  quotes.addEventListener("mouseleave", function() {
    gsap.to(masker, {
      duration: 0.5,
      opacity:0,
      "--mask-size":"60px",
      "--mask-x": `0px`,
      "--mask-y": `0px`,
      ease: "power4",
    });
    gsap.to(cursor, {
      scale:1,
      duration: 0.1,
      ease: "power1.inOut",
    });
  });
}
masker();


function masker2(){

  
    let masker =document.querySelector("#page5 .container .body ");
    let hold =document.querySelector("#page5 .container #hold ");
    let holdTimeout;

    hold.addEventListener("mousedown",()=>{
      holdTimeout=setTimeout(()=>{
        gsap.to(masker, {
          "--mask-size":"1000px",
          "--mask-x": `50%`,
        "--mask-y": `50%`,
          opacity:1,
          color: "#000",
          ease:Power4,
        });
      },500)
      
    }) 
  
    hold.addEventListener("mouseUp",()=>{
      clearTimeout(holdTimeout);
      gsap.to(masker, {
        "--mask-size":"60px",
        "--mask-x": `0%`,
        "--mask-y": `0%`,
        top:"50%",
        left:"50%",
        transform:`translate(-50%,-50%)`,
        opacity:0,
        color: "#000",
        ease:Power4,
        transition:`cubic-bezier(0.455, 0.03, 0.515, 0.955).2s;`
      });
    })
  
  }

masker2();







function FormSubmit() {
    // Initialize EmailJS with your user ID
(function() {
  emailjs.init("33VD4lGDHH6-UmUi-");
})();

// Function to handle form submission
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Send form data using EmailJS
  emailjs.sendForm('service_4rlv8cb', 'template_avcap0t', this)
      .then(function() {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: {y:0.6 },
        });
      }, function(error) {
          alert('Failed to send email. Error: ' + JSON.stringify(error));
      });
});

}

FormSubmit();

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "" || phone ==="") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'All fields are required!'
        });
        return false;
    }

    if (!validateEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Invalid email address!'
        });
        return false;
    }

    return true;
}


function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function clock() {

  function updateTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    // Calculate the time in India (GMT +5:30)
    const indiaTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));

    // Get local time in India
    const hours = String(indiaTime.getUTCHours()).padStart(2, '0');
    const minutes = String(indiaTime.getUTCMinutes()).padStart(2, '0');
    
    // Format the clock display
    // const location = "Location: India";
    const localTime = `Local time ${hours}:${minutes}`;
    const gmtTime = `GMT <br> (+5:30)`;

    clockElement.innerHTML = `<h5>\n${localTime} , ${gmtTime}</h5>`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately

}

clock();


function stickyHide() {

  document.addEventListener('DOMContentLoaded', function() {

    const stickyIcons = document.querySelector('.sticky-icons');
  
    const footer = document.querySelector('#page7');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stickyIcons.classList.add('hidden');
        } else {
          stickyIcons.classList.remove('hidden');
        }
      });
    }, { threshold: 0.4 });
  
    observer.observe(footer);
  });
  
}

stickyHide();



document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Smooth scroll to the target element
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });

      // Update URL without refreshing the page
      window.history.pushState(null, '', targetId);
    });
  });
});



// Shery.imageEffect(".pro .img", {
//   style: 2,
//   debug: true,
//   gooey: true,
// });

//  function scrollToTop() {
//             let container=document.querySelector("body")
//             container.scrollTo({
//                 top:0,
//                 behavior: 'smooth'
//             });
//         }
const backToTopButton = document.querySelector(".footer-links .last button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // For smooth scrolling
    });
});
