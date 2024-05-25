import{i as d,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const f="43967395-ba8c6739f73e8322e41736fdd",m="https://pixabay.com/api/";async function h(t){const o=`${m}?key=${f}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(o);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}catch(r){throw console.error("Fetch error:",r),r}}let c;function p(t){const o=document.querySelector(".gallery");o.innerHTML=t.map(r=>g(r)).join(""),L()}function g({webformatURL:t,largeImageURL:o,tags:r,likes:i,views:e,comments:n,downloads:a}){return`
  <div class="photo-card">
      <a href="${o}" class="gallery-link">
        <img 
        width="360px";
        height="200px";
        src="${t}" 
        alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${i}</p>
        <p class="info-item"><b>Views:</b> ${e}</p>
        <p class="info-item"><b>Comments:</b> ${n}</p>
        <p class="info-item"><b>Downloads:</b> ${a}</p>
      </div>
  </div>
  `}function s(t,o="info"){d[o]({message:t,position:"topRight",padding:"20px",backgroundColor:"#EF4040"})}function y(){const t=document.querySelector(".gallery");t.innerHTML=""}function b(){c=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){c&&c.refresh()}function w(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".search-form").addEventListener("submit",S),b()});async function S(t){t.preventDefault();const o=t.target.elements.searchQuery.value.trim();if(!o){s("Please enter a search query!","warning");return}y(),w();try{const r=await h(o);if(l(),r.length===0){s("Sorry, there are no images matching your search query. Please try again!","warning");return}p(r)}catch{l(),s("An error occurred while fetching images. Please try again!","error")}}
//# sourceMappingURL=commonHelpers.js.map
