(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const x="wss://relay.drobilica.com:8080",T="turn:relay.drobilica.com:3478",$="forky",N="3kerQa28CjgX",k={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:T,username:$,credential:N}]},J={ordered:!0,maxRetransmits:0},C=16384,U=4e3,R=5,h=3e3,j=document.getElementById("generateRoomBtn"),z=document.getElementById("roomCode"),A=document.getElementById("copyRoomUrlBtn"),M=document.getElementById("copyRoomIdBtn"),W=document.getElementById("joinRoomInput"),_=document.getElementById("joinRoomBtn"),q=document.getElementById("yourFileInput"),Y=document.getElementById("yourFiles"),G=document.getElementById("theirFiles"),D=document.getElementById("roomDisplay"),E=document.getElementById("uploadProgressContainer"),K=document.getElementById("uploadProgress"),Q=document.getElementById("uploadProgressPercent");let n=null,c=null,s=null,r=null,y=[],S=0,m=[],d=0;function v(){s&&s.close(),s=new WebSocket(x),s.onopen=()=>{console.log("WebSocket connected"),s.send(JSON.stringify({type:"join",room:r})),console.log(`Joined room: ${r}`),f()},s.onmessage=async e=>{let o;try{const a=await e.data.text();o=JSON.parse(a)}catch(a){console.error("Failed to parse message as JSON:",e.data),console.error(a);return}if(o.room!==r){console.log(`Ignoring message for room ${o.room}`);return}o.type==="offer"?await X(o.offer):o.type==="answer"?await Z(o.answer):o.type==="candidate"&&V(o.candidate)},s.onerror=e=>{console.error("WebSocket error:",e)},s.onclose=()=>{console.log("WebSocket closed")}}function f(){n&&n.close(),console.log("Initializing peer connection");try{n=new RTCPeerConnection(k),c=n.createDataChannel("fileTransfer",J),b(),n.ondatachannel=e=>{c=e.channel,b()},n.onicecandidate=e=>{e.candidate&&s.send(JSON.stringify({type:"candidate",candidate:e.candidate,room:r}))},F()}catch(e){console.error("Failed to create peer connection:",e),d<R?(d++,setTimeout(f,h)):(console.error("Failed to create peer connection. Retry limit reached."),I())}}function b(){c.onopen=()=>{for(console.log("Data channel open"),d=0;y.length>0;){const e=y.shift();ie(e)}},c.onclose=()=>{console.log("Data channel closed"),d<R?(d++,setTimeout(f,h)):(console.error("Data channel closed. Retry limit reached."),I())},c.onerror=e=>{console.error("Data channel error:",e),d<R?(d++,setTimeout(f,h)):(console.error("Data channel error. Retry limit reached."),I())},c.onmessage=H}function H(e){const o=JSON.parse(e.data);o.type==="file"&&ne(o)}async function F(){try{const e=await n.createOffer();await n.setLocalDescription(e),s.send(JSON.stringify({type:"offer",offer:n.localDescription,room:r}))}catch(e){console.error("Error creating offer:",e),setTimeout(F,h)}}async function X(e){n||f();try{n.signalingState!=="stable"&&(console.warn("Peer connection state is not stable, resetting..."),await n.setLocalDescription({type:"rollback"})),await n.setRemoteDescription(new RTCSessionDescription(e));const o=await n.createAnswer();for(await n.setLocalDescription(o),s.send(JSON.stringify({type:"answer",answer:n.localDescription,room:r}));m.length>0;)await n.addIceCandidate(m.shift())}catch(o){console.error("Error handling offer:",o)}}async function Z(e){try{if(n.signalingState==="have-local-offer")for(await n.setRemoteDescription(new RTCSessionDescription(e));m.length>0;)await n.addIceCandidate(m.shift());else console.warn("Received answer in unexpected state:",n.signalingState)}catch(o){console.error("Error handling answer:",o)}}function V(e){n.remoteDescription&&n.remoteDescription.type?n.addIceCandidate(new RTCIceCandidate(e)).catch(o=>{console.error("Error adding received ICE candidate",o)}):(console.log("Queueing candidate until remote description is set"),m.push(e))}function ee(e){const o=e.target.files[0];oe(o)}function oe(e){const o=new FileReader;let a=0;E.classList.remove("hidden"),L(0),O({name:e.name,data:""},Y,!0),o.onload=()=>{if(c&&c.readyState==="open"){const t=o.result;c.send(JSON.stringify({type:"file",name:e.name,chunk:t,size:e.size,room:r})),a+=C,L(Math.min(a/e.size*100,100)),a<e.size?u(a):(console.log("File sent successfully"),E.classList.add("hidden"))}else console.log("Data channel is not open, queuing file"),y.push({file:e,offset:a})};function u(t){const i=e.slice(t,t+C);o.readAsArrayBuffer(i)}u(0)}function L(e){K.value=e,Q.textContent=`${e.toFixed(2)}%`}let g=[],p="";function ne(e){if(p||(p=e.name),e.room!==r){console.log(`Ignoring file not intended for this room. Current room: ${r}, message room: ${e.room}`);return}if(g.push(e.chunk),g.length*C>=e.size){const o=new Blob(g);O({name:p,data:URL.createObjectURL(o)},G),g=[],p=""}}function O(e,o,a){if(Array.from(o.children).find(l=>l.textContent.includes(e.name)))return;const t=document.createElement("li"),i=document.createElement("a");if(i.href=e.data||"#",i.download=e.name,i.textContent=e.name,t.appendChild(i),o.appendChild(t),!a){const l=document.createElement("button");l.textContent="Download",l.className="bg-blue-500 text-white px-2 py-1 rounded ml-2",l.addEventListener("click",()=>{const w=document.createElement("a");w.href=e.data,w.download=e.name,w.click()}),t.appendChild(l)}}function te(){D.textContent=`Joined Room: ${r}`;const e=`${window.location.origin}/trade?room=${r}`;navigator.clipboard.writeText(e).then(()=>console.log("Room URL copied!")),console.log(`Copied room URL: ${e}`)}function P(e){console.log(`Joining room: ${e}`),D.textContent=`Joined Room: ${e}`,v()}j.addEventListener("click",()=>{const e=Date.now();e-S>=U?(n&&(n.close(),n=null),s&&(s.close(),s=null),r=Math.random().toString(36).substring(2,10),z.value=r,console.log(`Generated room: ${r}`),te(),v(),S=e):console.log("Please wait before generating a new room.")});A.addEventListener("click",()=>{const e=`${window.location.origin}/trade?room=${r}`;navigator.clipboard.writeText(e).then(()=>console.log("Room URL copied!")),console.log(`Copied room URL: ${e}`)});M.addEventListener("click",()=>{navigator.clipboard.writeText(r).then(()=>console.log("Room ID copied!")),console.log(`Copied room ID: ${r}`)});_.addEventListener("click",()=>{const e=W.value.trim();e&&(r=e,P(r))});q.addEventListener("change",ee);const re=new URLSearchParams(window.location.search),B=re.get("room");B&&(r=B,P(r));function ie(e){c&&c.readyState==="open"?c.send(JSON.stringify(e)):(console.log("Data channel is not open, queuing file"),y.push(e))}function I(){n&&(n.close(),n=null),c&&(c.close(),c=null),console.log("Cleanup completed.")}
