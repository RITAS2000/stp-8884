/* empty css                      */import{S as n,N as c,K as l,A as d}from"./assets/vendor-BcDFKbXm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();n.use([c,l]);new n(".swiper-ingame",{slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},a11y:!0,breakpoints:{1200:{slidesPerView:2.5}}});const u=document.getElementById("videoPreviewWrapper"),s=document.getElementById("videoWrapper");s.innerHTML;u.addEventListener("click",()=>{s.innerHTML=`
    <iframe
    width="100%" 
    src="https://www.youtube.com/embed/Wwge92GWJds?autoplay=1"
    frameborder="0"
     allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `});const f=new d("#faq-accordion-container",{duration:500,elementClass:"faq-item",triggerClass:"faq-button",panelClass:"faq-text-container"});f.open(0);
//# sourceMappingURL=index.js.map
