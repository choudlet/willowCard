var burnPicture = document.getElementsByClassName('burning')[0];
var outPicture = document.getElementsByClassName('out')[0];


burnPicture.addEventListener('click', swapPicture);



function swapPicture() {

    burnPicture.style.display = "none";
    outPicture.style.display = "inline";
}

var infiniteLoop = anime({
    targets: '.willow-image',
    duration: 2000,
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
    loop: true
  },
);