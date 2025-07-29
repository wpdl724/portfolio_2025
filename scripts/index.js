// 전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction: 'vertical',
    mousewheel: true,
})


/* 디자인 프로젝트 */
const popup = document.querySelector('.popup_bg')
const bannerProject = document.querySelectorAll('#design_project2 .swiper-slide img')
console.log(popup,bannerProject);

// popup.style.display = 'none'/* 팝업 초반 숨기기 */

for(let i of bannerProject){
    i.addEventListener('click',()=>{
        popup.style.display = 'block';
        popup.children[0].children[0].src = i.src;
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();//스크롤 풀기 = enable();
    })
}

popup.addEventListener('click',()=>{
    popup.style.display='none'
    wrap.mousewheel.enable();
})

/* 디자인 슬라이드  */
/* 배너디자인 프로젝트 소개 1 */
const designslide1 = new Swiper('#design_project2 .design1_banner', {
    autoplay:{delay:5000,},
    loop:true,
    slidesPerView:3,
    spaceBetween:10,
})
/* SNS디자인 프로젝트 소개 2 */
const designslide2 = new Swiper('#design_project2 .design2_snsDetail', {
    autoplay:{delay:5000,},
    loop:true,
    slidesPerView:3,
    spaceBetween:10,
})
/* 상세디자인 프로젝트 소개 3 */
const designslide3 = new Swiper('#design_project2 .design3_snsDetail', {
    autoplay:{delay:5000,},
    loop:true,
    slidesPerView:1,
    spaceBetween:0,
})
