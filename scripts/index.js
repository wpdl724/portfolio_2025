// 전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction: 'vertical',
    mousewheel: true,
})
// 수직 스와이프 이동함수
// 수직스와이프변수명.slideTop(이동인덱스값, 지속시간)
// nav.forEach((obj, idx)=>{
//     console.log(obj, idx);
//     obj.addEventListener('click', (e)=>{
//         e.preventDefault(); //a의 href 기본기능 막기
//         wrap.slideTo(idx, 1000);
//     })
// })

// 디자인 슬라이드
const bnr = new Swiper('#bnr_swiper',{
    slidesPerView:2,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})
const sns = new Swiper('#sns_swiper',{
    slidesPerView:2,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})
const detail = new Swiper('#detail_swiper',{
    slidesPerView:2,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})

// sns 프로젝트 클릭시 팝업 진행 (클릭한 이미지가 팝업 이미지로 교체)
// const snsProject = document.querySelectorAll('#bnr_swiper .swiper-slide')
// const popup = document.querySelector('.popup_bg');
// console.log(snsProject,popup);

// for(let sns of snsProject){
//     sns.addEventListener('click',()=>{
//         popup.style.display = 'block';
//         popup.children[0].children[0].src = sns.children[0].src;
//         //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
//         wrap.mousewheel.disable(); // 스크롤 기능 풀기=> eanble()
//     })
// }

// /* popup_bg */
// popup.addEventListener('click', ()=>{
//     popup.style.display='none'
//     wrap.mousewheel.eanable();
// })

/* detail */
