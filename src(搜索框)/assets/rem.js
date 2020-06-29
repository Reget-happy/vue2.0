function rem(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/3.6+"px"
}
rem();
window.onresize=rem;