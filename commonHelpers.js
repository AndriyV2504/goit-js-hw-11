import{i as u,S as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const m="43967395-ba8c6739f73e8322e41736fdd",h="https://pixabay.com/api/";async function p(r){const o=`${h}?key=${m}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(o);if(!t.ok)throw new Error("Network response was not ok");return(await t.json()).hits}catch(t){throw console.error("Fetch error:",t),t}}let c;function g(r){const o=document.querySelector(".gallery");o.innerHTML=r.map(t=>y(t)).join(""),b()}function y({webformatURL:r,largeImageURL:o,tags:t,likes:i,views:e,comments:n,downloads:a}){return`
        <div class="photo-card">
            <a href="${o}" class="gallery-link">
                <img 
                  width="360px";
                  height="200px";
                  src="${r}" 
                  alt="${t}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${i}</p>
                <p class="info-item"><b>Views:</b> ${e}</p>
                <p class="info-item"><b>Comments:</b> ${n}</p>
                <p class="info-item"><b>Downloads:</b> ${a}</p>
            </div>
        </div>
    `}function s(r,o="info"){u[o]({message:r,position:"topRight",padding:"20px",backgroundColor:"#EF4040"})}function L(){const r=document.querySelector(".gallery");r.innerHTML=""}function d(){c=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){c&&c.refresh()}function w(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{d()});document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".search-form").addEventListener("submit",v),d()});async function v(r){r.preventDefault();const o=r.target.elements.searchQuery.value.trim();if(!o){s("Please enter a search query!","warning");return}L(),w();try{const t=await p(o);if(l(),t.length===0){s("Sorry, there are no images matching your search query. Please try again!","warning");return}g(t)}catch{l(),s("An error occurred while fetching images. Please try again!","error")}}
//# sourceMappingURL=commonHelpers.js.map
