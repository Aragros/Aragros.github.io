
window.onscroll = function(){scrollFunction()};
var height = 50;
function scrollFunction(){
    if(document.body.scrollTop > height || document.documentElement.scrollTop > height){
        document.getElementById("mainNavBar").style.background = "var(--green)";
    }
    else{
        document.getElementById("mainNavBar").style.background = "transparent";
    }
}
