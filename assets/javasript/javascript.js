$(document).ready(function () {
    $('.card-slider').slick({

        prevArrow: '<button class="slide-arrow prev-arrow"><img src="assets/img/swiperbtnleft.22de7f3e8db5d523.svg" alt=""></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="assets/img/swiperbtnright.cbc1d309941ecd98.svg" alt=""></button>',
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        asNavFor: this.nav,
        // fade: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // Disable and add class to the image
    // $('.card-slider .slick-arrow img').prop('disabled', true).addClass('disabled');
});


$('.responsive').slick({
    // dots: true,
    infinite: false,
    prevArrow: '<button class="slide-arrow prev-arrow" style="left: -39px;"><img src="assets/img/swiperbtnleft.22de7f3e8db5d523.svg" alt=""></button>',
    nextArrow: '<button class="slide-arrow next-arrow"style="right: -33px;" ><img src="assets/img/swiperbtnright.cbc1d309941ecd98.svg" alt=""></button>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            // dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

    ]
});



// modal popup start

function setimg(imgdata, card_title, card_txt) {
    $('#cardimgdata').attr('src', imgdata);
    $('#card_title').html(card_title);
    $('#card_txt').html(card_txt);

    $(".cover ").fadeIn("300 ");

    $(".cover ").click(function () {
        $(".cover ").fadeOut("300 ");
    })
    $(".contents ").click(function (e) {
        e.stopPropagation();
    })
}
//  modal popup end

// hamburger button start

const bar = document.querySelector(".bar");
const navbar = document.querySelector('.header_text');

bar.addEventListener("click", () => {
    bar.classList.toggle("active");
    navbar.classList.toggle('active');
});


let btn = document.querySelector(".bar");
let icon = btn.querySelector(".fa-bars");
btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
}
// hamburger button end


//  removeClass and addclass in on Scrolled

$(window).scroll(function () {
    // console.log("test");
    let TopScrolled = $(window).scrollTop();
    // console.log(TopScrolled);
    if (TopScrolled > 1) {
        $(".header_text").removeClass("active")
        icon.classList.replace("fa-times", "fa-bars");
    } else {
        // $("#main-header").addClass("fixedmenu")

    }
})

// header animation 

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("headeractive");
    } else {
        header.classList.remove("headeractive");
    }
});




// releav
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1 && (revealElements[i].getBoundingClientRect().bottom > window.innerHeight / 6)) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");

        }
    }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
    revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// releav opacity
const opacity = document.querySelectorAll("[data-opacity]");
const opacityDelayElements = document.querySelectorAll("[data-opacity-delay]");

const opacity1 = function () {
    for (let i = 0, len = opacity.length; i < len; i++) {
        if (opacity[i].getBoundingClientRect().top < window.innerHeight / 1.2 && (opacity[i].getBoundingClientRect().bottom > window.innerHeight / 2)) {
            opacity[i].classList.add("Portano");
        } else {
            opacity[i].classList.remove("Portano");

        }
    }
}

for (let i = 0, len = opacityDelayElements.length; i < len; i++) {
    opacityDelayElements[i].style.transitionDelay = opacityDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", opacity1);
window.addEventListener("load", opacity1);



document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Dashboard | Tata Starbucks";
            // $("#favicon").attr("href", "assets/images/favicon.png");
        } else {
            document.title = "Come Back To website ";
            // $("#favicon").attr("href", "assets/images/favhand.png");
        }
    }
);

