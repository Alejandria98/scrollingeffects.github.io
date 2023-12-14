$(document).ready(function () {


    $(window).scroll(function () {
        var windowScroll = $(this).scrollTop();

        // Banner Info Opacity
        var num = 2 - (windowScroll * 0.005);

        if (windowScroll > 0) {
            $('.bnr_info').css({
                'opacity': num
            });
        }
        else {
            $('.bnr_info').css({
                'opacity': '1'
            });
        }

        // Border Left
        var num = 2 - (windowScroll * .4);

        if (windowScroll > 0) {
            $('.bnr_border_left').css({
                'transform': 'translate3d(' + num + 'px, 0px, 0px)'
            });
        }
        else {
            $('.bnr_border_left').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }

        // Border Right
        var num = (windowScroll * .4) + -2;

        if (windowScroll > 0) {
            $('.bnr_border_right').css({
                'transform': 'translate3d(' + num + 'px, 0px, 0px)'
            });
        }
        else {
            $('.bnr_border_right').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }

        // Border Top
        var num = 2 - (windowScroll * .085);

        if (windowScroll > 0) {
            $('.bnr_border_top').css({
                'transform': 'translate3d(0px,' + num + 'px, 0px)'
            });
        }
        else {
            $('.bnr_border_top').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }


        // Border Bottom
        var num = (windowScroll * .085) + -2;

        if (windowScroll > 0) {
            $('.bnr_border_bottom').css({
                'transform': 'translate3d(0px,' + num + 'px, 0px)'
            });
        }
        else {
            $('.bnr_border_bottom').css({
                'transform': 'translate3d(0px, 0px, 0px)'
            });
        }

    });


});

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 100;
let frameStart = 50;
const currentFrame = index => (
  `./assets/${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = frameStart; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(frameStart);
canvas.width= 1920;
canvas.height= 1080;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 51))
});

preloadImages()