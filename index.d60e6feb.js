console.log("red");var e=0,t=0,n=[],s=!0,a=0,l=function(){s=!0};function d(){if(!0===s){s=!1,-1==--e&&(e=t-1);for(var l=e%t,d=0;d<t;d++){var o=document.getElementsByClassName("slide")[d];o.style.opacity="1",o.style.transform="translateX("+(n[d]+a)+"px)",n[d]=n[d]+a}var r=document.getElementsByClassName("slide")[l];r.style.transform="translateX("+(n[l]-a*t)+"px)",r.style.opacity="0",n[l]=n[l]-a*t}}function o(){if(!0===s){s=!1;var l=e%t;e++;for(var d=0;d<t;d++){var o=document.getElementsByClassName("slide")[d];o.style.opacity="1",o.style.transform="translateX("+(n[d]-a)+"px)",n[d]=n[d]-a}var r=document.getElementsByClassName("slide")[l];r.style.transform="translateX("+(n[l]+a*t)+"px)",r.style.opacity="0",n[l]=n[l]+a*t}}document.addEventListener("DOMContentLoaded",(function(e){document.getElementById("carousel");t=document.getElementsByClassName("slide").length,a=parseInt(window.getComputedStyle(document.getElementById("carousel-container")).width,10)/4+20,document.getElementById("carousel").style.width=t*a+"px";for(var s=0;s<t;s++)n[s]=-a,document.getElementsByClassName("slide")[s].addEventListener("transitionend",l,!0),document.getElementsByClassName("slide")[s].addEventListener("webkitTransitionEnd",l,!0),document.getElementsByClassName("slide")[s].addEventListener("oTransitionEnd",l,!0),document.getElementsByClassName("slide")[s].addEventListener("MSTransitionEnd",l,!0);document.getElementById("carousel").insertBefore(document.getElementById("carousel").children[1],document.getElementById("carousel").children[0]),document.getElementById("prev").addEventListener("click",d,!0),document.getElementById("next").addEventListener("click",o,!0)})),setInterval(o,2e3);
//# sourceMappingURL=index.d60e6feb.js.map
