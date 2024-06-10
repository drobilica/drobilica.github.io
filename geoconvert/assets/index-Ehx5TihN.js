(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();var S=.9996,u=.00669438,X=Math.pow(u,2),Q=Math.pow(u,3),y=u/(1-u),C=Math.sqrt(1-u),p=(1-C)/(1+C),U=Math.pow(p,2),x=Math.pow(p,3),I=Math.pow(p,4),P=Math.pow(p,5),G=1-u/4-3*X/64-5*Q/256,H=3/2*p-27/32*x+269/512*P,J=21/16*U-55/32*I,V=151/96*x-417/128*P,Z=1097/512*I,L=6378137,j="CDEFGHJKLMNPQRSTUVWXX";function Y(o,n,i,a,t,e){if(e=e!==void 0?e:!0,!a&&t===void 0)throw new Error("either zoneLetter or northern needs to be set");if(a&&t!==void 0)throw new Error("set either zoneLetter or northern, but not both");if(e){if(o<1e5||1e6<=o)throw new RangeError("easting out of range (must be between 100 000 m and 999 999 m)");if(n<0||n>1e7)throw new RangeError("northing out of range (must be between 0 m and 10 000 000 m)")}if(a){if(a=a.toUpperCase(),a.length!==1||j.indexOf(a)===-1)throw new RangeError("zone letter out of range (must be between C and X)");t=a>="N"}var s=o-5e5,c=n;t||(c-=1e7);var l=c/S,r=l/(L*G),d=r+H*Math.sin(2*r)+J*Math.sin(4*r)+V*Math.sin(6*r)+Z*Math.sin(8*r),h=Math.sin(d),M=Math.pow(h,2),m=Math.cos(d),E=Math.tan(d),g=Math.pow(E,2),D=Math.pow(E,4),$=1-u*M,O=Math.sqrt($),T=L/O,R=(1-u)/$,f=p*m*m,w=f*f,v=s/(T*S),_=Math.pow(v,2),B=Math.pow(v,3),F=Math.pow(v,4),A=Math.pow(v,5),q=Math.pow(v,6),K=d-E/R*(_/2-F/24*(5+3*g+10*f-4*w-9*y))+q/720*(61+90*g+298*f+45*D-252*y-3*w),W=(v-B/6*(1+2*g+f)+A/120*(5-2*f+28*g-3*w+8*y+24*D))/m;return{latitude:N(K),longitude:N(W)+z(i)}}function z(o){return(o-1)*6-180+3}function N(o){return o/Math.PI*180}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("coordinates"),n=document.getElementById("result"),i=document.getElementById("formats");o.addEventListener("input",()=>{const t=o.value.match(/N: (\d+),?\s?E: (\d+)/);if(!t){n.textContent='Invalid input format. Please use "N: 4858392, E: 387758" or "N: 4858392 E: 387758"',i.classList.add("hidden");return}const e=parseInt(t[1],10),s=parseInt(t[2],10),c=34,l="T";try{const{latitude:r,longitude:d}=Y(s,e,c,l),h=`${r}, ${d}`,M=k(r,d),m=tt(r,d);document.getElementById("dd").textContent=`Decimal degrees (DD): ${h}`,document.getElementById("dms").textContent=`Degrees, minutes, and seconds (DMS): ${M}`,document.getElementById("dmm").textContent=`Degrees and decimal minutes (DMM): ${m}`,i.classList.remove("hidden"),b("copy-dd",h),b("copy-dms",M),b("copy-dmm",m)}catch(r){console.error("Conversion error: ",r),n.textContent="Error converting coordinates.",i.classList.add("hidden")}})});function k(o,n){const i=o>=0?"N":"S",a=n>=0?"E":"W",t=Math.abs(o),e=Math.abs(n),s=Math.floor(t),c=Math.floor((t-s)*60),l=((t-s-c/60)*3600).toFixed(1),r=Math.floor(e),d=Math.floor((e-r)*60),h=((e-r-d/60)*3600).toFixed(1);return`${s}°${c}'${l}"${i} ${r}°${d}'${h}"${a}`}function tt(o,n){const i=o>=0?"N":"S",a=n>=0?"E":"W",t=Math.abs(o),e=Math.abs(n),s=Math.floor(t),c=((t-s)*60).toFixed(4),l=Math.floor(e),r=((e-l)*60).toFixed(4);return`${s} ${c}'${i}, ${l} ${r}'${a}`}function b(o,n){document.getElementById(o).addEventListener("click",()=>{navigator.clipboard.writeText(n).then(()=>{console.log(`Copied: ${n}`)}).catch(i=>{console.error("Error copying text: ",i)})})}
