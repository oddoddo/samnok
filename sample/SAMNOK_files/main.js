$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.maxTouchPoints == 5
    ) {
        // 모바일일 경우 scrollsmoother 비활성화
    } else {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    }

// 섹션4 비주얼 more 버튼 두개 연결
$('._m .s4 .visual .section-title.n1 a').hover(function(){
	$('._m .s4 .section-title .more').addClass('on');
},function(){
	$('._m .s4 .section-title .more').removeClass('on');
});

$('._m .s4 .section-title .more').hover(function(){
	$('._m .s4 .visual .section-title.n1 a').addClass('on');
},function(){
	$('._m .s4 .visual .section-title.n1 a').removeClass('on');
});


// 섹션1
let s1_tl = gsap.timeline();
s1_tl
	.fromTo('._m .s1 h2 small',{y:'-100',opacity:0},{y:'0',opacity:1})
	.fromTo('._m .s1 h2 .img-box',{y:'-100',opacity:0},{y:'0',opacity:1})

	function section01and02 (){
			// 섹션2 -------------------------------------
		let s2_tl = gsap.timeline();
		s2_tl
			.fromTo(
				"._m .s2 .img-box",
				{ y: 100, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1 }
			)
			.fromTo(
				"._m .s2 .txt-box strong",
				{ y: 100, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1 },
				"-=50%"
			)
			.fromTo(
				"._m .s2 .txt-box small",
				{ y: 100, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1 },
				"-=50%"
			);

		s2_tl.pause();
		ScrollTrigger.create({
			trigger: "._m .s2",
			start: "top center+=200",
			onEnter: () => {
				s2_tl.play();
			},
			onLeaveBack: () => {
				s2_tl.reverse();
			},
		});

		// 섹션3 -------------------------------------
		const s3_box = document.querySelectorAll("._m .s3 .box");
		const s3_tl_arry = [];

		s3_box.forEach((element) => {
			let s3_tl = gsap.timeline();

			s3_tl
				.fromTo(
					element.querySelector("img"),
					{
						opacity: 0,
						scale: 1.2,
					},
					{
						opacity: 1,
						scale: 1,
						duration: 1,
					}
				)
				.fromTo(
					element.querySelector(".txt-box"),
					{
						opacity: 0,
						y: +100,
					},
					{
						opacity: 1,
						y: 0,
					},
					"-=0.5"
				)
				.fromTo(
					element.querySelector(".stroke-txt"),
					{
						opacity: 0,
						y: +100,
					},
					{
						opacity: 1,
						y: 0,
					},
					"-=0.5"
				);

			s3_tl_arry.push(s3_tl);
		});

		s3_tl_arry.forEach((element) => {
			element.pause();
		});

		s3_box.forEach((element, idx) => {
			ScrollTrigger.create({
				trigger: element,
				start: "top bottom-=200",
				// end:'bottom top+=200',
				onEnter: () => {
					s3_tl_arry[idx].play();
				},
				onLeaveBack: () => {
					s3_tl_arry[idx].reverse();
				},
			});
		});
	}

    // 섹션4 -------------------------------------
    let s4_txt = document.querySelector("._m .s4 .visual .section-title.n1");
    let s4_txt_stroke = document.querySelector(
        "._m .s4 .visual .section-title.n2"
    );	

    function section04() {
        ScrollTrigger.matchMedia({
            // "(min-width: 1280px)": function () {
            "(min-width: 821px)": function () {
                // max-width: 1280px 이상인 경우에 해당하는 애니메이션
				let ww = $(window).width();
                let s4_tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "._m .s4 .visual",
                        start: "top top",
                        end: `${ww * 1.5}`,
                        scrub: true,
                        pin: true,
                    },
                });

                s4_tl
                    .fromTo(
                        "._m .s4 .visual .img-area",
                        { width: "100%" },
                        { width: "46%" }
                    )              
                    .to(
                        "._m .s4 .visual .img-box",
                        { height: "auto" },
                        "-=100%"
                    )
                    .to([s4_txt, s4_txt_stroke], { left: "100%" }, "-=100%")
                    .to("._m .s4 .visual .img-area", {x: "-100vw"});

                $("._m .s4 .visual .img-area").css("width", "100%");
            }
        });
    }

    function section04_02() {
        ScrollTrigger.matchMedia({
            // "(min-width: 1280px)": function () {
            "(min-width: 821px)": function () {               
                $("._m .s4 .horizon-scroll-area .pin-spacer").remove("style");
                $("._m .s4 .horizon-scroll-area .card").removeAttr("style");
                $("._m .s4 .horizon-scroll-area .txt-area").removeAttr("style");
                $("._m .s4 .horizon-scroll-area .img-area").removeAttr("style");
                $("._m .s4 .horizon-scroll-area .txt-box.n1").removeAttr("style");

				let horizon_card =  $("._m .s4 .horizon-scroll-area .card");
                horizon_card.each(function (idx, element) {
					element = $(element);

					let txt_horizon = $(element).find('.txt-area').width();
					let img_horizon = $(element).find(".img-area").width();
					let fill_text_width = $(element).find(".txt-box.n1").width();					
					let ww = $(window).width();
					let set_distance = fill_text_width + ww;
					let distance = img_horizon - txt_horizon + set_distance;
                    

                    gsap.fromTo(
                        element.find(".txt-area"),
                        {
                            x: `-${ww}`,
                        },
                        {
                            xPercent: "100",
                            ease: "linear",
                            scrollTrigger: {
                                trigger: element,
                                start: "center center",
                                end: `+=${ww * 1.5}`,
                                pin: true,
                                scrub: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        element.find(".img-area"),
                        {
                            x: `${ww}`,
                        },
                        {
                            xPercent: "-100",
                            ease: "linear",
                            scrollTrigger: {
                                trigger: element,
                                start: "center center",
                                end: `+=${ww * 1.5}`,
                                pin: true,
                                scrub: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        element.find(".img-area .txt-box.n1"),
                        {
                            x: `-${set_distance}`,
                        },
                        {
                            x: `+${distance}`,
                            ease: "linear",
                            scrollTrigger: {
                                trigger: element,
                                start: "center center",
                                end: `+=${ww * 1.5}`,
                                pin: true,
                                scrub: true,
                            },
                        }
                    );
                });
            },
        });
    }

	section01and02();
    section04();
    section04_02();

	
	// if($(window).width() >= 820 ){
	// 	$(window).on('scroll', function() {
	// 		var windowHeight = $(window).height(); // 창의 높이
	// 		var documentHeight = $(document).height(); // 문서 전체의 높이
	// 		var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치

	// 		// 스크롤이 마지막 1px 이하에 도달하면 스크롤 위치를 마지막 1px로 고정
	// 		if (documentHeight - (scrollTop + windowHeight) <= 1) {
	// 			$(window).scrollTop(documentHeight - windowHeight - 1);
	// 		}
	// 	});
	// }									

	// 리사이즈가 끝나고 0.3초후에 스크롤트리거 리셋
	$(window).resize(function () {
		if($(window).width() >= 820){			
			if (this.resizeTimer) {
				clearTimeout(this.resizeTimer); 
			}
						
			this.resizeTimer = setTimeout(function () {
				ScrollTrigger.getAll().forEach((trigger) => {
					trigger.kill();
				});										
				ldh_animation();
				section01and02();	
				section04();
				section04_02();
				ScrollTrigger.update();        
				ScrollTrigger.refresh();        
			}, 300);
		}	
	});
	




    // 커서 커스텀
    // let cursor = $(".cursor-view-more");
    // let cursor_area = $("._m .cursor-area");
    // $(window).mousemove(function (e) {
    //     cursor.css({ top: e.pageY + "px" });
    //     cursor.css({ left: e.pageX + "px" });
    // });



	let cursor_area = $("._m .cursor-area");
	const cursor = document.querySelector(".cursor-view-more");	
	
	// Listeners
	document.body.addEventListener("mousemove", onMouseMove);
	const xSTo = gsap.quickTo(cursor, "x", { duration: 0.1 });
	const ySTo = gsap.quickTo(cursor, "y", { duration: 0.1 });
	
	// Move the cursor
	function onMouseMove(e) {	
		xSTo(e.clientX);
		ySTo(e.clientY);
	}
		
    $(cursor_area).on("mouseover", function () {
        $(cursor).addClass("on");		
    });

    $(cursor_area).on("mouseleave", function () {
        $(cursor).removeClass("on");
    });

});
