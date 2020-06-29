function rem(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/15.3+"px"
}
rem();
window.onresize=rem;