importScripts('https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js');
importScripts('https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js');

 const random = (min, max, inc = 80) => {
    return function () {
    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
};
};

    let tl = new TimelineMax({
    repeat: -1 });


    for (let i = 0; i < 100; i++) {if (window.CP.shouldStopExecution(0)) break;
    tl.staggerFromTo('.sq', 1, {
                left: random(0, 1680),
                top: random(0, 800),
                opacity: 0 },
            {
                opacity: 1,
                yoyo: true,
                repeat: 1,
                ease: Power1.easeInOut },
            0.2);
    }window.CP.exitedLoop(0);
