const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//사이드 뱃지 스크롤 시 사라지게
//badgeEl에 값 = 도큐먼트에서 쿼리 셀렉터로 헤더 안에 뱃지스를 찾음
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//브라우저가 갖고 있는 여러 명령을 가지고 있음 즉 우리가 보고있는 화면 자체
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //뱃지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
    });
    //버튼보이기
    gsap.to(toTopEl, .2, {
      x: 0 ,
    });
  } else {
    //뱃지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });
    //버튼숨기기
    gsap.to(toTopEl, .2, {
      x: 100, //버튼이동
    });
  }

}, 300));

//_.throttle(함수, 시간)


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
});


//fade-in 서서히 나타나게
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1,{
    delay:(index+1)*.7,
    opacity: 1
  });
});


//스와이퍼 new swiper(선택자, 옵션)

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});


//스와이퍼 new swiper(선택자, 옵션)

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay:{
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//스와이퍼 new swiper(선택자, 옵션)-하단

new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30, //슬라이드 사이 여백
  slidesPerView: 5, //한번에 보여줄 슬라이드 개수
  navigation: { //객체 데이터 할당
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



//프로모션 토글

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion //특정 변수의 값을 지속적으로 반대의 값으로 변환 !변수명=반댓값
  if (isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

//영상 위 아이콘 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size){
  //gsap .to(요소, 시간, 옵션)
  gsap .to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y:size,
      repeat:-1,//무한반복
      yoyo:true,//진행하고 다시 돌아오는
      ease: Power2.easeInOut,
      delay:random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


//스크롤 매직
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement : spyEl, //보여짐의 여부를 감시할 요소를 지정
      triggerHook : .8, //뷰포트의 시작(0)과 끝(1) 내가 감시하는 요소가 뷰포트에 어느 지점에서 걸릴 것인가를 지정
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



//올해가 몇년도인지 자동으로 계산

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();