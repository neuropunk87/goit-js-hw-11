import{a as y,S as g,i}from"./assets/vendor-Cip_4kvj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="45141549-5d04e9bb650dc04154699f876",v="https://pixabay.com/api/";function L(o){const s={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(v,{params:s}).then(t=>t.data)}let l=null;const f=document.querySelector(".loader"),p=document.querySelector(".gallery");function S(o){const s=o.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <div>
          <p class="info-title">Likes</p>
          <span class="info-stats">${t.likes}</span>
        </div>
        <div>
          <p class="info-title">Views</p>
          <span class="info-stats">${t.views}</span>
        </div>
        <div>
          <p class="info-title">Comments</p>
          <span class="info-stats">${t.comments}</span>
        </div>
        <div>
          <p class="info-title">Downloads</p>
          <span class="info-stats">${t.downloads}</span>
        </div>
      </div>
    </li>
  `).join("");p.insertAdjacentHTML("beforeend",s),l?l.refresh():l=new g(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){p.innerHTML=""}function b(){f.classList.remove("hidden")}function m(){f.classList.add("hidden")}const u=document.querySelector("main");let n=document.querySelector(".loader");n||(n=document.createElement("div"),n.className="loader hidden",u.insertBefore(n,u.querySelector(".gallery")));const c=document.querySelector(".form"),w=c.querySelector('input[name="search-text"]');m();c.addEventListener("submit",function(o){o.preventDefault();const s=w.value.trim();if(!s){i.warning({message:"Please enter a search query!",position:"topRight"});return}q(),b(),L(s).then(function(t){if(!t.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(t.hits)}).catch(function(){i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(function(){m(),c.reset()})});
//# sourceMappingURL=index.js.map
