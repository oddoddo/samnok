gsap.registerPlugin(ScrollTrigger);

// 마퀴
function marquee() {
    let marquee_box = document.querySelectorAll("._subpage .marquee");
    marquee_box.forEach((item, idx, arr) => {
        let item_p = item.querySelector('.txt');
        let marqueeClone01 = item_p.cloneNode(true);
        let marqueeClone02 = item_p.cloneNode(true);
        let marqueeClone03 = item_p.cloneNode(true);
        item_p.after(marqueeClone01);
        item_p.after(marqueeClone02);
        item_p.after(marqueeClone03);
    });
}
marquee();


function ldh_animation() {
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelectorAll(".fade-up");
    const fadeLeft = document.querySelectorAll(".fade-left");
    const fadeRight = document.querySelectorAll(".fade-right");
    const fadeOpacity = document.querySelectorAll(".fade-opacity");
	const imgScale = document.querySelectorAll(".imgScale");
    // const orderFadeDown = document.querySelectorAll(".order-fade-down > *");
    // const orderFadeUp = document.querySelectorAll(".order-fade-up > *");

    fadeDown.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: "0",
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom-=200",
                    toggleActions: 'play none none reverse'
                },
            }
        );
    });

    fadeUp.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: +100,
            },
            {
                opacity: 1,
                y: "0",
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom-=200",
                    toggleActions: 'play none none reverse'
                },
            }
        );
    });

    fadeLeft.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -100,
            },
            {
                opacity: 1,
                x: "0",
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom-=200",
                    toggleActions: 'play none none reverse'
                },
            }
        );
    });

    fadeRight.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: +100,
            },
            {
                opacity: 1,
                x: "0",
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom-=200",
                    toggleActions: 'play none none reverse'
                },
            }
        );
    });

    fadeOpacity.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom-=200",
                    toggleActions: 'play none none reverse'
                },
            }
        );
    });

	imgScale.forEach((element) => {
        gsap.from(
            element,
            {
                scale: 1.3,
				filter:'blur(3px)',
				duration: 1,
				delay: parseFloat(element.getAttribute('data-delay')) || 0,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom-=200",
                    toggleActions: 'play none none reverse'
                },
            }            
        );
    });

    // let orderFadeDownTimeLine = gsap.timeline();
    // let orderTimming = 0;

    // setTimeout(function () {
    //     orderFadeDown.forEach((element) => {
    //         orderFadeDownTimeLine.fromTo(
    //             element,
    //             {
    //                 y: +100,
    //                 opacity: 0,
    //             },
    //             {
    //                 y: 0,
    //                 opacity: 1,
    //             },
    //             `${(orderTimming += 0.5)}`
    //         );
    //     });

    //     orderFadeDownTimeLine.pause();

    //     ScrollTrigger.create({
    //         trigger: ".order-fade-down",
    //         start: "top bottom-=200",
    //         onEnter: () => {
    //             orderFadeDownTimeLine.play();
    //         },
    //         onLeaveBack: () => {
    //             orderFadeDownTimeLine.reverse();
    //         },
    //     });
    // }, 50);

    // setTimeout(function () {
    //     orderFadeUp.forEach((element) => {
    //         orderFadeDownTimeLine.fromTo(
    //             element,
    //             {
    //                 y: -100,
    //                 opacity: 0,
    //             },
    //             {
    //                 y: 0,
    //                 opacity: 1,
    //             },
    //             `${(orderTimming += 0.5)}`
    //         );
    //     });

    //     orderFadeDownTimeLine.pause();

    //     ScrollTrigger.create({
    //         trigger: ".order-fade-up",
    //         start: "top bottom-=200",
    //         onEnter: () => {
    //             orderFadeDownTimeLine.play();
    //         },
    //         onLeaveBack: () => {
    //             orderFadeDownTimeLine.reverse();
    //         },
    //     });
    // }, 50);

}

ldh_animation();



/* (괄호 안에 width 기준이 되는 class 작성 ,window 창크기일 경우 'window' )
    => function() 작성한 'width기준' 요소의 자식요소 중 .scroll_target의 width 체크하는 방식 이므로
    width가 커지는 요소에 scroll_target 클래스 붙일것
 */
widthScrollCheck('._subpage .scroll_target_box');
$(window).resize(function () {
    widthScrollCheck('._subpage .scroll_target_box');
})

function widthScrollCheck(target) {
    $(target).each(function (idx, value) {
        var width_target = $(value).width();

        if ($(value).find('.scroll_target').width() > width_target) {
            $(value).find('.scroll_icon').remove();
            $(value).append(`
                        <div class="scroll_icon">
                            <span class="arrow left"></span>
                            <p>
                                <img src="/asset/img/scroll_icon_hand.png" alt="">
                            </p>
                            <span class="arrow right"></span>
                        </div>`)
            $(value).addClass('ty_scroll');
        } else {
            $(value).find('div.scroll_icon').remove();
            $(value).removeClass('ty_scroll');
        }
    })
}

