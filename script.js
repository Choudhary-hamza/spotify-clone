document.addEventListener("DOMContentLoaded", function () {
    let plus=document.body.querySelector(".fa-plus");
    let plus1=document.body.querySelector(".fa-plus1");
    function display() {
        plus1.style.display="flex";
    }
    function check() {
        setTimeout(() => {
            if(!plus.matches(":hover") && !plus1.matches(":hover")){
                plus1.style.display="none";
            }
        }, 200);
    }
    plus.addEventListener("click",display);
    plus.addEventListener("mouseleave",check);
    plus1.addEventListener(".mouseleave",check);
    plus1.addEventListener("mouseover",display);

})