console.log('안녕');
// 검색창 관련 요소 선택
const searchEl = document.querySelector('.search'); // 검색창 전체 div
const searchInputEl = searchEl.querySelector('input');// 검색창 안의 input 요소

// 검색창 클릭 시 input에 포커스 주기
searchEl.addEventListener('click',function(){
  searchInputEl.focus(); // 클릭하면 자동으로 입력창에 커서가 이동
});
// input이 포커스되었을 때 (클릭 또는 탭으로 진입 시)
searchInputEl.addEventListener('focus', function(){
  searchInputEl.setAttribute('placeholder', '통합검색'); // placeholder(힌트 문구) 추가
  searchEl.classList.add('focused'); // 부모 요소에 'focused' 클래스 추가 (CSS 효과용)
});
// input에서 포커스가 해제되었을 때 (다른 곳 클릭 시)
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused'); // 'focused' 클래스 제거
  searchInputEl.setAttribute('placeholder', ''); // placeholder 문구 제거
});

// console.log(searchEl);
// console.log(searchInputEl);


// 상단 고정 헤더 내의 배지 이미지 요소 선택
const badgesEl = document.querySelector('#head_layout .badges');
console.log(badgesEl);
const totopEl = document.querySelector('#to-top');
console.log(totopEl);
// 스크롤 이벤트 등록 (lodash의 throttle로 성능 최적화)
window.addEventListener('scroll',_.throttle(function(){ 
   // window.scrollY → 현재 스크롤 위치(px)
  if(window.scrollY > 500){  // 스크롤이 500px을 넘으면 배지 숨기기
    // 배지 숨기기
    // badgesEl.Style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgesEl,.6,{ // GSAP 애니메이션 라이브러리 사용
      opacity:0, // GSAP 애니메이션 라이브러리 사용
    })
    // 상단 버튼바 보이기
    gsap.to(totopEl, .3,{
      x:0
    })
  }else{
    // 배지 보이기
    // badgesEl.style.display = 'block';
    gsap.to(badgesEl,.6,{ // 스크롤이 500px 이하이면 배지 다시 보이게
      opacity:1
    })
    // 상단 버튼바 숨기기
    gsap.to(totopEl,.3,{
      x:500
    })
  }
},300)); // 0.3초 단위로 스크롤 이벤트 실행 (throttle: 과도한 호출 방지)
// _.throttle -> lodash 사용하기 위한 문법 (이벤트 과잉 실행 방지)

// 상단으로 이동
totopEl.addEventListener('click', function(){
  gsap.to(window, .7,{
    scrollTo:0
  })
});



// section.banner 안에 있는 모든 fade-in 클래스를 가진 요소 선택
const fadeinEls = document.querySelectorAll('section.banner .fade-in');
// console.log('fadeinEl');
fadeinEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl, .5,{ // GSAP을 사용해 0.5초 동안 애니메이션 실행
    opacity:1, // 투명도 1 → 완전히 보이게
    delay:(index +1) *.5 // 요소마다 0.3초씩 순차적으로 지연
  })
});

new Swiper('.notice-line .swiper-container',{
  direction : 'vertical',//수직 슬라이드
  // autoplay : true, //자동 재생 여부
  loop : true //반복재생 여부
});

new Swiper('.promotion .swiper-container',{
  
  loop : true,
  slidesPerView : 3,
  spaceBetween : 10,
  centeredSlides : true,
  autoplay:{
    delay:5000 //5초마다 다음 슬라이드 재생
  },

  pagination:{
    el:'.promotion .swiper-pagination',
    clickable : true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
  
});

// promotion 슬라이드 토글 기능
// 슬라이드 영역
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역 토글하는 버튼
const promotionToggleEl = document.querySelector('.toggle-promotion');

console.log(promotionEl);
console.log(promotionToggleEl);

promotionToggleEl.addEventListener('click',function(){
  // console.log(promotionEl.classList.contains('hide'));
  if(promotionEl.classList.contains('hide')){
    // 요소에 hide 클래스 존재
    promotionEl.classList.remove('hide');
  }else{
    // 요소에 hide 클래스
    promotionEl.classList.add('hide');
  }
});

// 스크롤 영역 감지
const spyEls = document.querySelectorAll('#body_layout .scroll-spy');
// console.log(spyEls);

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({ //Scene 감지할 요소 추가
    triggerElement: spyEl, //조여짐 여부를 감지할 요소
    triggerHook: 0.8 //
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

// awards swipe

new Swiper('.awards .swiper-container',{
  slidesPerView:5,
  loop:true,
  spaceBetween:30,
  autoplay:{
    delay : 3000
  },
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});