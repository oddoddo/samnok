let header_pc = $("header .pc");

// 스크롤 값이 0 이상이면 헤더에 클래스 추가
$(window).scroll(() => {
    let wt = $(window).scrollTop();
    if (wt >= 1) {
        header_pc.addClass("on");
    } else {
        header_pc.removeClass("on");
    }
});

gsap.fromTo(
    header_pc,
    {
        opacity: 0,
        y: -100,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }
);


// 스크롤중엔 헤더 감춤기능
let scrollTimeout;

function onScroll() {
    clearTimeout(scrollTimeout);
	// 스크롤시에 클래스 추가
	header_pc.addClass('scroll');
    // 스크롤이 멈추면 클래스제거
    scrollTimeout = setTimeout(function () {
        header_pc.removeClass('scroll');
    }, 300);
}

// 모바일 메뉴 펼처질땐 onScroll 사용안함
$(window).on("scroll", function(){
	if(!$('header .mobile').hasClass('on')){
		onScroll();
	}
});


$('header .pc .gnb').on('mouseover',function(){
    $('header .pc .lnb').stop().slideDown(300);
    $('header .pc .over_bg').addClass('on');
});


$('header .pc').on('mouseleave',function(){
    $('header .pc .lnb').stop().slideUp(50);
    $('header .pc .over_bg').removeClass('on');
});

// 텍스트 색상
$('header .pc .lnb').on('mouseover',function(e){
    $(this).parents('li').addClass('on');
    $(this).parents('li').siblings().removeClass('on');
});

$('header .pc .lnb').on('mouseleave',function(e){
	$('.gnb li').removeClass('on');
});

// 모바일
$('header .ham').on('click',function(){
	$(this).toggleClass('on');
	if($(this).hasClass('on')){
		$('header .mobile').addClass('on');
		$('.gray-bg').fadeIn(300);
	}else{
		$('header .mobile').removeClass('on');
		$('.gray-bg').fadeOut(300);
	}
});

$('body .gray-bg').click(function(){
	$('header .ham').removeClass('on');
	$('header .mobile').removeClass('on');
	$('.gray-bg').fadeOut(300);
});

$('header .mobile .gnb>ul>li').on('click',function(){
    $(this).find('.lnb').slideToggle(300);
    $(this).find('a').toggleClass('on');
})


// 개인정보 처리방침 등 팝업
let info_popup_cancel = $('._infomation_popup i');
let info_popup_bg = $('._infomation_popup_bg');
let info_popup_box = $('._infomation_popup');
let info_popup = $('_infomation_popup .poup');
let info_popup_open_01 = $('.info_popup_open_01');
let info_popup_open_02 = $('.info_popup_open_02');
let info_popup_open_03 = $('.info_popup_open_03');

$(info_popup_open_01).click(function(){
	$('._infomation_popup .popup.n1').addClass('on');
	$('body').css('overflow','hidden');
	$(info_popup_box).fadeIn(200);
	$(info_popup_bg).fadeIn(200);		
})

$(info_popup_open_02).click(function(){
	$('._infomation_popup .popup.n2').addClass('on');
	$('body').css('overflow','hidden');
	$(info_popup_box).fadeIn(200);
	$(info_popup_bg).fadeIn(200);	
})

$(info_popup_open_03).click(function(){
	$('._infomation_popup .popup.n3').addClass('on');
	$('body').css('overflow','hidden');
	$(info_popup_box).fadeIn(200);
	$(info_popup_bg).fadeIn(200);	
})

// 팝업닫기
$(info_popup_cancel).add(info_popup_bg).click(function(){
	$('body').css('overflow','auto');
	$(info_popup_box).fadeOut(200);
	$(info_popup_bg).fadeOut(200);
	$('._infomation_popup .popup').removeClass('on');
})


