  // slider 
  $('.voice-trust-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(document).ready(function () {
    $('.counter-item').each(function () {
        var $this = $(this);
        var countTo = parseFloat($this.attr('data-count'));

        $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
                duration: 2000, // Animation duration (2 seconds)
                easing: 'swing',
                step: function () {
                    var formattedNum = this.countNum % 1 === 0 ? Math.round(this.countNum) : this.countNum.toFixed(2);
                    $this.text(formattedNum);
                },
                complete: function () {
                    var finalNum = countTo % 1 === 0 ? Math.round(countTo) : countTo.toFixed(2);
                    $this.text(finalNum);
                }
            }
        );
    });
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const activeHeader = document.querySelector('.accordion-header.active');

        if (activeHeader && activeHeader !== header) {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.style.display = 'none';
        }

        const content = header.nextElementSibling;

        if (header.classList.contains('active')) {
            header.classList.remove('active');
            content.style.display = 'none';
        } else {
            header.classList.add('active');
            content.style.display = 'block';
        }
    });
});

//

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header-main");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

