(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();var x=.9996,l=.00669438,X=Math.pow(l,2),Q=Math.pow(l,3),y=l/(1-l),$=Math.sqrt(1-l),p=(1-$)/(1+$),U=Math.pow(p,2),N=Math.pow(p,3),T=Math.pow(p,4),I=Math.pow(p,5),G=1-l/4-3*X/64-5*Q/256,H=3/2*p-27/32*N+269/512*I,J=21/16*U-55/32*T,V=151/96*N-417/128*I,Z=1097/512*T,S=6378137,j="CDEFGHJKLMNPQRSTUVWXX";function Y(o,r,a,n,t,e){if(e=e!==void 0?e:!0,!n&&t===void 0)throw new Error("either zoneLetter or northern needs to be set");if(n&&t!==void 0)throw new Error("set either zoneLetter or northern, but not both");if(e){if(o<1e5||1e6<=o)throw new RangeError("easting out of range (must be between 100 000 m and 999 999 m)");if(r<0||r>1e7)throw new RangeError("northing out of range (must be between 0 m and 10 000 000 m)")}if(n){if(n=n.toUpperCase(),n.length!==1||j.indexOf(n)===-1)throw new RangeError("zone letter out of range (must be between C and X)");t=n>="N"}var i=o-5e5,d=r;t||(d-=1e7);var u=d/x,s=u/(S*G),c=s+H*Math.sin(2*s)+J*Math.sin(4*s)+V*Math.sin(6*s)+Z*Math.sin(8*s),m=Math.sin(c),M=Math.pow(m,2),h=Math.cos(c),E=Math.tan(c),g=Math.pow(E,2),C=Math.pow(E,4),D=1-l*M,P=Math.sqrt(D),O=S/P,R=(1-l)/D,f=p*h*h,w=f*f,v=i/(O*x),_=Math.pow(v,2),B=Math.pow(v,3),F=Math.pow(v,4),A=Math.pow(v,5),q=Math.pow(v,6),K=c-E/R*(_/2-F/24*(5+3*g+10*f-4*w-9*y))+q/720*(61+90*g+298*f+45*C-252*y-3*w),W=(v-B/6*(1+2*g+f)+A/120*(5-2*f+28*g-3*w+8*y+24*C))/h;return{latitude:L(K),longitude:L(W)+z(a)}}function z(o){return(o-1)*6-180+3}function L(o){return o/Math.PI*180}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("coordinates"),r=document.getElementById("result"),a=document.getElementById("formats");o.addEventListener("input",()=>{const t=o.value.match(/N: (\d+),?\s?E: (\d+)/);if(!t){r.textContent='Invalid input format. Please use "N: 4858392, E: 387758" or "N: 4858392 E: 387758"',a.classList.add("hidden");return}const e=parseInt(t[1],10),i=parseInt(t[2],10),d=34,u="T";try{const{latitude:s,longitude:c}=Y(i,e,d,u),m=`${s}, ${c}`,M=k(s,c),h=tt(s,c);document.getElementById("dd").textContent=`Decimal degrees (DD): ${m}`,document.getElementById("dms").textContent=`Degrees, minutes, and seconds (DMS): ${M}`,document.getElementById("dmm").textContent=`Degrees and decimal minutes (DMM): ${h}`,a.classList.remove("hidden"),b("copy-dd",m),b("copy-dms",M),b("copy-dmm",h)}catch(s){console.error("Conversion error: ",s),r.textContent="Error converting coordinates.",a.classList.add("hidden")}})});function k(o,r){const a=o>=0?"N":"S",n=r>=0?"E":"W",t=Math.abs(o),e=Math.abs(r),i=Math.floor(t),d=Math.floor((t-i)*60),u=((t-i-d/60)*3600).toFixed(1),s=Math.floor(e),c=Math.floor((e-s)*60),m=((e-s-c/60)*3600).toFixed(1);return`${i}°${d}'${u}"${a} ${s}°${c}'${m}"${n}`}function tt(o,r){const a=o>=0?"N":"S",n=r>=0?"E":"W",t=Math.abs(o),e=Math.abs(r),i=Math.floor(t),d=((t-i)*60).toFixed(4),u=Math.floor(e),s=((e-u)*60).toFixed(4);return`${i} ${d}'${a}, ${u} ${s}'${n}`}function b(o,r){const a=document.getElementById(o);a.addEventListener("click",()=>{navigator.clipboard.writeText(r).then(()=>{const n=a.textContent;a.textContent="Copied!",setTimeout(()=>{a.textContent=n},1500)}).catch(n=>{console.error("Error copying text: ",n),a.textContent="Error",setTimeout(()=>{a.textContent="Copy"},1500)})})}
