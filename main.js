/* 스크롤에 따라 이미지 움직임
let mainText = document.querySelector("main")

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrollY",value);
    if(value>50){
        mainText.style.animation = "disappear 1s ease-out forwards"

    }else{
        mainText.style.animation='slide 1s esae-out'
    }
})*/


let horizontalBar = document.getElementById("horizontal_underline");
let horizontalMenus = document.querySelectorAll("content ul li a ");



function horizontalIndicator(e) {
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) =>
    horizontalIndicator(e.currentTarget)
  )
);

