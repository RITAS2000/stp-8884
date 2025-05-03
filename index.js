/* empty css                      */import{S as a,N as l,K as d,A as u}from"./assets/vendor-BcDFKbXm.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();a.use([l,d]);new a(".swiper-ingame",{slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},a11y:!0,breakpoints:{1200:{slidesPerView:2.5}}});const f=document.getElementById("videoPreviewWrapper"),c=document.getElementById("videoWrapper");c.innerHTML;f.addEventListener("click",()=>{c.innerHTML=`
    <iframe
    width="100%" 
    src="https://www.youtube.com/embed/Wwge92GWJds?autoplay=1"
    frameborder="0"
     allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `});const p=new u("#faq-accordion-container",{duration:500,elementClass:"faq-item",triggerClass:"faq-button",panelClass:"faq-text-container"});p.open(0);const m=document.querySelector(".battle-girl"),y=document.querySelector("#battle"),w=document.querySelector(".battle-boy"),g=new IntersectionObserver((n,r)=>{n.forEach(o=>{o.isIntersecting&&(m.classList.add("visible"),setTimeout(()=>{w.classList.add("visible")},1500),r.disconnect())})},{threshold:.3});g.observe(y);
//# sourceMappingURL=index.js.map
