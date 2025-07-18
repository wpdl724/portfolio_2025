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


/* 디자인 프로젝트 */
const popup_bg = document.querySelector('.popup_bg')
const bannerProject = document.querySelectorAll('#project2 .banner img')
const designProject = document.querySelectorAll('#project2 .snsDetail img')
popup_bg.style.display = 'none'/* 팝업 초반 숨기기 */

for(let i of designProject){/* SNS디자인, 상세디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'flex'
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.children[0].style.width = '800px';/* SNS,상세디자인 팝업 출력 크기 */
        popup_bg.children[0].style.height = '800px';
        popup_bg.children[0].children[0].src = i.src;
        wrap.mousewheel.disable();/* 마우스 휠 막기 */
    })
}
for(let i of bannerProject){/* 배너디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'flex'
        popup_bg.children[0].style.width = '1000px';/* 배너디자인 팝업 출력 크기 */
        popup_bg.children[0].style.height = 'max-content';
        popup_bg.children[0].children[0].src = i.src;
        wrap.mousewheel.disable();/* 마우스 휠 막기 */
    })
}

/* 배너디자인 프로젝트 소개 */
const designslide1 = new Swiper('#design_project2 .design1', {
    autoplay:{delay:0, desableOnInteraction: false,},
    speed:4000,
    loop:true,
    slidesPerView:3,
    spaceBetween:10,
})
/* SNS디자인 프로젝트 소개 */
const designslide2 = new Swiper('#design_project2 .design2', {
    autoplay:{delay:0, desableOnInteraction: false, },
    speed:6000,
    loop:true,
    slidesPerView:3,
    spaceBetween:10,
})
/* 상세디자인 프로젝트 소개 */
const designslide3 = new Swiper('#design_project2 .design3', {
    autoplay:{delay:2000,},
    effect:'fade',
    loop:true,
    pagination:{
        el:'#project2 .swiper-pagination',
        type:'bullets',
    },
})