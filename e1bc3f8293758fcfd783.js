/*! For license information please see e1bc3f8293758fcfd783.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{353:function(e,t,n){"use strict";n.r(t);n(5),n(163);var o=n(1),s=n(31),c=n.n(s),r=n(289);t.default=(e={},t="search-engine")=>{const n=document.getElementById(t);if(n){const s=document.getElementById("".concat(t,"-dock"));let a;const i=window.storefront&&window.storefront.getScopedSlots,d=new URLSearchParams(window.location.search),l={...e.props,term:d.get("term"),page:parseInt(d.get("page"),10)||1,brands:d.getAll("brands[]"),categories:d.getAll("categories[]")};["brands","categories"].forEach((e=>{if(n.dataset[e]){try{l[e]=JSON.parse(n.dataset[e])}catch(e){return void console.error(e)}l[e]&&l[e].length<2&&(l["isFixed".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))]=!0),l.defaultSort="sales",l.hasPopularItems=!1}}));const{resource:h}=window.document.body.dataset;switch(h){case"brands":case"categories":if(!l[h]||!l[h].length)return void console.error(new Error("Skipping SearchEngine with empty '".concat(h,"' filter")))}const u=new c.a({data:{countRequests:0,canShowItems:!s,term:l.term},render(e){const c=this,d={"update:term"(e){c.term=e}};return s&&(d.fetch=function({fetching:e}){e.then((e=>{c.countRequests++;const t=()=>{c.canShowItems=!0,Object(o.$)("#search-engine-snap").remove()};if(!c.canShowItems)if(c.countRequests>1)t();else if(e&&e.hits)if(a&&a.length===e.hits.hits.length){let n=!0;const{hits:o}=e.hits;for(let e=0;e<o.length;e++)if(!a.find('[data-product-id="'.concat(o[e]._id,'"]')).length){n=!1;break}n||t()}else t()}))}),e(r.a,{attrs:{id:s?null:t},props:{...l,term:c.term,canShowItems:c.canShowItems,loadMoreSelector:s?"#search-engine-load":null},on:d,scopedSlots:"function"==typeof i?i(n,e,!s):void 0})}});if(s){Object(o.$)(n).append(Object(o.$)("<div>",{id:"search-engine-load"}));const e=()=>u.$mount(s);if(a=Object(o.$)("#search-engine-snap .product-item"),a.length){const t=new window.MutationObserver((()=>{clearTimeout(n),t.disconnect(),setTimeout(e,150)}));t.observe(a[0],{childList:!0});const n=setTimeout((()=>{t.disconnect(),e()}),3e3)}else e()}else u.$mount(n)}}}}]);
//# sourceMappingURL=e1bc3f8293758fcfd783.js.map