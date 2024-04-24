
// //클릭시 이동
// let gnb=document.querySelectorAll(".link");
// gnb.forEach((link)=>{
//     link.addEventListener("click", (e)=>{
//         e.preventDefault();
//         let target=e.currentTarget.getAttribute("href");
//         let targetPosition=document.querySelector(target).offsetTop;
//         window.scrollTo({top: targetPosition-10, behavior:"smooth"})
//     })
// })


//이미지 팝업창
let figures=document.querySelectorAll(".figure");
let overlay=document.querySelector(".overlay");
let close=document.querySelector(".ban_close");
let popimg=document.querySelector(".popimg");
let body=document.querySelector("body");
// let fl=document.querySelector(".title_fl")

figures.forEach((fi)=>{
    fi.addEventListener("click", (e)=>{
        let src=e.currentTarget.getAttribute("src")
        console.log(src)
        overlay.style.display="block";
        popimg.setAttribute("src", src);
        body.style.overflow="hidden";
    })
})

close.addEventListener("click",()=>{
    overlay.style.display="none";
    body.style.overflow="auto";
})

//메뉴 클릭이동
$(function(){
    $(".link").click(function(){
        let target=$(this).attr("href");
        let tarPos=$(target).offset().top;
        $("html, body").stop().animate({scrollTop:tarPos},700);
        return false;
    })
})

//footer 롤링
const $wrap=$(".f_wrap");
const $list=$(".title_fl");
let wrapWidth=$wrap.width();
let listWidth=$list.width();
let speed=20;
let $clone=$list.clone();
$wrap.append($clone);
if(listWidth<wrapWidth){
 let listCount=Math.ceil(wrapWidth/listWidth)
 for(let i=2 ; i<listCount ; i++){
  $clone=$list.clone();
  $wrap.append($clone);
 }
}

$wrap.find(".title_fl").css({animation:`rollingBanner ${listWidth/speed}s linear infinite`});

// $wrap.on('mouseenter', function(){
//   $wrap.find(".title_fl").css({'animation-play-state':'paused'})
// })
//   $wrap.mouseleave(function(){
//  $wrap.find(".title_fl").css({'animation-play-state':'running'})
// })

