"use strict";var circlelize=function(e){for(var o=document.querySelector(".circles"),t=e.clientHeight,n=5*Math.round(t/window.screen.width),r="",a=0;a<n;a++){var c=Math.floor(31*Math.random())+70,i=c,l=Math.floor(101*Math.random())-30,u=Math.floor(131*Math.random())-40,d=Math.floor(361*Math.random());r+='<div class="circle" style="width: '.concat(c,"vw; height: ").concat(i,"vw; left: ").concat(l,"%; top: ").concat(u,"%; background: linear-gradient(").concat(d,'deg, rgba(255,255,255, 0) 0%, rgba(0,0,0, 0.03) 100%);"></div>')}o.innerHTML=r},blogContainer=document.querySelector(".blog-container");blogContainer&&circlelize(blogContainer);var postContainer=document.querySelector(".post-container");postContainer&&circlelize(postContainer);var aboutContainer=document.querySelector(".about-container");aboutContainer&&circlelize(aboutContainer);var localContainer=document.querySelector(".local-container");localContainer&&circlelize(localContainer);var techContainer=document.querySelector(".tech-container");techContainer&&circlelize(techContainer);