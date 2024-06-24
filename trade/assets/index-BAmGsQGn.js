(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();let r,s,u,d,l,c;const S="wss://relay.drobilica.com:8080",L="turn:relay.drobilica.com:3478",w="forky",v="3kerQa28CjgX",h={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:L,username:w,credential:v}]};function b(){c=new WebSocket(S),c.onopen=()=>{console.log("WebSocket connection opened")},c.onerror=e=>{console.error("WebSocket error:",e)},c.onmessage=async e=>{const n=JSON.parse(await e.data.text());if(console.log("Received message: ",n),n.room!==l){console.warn(`Ignoring message for room ${n.room} in room ${l}`);return}switch(n.type){case"offer":B(n.offer);break;case"answer":R(n.answer);break;case"candidate":O(n.candidate);break;default:console.error("Unknown message type:",n.type)}}}function y(e){l=e}function I(){console.log("Initializing local connection"),r=new RTCPeerConnection(h),u=r.createDataChannel("sendDataChannel"),u.onopen=g,u.onclose=g,r.onicecandidate=e=>{e.candidate&&c.send(JSON.stringify({type:"candidate",candidate:e.candidate,room:l}))},r.createOffer().then(e=>r.setLocalDescription(e)).then(()=>{c.send(JSON.stringify({type:"offer",offer:r.localDescription,room:l}))})}function E(){console.log("Initializing remote connection"),s=new RTCPeerConnection(h),s.ondatachannel=N,s.onicecandidate=e=>{e.candidate&&c.send(JSON.stringify({type:"candidate",candidate:e.candidate,room:l}))}}function B(e){s||E(),s.setRemoteDescription(new RTCSessionDescription(e)).then(()=>s.createAnswer()).then(n=>s.setLocalDescription(n)).then(()=>{c.send(JSON.stringify({type:"answer",answer:s.localDescription,room:l}))})}function R(e){if(r.signalingState!=="have-local-offer"){console.error("Cannot set remote answer in state",r.signalingState);return}r.setRemoteDescription(new RTCSessionDescription(e)),m()}function O(e){const n=new RTCIceCandidate(e),i=r.signalingState!=="closed"?r:s;i&&i.signalingState!=="closed"&&i.addIceCandidate(n)}function g(e){u.readyState==="open"?(document.querySelector('label[for="fileInput"]').classList.remove("hidden"),document.getElementById("fileInput").classList.remove("hidden")):(document.querySelector('label[for="fileInput"]').classList.add("hidden"),document.getElementById("fileInput").classList.add("hidden"))}function N(e){d=e.channel,d.onmessage=k,d.onopen=p,d.onclose=p}function p(e){d.readyState==="open"?(document.querySelector('label[for="fileInput"]').classList.remove("hidden"),document.getElementById("fileInput").classList.remove("hidden"),m()):(document.querySelector('label[for="fileInput"]').classList.add("hidden"),document.getElementById("fileInput").classList.add("hidden"))}function k(e){const n=JSON.parse(e.data);F(n,document.getElementById("partnerFilesList"))}function F(e,n){const i=document.createElement("li"),o=document.createElement("a");o.href=e.data,o.download=e.name,o.textContent=e.name,i.appendChild(o),n.appendChild(i),document.getElementById("fileTradeBox").classList.remove("hidden")}function m(){document.getElementById("fileTradeBox").classList.remove("hidden")}const D=document.getElementById("fileInput"),T=document.getElementById("generateRoomButton"),J=document.getElementById("joinRoomButton"),C=document.getElementById("roomNumberInput"),x=document.getElementById("yourFilesList");document.getElementById("partnerFilesList");D.addEventListener("change",U);T.addEventListener("click",P);J.addEventListener("click",q);function P(){const e=A();y(e),C.value=e,I(),m()}function q(){const e=C.value.trim();e?(y(e),I(),m()):alert("Please enter a room number.")}function U(e){Array.from(e.target.files).slice(0,10).forEach(i=>{const o=new FileReader;o.onloadend=()=>{const t={name:i.name,data:o.result};localStorage.setItem("uploadedFile",JSON.stringify(t)),z(t,x),sendChannel.send(JSON.stringify(t))},o.readAsDataURL(i)})}function z(e,n){const i=document.createElement("li"),o=document.createElement("a");o.href=e.data,o.download=e.name,o.textContent=e.name,i.appendChild(o),n.appendChild(i),document.getElementById("fileTradeBox").classList.remove("hidden")}function A(){return Math.random().toString(36).substring(2,11)}b();
