(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{215:function(n,e,t){"use strict";t.r(e);t(49),t(5);var o=t(4),i=t(24),a=t(165);window._info=window._info||{};const s=[],c=[{endpoint:"list_payments"},{endpoint:"calculate_shipping"}];Object.keys(a.a).length&&c.push({endpoint:"apply_discount",reqOptions:{method:"post",data:{utm:a.a}}}),c.forEach((({endpoint:n,reqOptions:e})=>{const t={};window._info[n]=t;const a=new Promise((a=>{Object(o.c)({url:"/".concat(n,".json"),...e,axiosConfig:{timeout:1e4}}).then((({data:e})=>{const{result:o}=e;Array.isArray(o)&&o.forEach((({error:e,response:o})=>{if(!e){let e,i;switch(n){case"calculate_shipping":e="free_shipping_from_value",i=o[e],"number"==typeof i&&(void 0===t[e]||i<t[e])&&(t[e]=i);break;case"list_payments":e="installments_option",i=o[e],i&&(!t[e]||i.monthly_interest<t[e].monthly_interest||i.max_number>t[e].max_number)&&(t[e]=i),e="discount_option",i=o[e],i&&(!t[e]||i.value>t[e].value)&&(t[e]=i);break;default:e="available_extra_discount",i=o[e],i&&(!t[e]||i.value>t[e].value)&&(t[e]=i)}}})),i.a.emit("info:".concat(n),t)})).catch((e=>{console.error(e),i.a.emit("info:".concat(n),e)})).finally(a)}));s.push(a)})),Promise.all(s).then((()=>i.a.emit("info",window._info)))}}]);
//# sourceMappingURL=98eab8d3b784d4104e96.js.map