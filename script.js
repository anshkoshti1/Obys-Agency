function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.5,
    ease: "power4.out",
    opacity: 0,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5Timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = grow;
        }
      }, 25);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    duration: 0.2,
    opacity: 0,
    ease: "power4.out",
    delay: 2.3,
  });
  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    duration: 1,
    ease: "power4.out",
  });
  tl.to("#loader", {
    diplay: "none",
    zIndex: -1,
  });
  tl.from(
    "#nav",
    {
      opacity: 0,
    },
    "-=0.5"
  );
  tl.from(
    "#hero1 h1, #hero2 h1, #hero4 h1",
    {
      y: 120,
      stagger: 0.2,
      duration: 0.5,
    },
    "-=0.5",
    "a"
  );
  tl.from(
    "#hero3 h2",
    {
      y: 140,
      duration: 0.5,
    },
    "-=0.5",
    "a"
  );
  tl.from(
    "#hero1, #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (event) {
    gsap.to("#crsr", {
      left: event.x,
      top: event.y,
    });
  });

  var videocontainer = document.querySelector("#video-container");
  var videoCursor = document.querySelector("#video-cursor");
  var video = document.querySelector("#video-container video");

  function handleMouseMove(event) {
    let bounds = videocontainer.getBoundingClientRect(); // Get container position

    gsap.to("#crsr", {
      opacity: 0,
    });

    gsap.to("#video-cursor", {
      left: event.clientX - bounds.left - videoCursor.offsetWidth / 2,
      top: event.clientY - bounds.top - videoCursor.offsetHeight / 2,
      ease: "power4.out",
    });
  }

  function handleMouseLeave() {
    gsap.to("#crsr", {
      opacity: 1,
    });

    gsap.to("#video-cursor", {
      left: "80%",
      top: "-5%",
      transform: "translate(-50%, -50%)",
      ease: "power4.out",
    });
  }

  function updateCursorBehavior() {
    if (window.innerWidth <= 768) {
      // Small screen behavior: Keep cursor fixed in the center
      videocontainer.removeEventListener("mousemove", handleMouseMove);
      videocontainer.removeEventListener("mouseleave", handleMouseLeave);

      gsap.set("#video-cursor", {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      });

      var flag = 0;
      document.querySelector("#video-cursor").addEventListener("click", () => {
        if (flag == 0) {
          gsap.to("#video-cursor", {
            opacity: 0,
          });
          flag = 1;
        } else {
          gsap.to("#video-cursor", {
            opacity: 1,
          });
          flag = 0;
        }
      })

      var newFlag = 0;
      document.querySelector("#video-container").addEventListener("click", () => {
        if (newFlag == 0) {
          gsap.to("#video-cursor", {
            opacity: 0,
          });
          newFlag = 1;
        } else {
          gsap.to("#video-cursor", {
            opacity: 1,
          });
          newFlag = 0;
        }
      })
    } else {
      // Large screen behavior: Enable hover movement
      videocontainer.addEventListener("mousemove", handleMouseMove);
      videocontainer.addEventListener("mouseleave", handleMouseLeave);
    }
  }

  updateCursorBehavior(); // Run on load
  window.addEventListener("resize", updateCursorBehavior); // Update on resize

  var flag = 0;
  videocontainer.addEventListener("click", () => {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;

      videoCursor.innerHTML = `<i class="ri-pause-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 0.5,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;

      videoCursor.innerHTML = `<i class="ri-play-large-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });

  Shery.makeMagnet("#nav-part2 h4");
  Shery.makeMagnet("#nav #svg button");
}

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 1.15, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6857096354166666 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.38, range: [0, 10] },
      metaball: { value: 0.44, range: [0, 2] },
      discard_threshold: { value: 0.53, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.43, range: [0, 2] },
      noise_scale: { value: 13.74, range: [0, 100] },
    },
    gooey: true,
  });
}

function flagAnimation(){
  document.addEventListener("mousemove",(e)=>{
    gsap.to("#flag",{
      x:e.x,
      y:e.y
    })
  })
  
  document.querySelector("#hero3").addEventListener("mouseenter",()=>{
    gsap.to("#flag",{
      opacity:1
    })
  })
  
  document.querySelector("#hero3").addEventListener("mouseleave",()=>{
    gsap.to("#flag",{
      opacity:0
    })
  })
}

function footerHoverAnimation() {
  var h1 = document.querySelector("#footer #heading h1");
  var clutter = "";
  var h1text = h1.textContent;

  h1text.split("").forEach((char) => {
    clutter += `<span>${char}</span>`;
  });
  h1.innerHTML = clutter;

  h1.addEventListener("mouseenter", () => {
    gsap.to("#footer #heading h1 span", {
      fontFamily: "font3",
      color: "transparent", 
      stagger: 0.03,
      duration: 0.1,
      ease: "power4.out",
      fontWeight:100,
      webkitTextStroke: "1px white"
    });

    gsap.to("#heading svg",{
      x:50,
      duration: 0.3,
    })
  });

  // Hover out
  h1.addEventListener("mouseleave", () => {
    gsap.to("#footer #heading h1 span", {
      fontFamily: "font1",
      color: "#fff",
      stagger: 0.03,
      duration: 0.1,
      ease: "power4.out",
      fontWeight:600,
      webkitTextStroke: "0px white"
    });
    gsap.to("#heading svg",{
      x:0,
      duration: 0.3,
    })
  });
}

locomotiveScroll();
loadingAnimation();
cursorAnimation();
sheryAnimation();
flagAnimation();
footerHoverAnimation();