"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[411],{9702:function(e,a,r){r.d(a,{Z:function(){return ne}});var t=r(67294),i=r(30381),n=r.n(i),o=r(84854),l=r(72574),s=r(87462),c=r(63366),d=r(90512),u=r(94780),p=r(16122),m=r(29602),v=r(1588),g=r(25677);function h(e){return(0,g.Z)("MuiTableContainer",e)}(0,v.Z)("MuiTableContainer",["root"]);var b=r(85893);const f=["className","component"],y=(0,m.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,a)=>a.root})({width:"100%",overflowX:"auto"});var T=t.forwardRef((function(e,a){const r=(0,p.Z)({props:e,name:"MuiTableContainer"}),{className:t,component:i="div"}=r,n=(0,c.Z)(r,f),o=(0,s.Z)({},r,{component:i}),l=(e=>{const{classes:a}=e;return(0,u.Z)({root:["root"]},h,a)})(o);return(0,b.jsx)(y,(0,s.Z)({ref:a,as:i,className:(0,d.Z)(l.root,t),ownerState:o},n))})),Z=r(64680);var A=t.createContext();function R(e){return(0,g.Z)("MuiTable",e)}(0,v.Z)("MuiTable",["root","stickyHeader"]);const w=["className","component","padding","size","stickyHeader"],x=(0,m.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.stickyHeader&&a.stickyHeader]}})((({theme:e,ownerState:a})=>(0,s.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,s.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"}))),C="table";var k=t.forwardRef((function(e,a){const r=(0,p.Z)({props:e,name:"MuiTable"}),{className:i,component:n=C,padding:o="normal",size:l="medium",stickyHeader:m=!1}=r,v=(0,c.Z)(r,w),g=(0,s.Z)({},r,{component:n,padding:o,size:l,stickyHeader:m}),h=(e=>{const{classes:a,stickyHeader:r}=e,t={root:["root",r&&"stickyHeader"]};return(0,u.Z)(t,R,a)})(g),f=t.useMemo((()=>({padding:o,size:l,stickyHeader:m})),[o,l,m]);return(0,b.jsx)(A.Provider,{value:f,children:(0,b.jsx)(x,(0,s.Z)({as:n,role:n===C?null:"table",ref:a,className:(0,d.Z)(h.root,i),ownerState:g},v))})}));var M=t.createContext();function S(e){return(0,g.Z)("MuiTableHead",e)}(0,v.Z)("MuiTableHead",["root"]);const E=["className","component"],H=(0,m.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,a)=>a.root})({display:"table-header-group"}),N={variant:"head"},F="thead";var z=t.forwardRef((function(e,a){const r=(0,p.Z)({props:e,name:"MuiTableHead"}),{className:t,component:i=F}=r,n=(0,c.Z)(r,E),o=(0,s.Z)({},r,{component:i}),l=(e=>{const{classes:a}=e;return(0,u.Z)({root:["root"]},S,a)})(o);return(0,b.jsx)(M.Provider,{value:N,children:(0,b.jsx)(H,(0,s.Z)({as:i,className:(0,d.Z)(l.root,t),ref:a,role:i===F?null:"rowgroup",ownerState:o},n))})})),$=r(41796);function B(e){return(0,g.Z)("MuiTableRow",e)}var L=(0,v.Z)("MuiTableRow",["root","selected","hover","head","footer"]);const G=["className","component","hover","selected"],j=(0,m.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.head&&a.head,r.footer&&a.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${L.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${L.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,$.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,$.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),D="tr",P=t.forwardRef((function(e,a){const r=(0,p.Z)({props:e,name:"MuiTableRow"}),{className:i,component:n=D,hover:o=!1,selected:l=!1}=r,m=(0,c.Z)(r,G),v=t.useContext(M),g=(0,s.Z)({},r,{component:n,hover:o,selected:l,head:v&&"head"===v.variant,footer:v&&"footer"===v.variant}),h=(e=>{const{classes:a,selected:r,hover:t,head:i,footer:n}=e,o={root:["root",r&&"selected",t&&"hover",i&&"head",n&&"footer"]};return(0,u.Z)(o,B,a)})(g);return(0,b.jsx)(j,(0,s.Z)({as:n,ref:a,className:(0,d.Z)(h.root,i),role:n===D?null:"row",ownerState:g},m))}));var O=P,W=r(98216);function J(e){return(0,g.Z)("MuiTableCell",e)}var I=(0,v.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const _=["align","className","component","padding","scope","size","sortDirection","variant"],q=(0,m.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],a[`size${(0,W.Z)(r.size)}`],"normal"!==r.padding&&a[`padding${(0,W.Z)(r.padding)}`],"inherit"!==r.align&&a[`align${(0,W.Z)(r.align)}`],r.stickyHeader&&a.stickyHeader]}})((({theme:e,ownerState:a})=>(0,s.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,$.$n)((0,$.Fq)(e.palette.divider,1),.88):(0,$._j)((0,$.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===a.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===a.variant&&{color:(e.vars||e).palette.text.primary},"footer"===a.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===a.size&&{padding:"6px 16px",[`&.${I.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}))),K=t.forwardRef((function(e,a){const r=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:i="inherit",className:n,component:o,padding:l,scope:m,size:v,sortDirection:g,variant:h}=r,f=(0,c.Z)(r,_),y=t.useContext(A),T=t.useContext(M),Z=T&&"head"===T.variant;let R;R=o||(Z?"th":"td");let w=m;"td"===R?w=void 0:!w&&Z&&(w="col");const x=h||T&&T.variant,C=(0,s.Z)({},r,{align:i,component:R,padding:l||(y&&y.padding?y.padding:"normal"),size:v||(y&&y.size?y.size:"medium"),sortDirection:g,stickyHeader:"head"===x&&y&&y.stickyHeader,variant:x}),k=(e=>{const{classes:a,variant:r,align:t,padding:i,size:n,stickyHeader:o}=e,l={root:["root",r,o&&"stickyHeader","inherit"!==t&&`align${(0,W.Z)(t)}`,"normal"!==i&&`padding${(0,W.Z)(i)}`,`size${(0,W.Z)(n)}`]};return(0,u.Z)(l,J,a)})(C);let S=null;return g&&(S="asc"===g?"ascending":"descending"),(0,b.jsx)(q,(0,s.Z)({as:R,ref:a,className:(0,d.Z)(k.root,n),"aria-sort":S,scope:w,ownerState:C},f))}));var Y=K;function X(e){return(0,g.Z)("MuiTableBody",e)}(0,v.Z)("MuiTableBody",["root"]);const U=["className","component"],V=(0,m.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,a)=>a.root})({display:"table-row-group"}),Q={variant:"body"},ee="tbody";var ae=t.forwardRef((function(e,a){const r=(0,p.Z)({props:e,name:"MuiTableBody"}),{className:t,component:i=ee}=r,n=(0,c.Z)(r,U),o=(0,s.Z)({},r,{component:i}),l=(e=>{const{classes:a}=e;return(0,u.Z)({root:["root"]},X,a)})(o);return(0,b.jsx)(M.Provider,{value:Q,children:(0,b.jsx)(V,(0,s.Z)({className:(0,d.Z)(l.root,t),as:i,ref:a,role:i===ee?null:"rowgroup",ownerState:o},n))})})),re=r(76637),te=r(91811),ie=r(36111);var ne=e=>{let{searchResults:a,handleReserve:r,handleWishlist:i,isFlightInWishlist:s,pageType:c}=e;return t.createElement(T,{component:Z.Z,className:"SearchResults-module--resultsContainer--71ecf"},t.createElement(k,null,t.createElement(z,null,t.createElement(O,null,t.createElement(Y,null,"Airline"),t.createElement(Y,null,"Departure - Arrival"),t.createElement(Y,null,"Time"),t.createElement(Y,null,"Seats Avail."),t.createElement(Y,null,"Price"),t.createElement(Y,null,"Class"),t.createElement(Y,null,"Actions"))),t.createElement(ae,null,a.map(((e,a)=>{return t.createElement(O,{key:a},t.createElement(re.Z,{component:o.Link,to:`/details/${e.id}`,style:{display:"contents"}},t.createElement(Y,null,e.airline),t.createElement(Y,null,e.departureAirport," - ",e.arrivalAirport),t.createElement(Y,null,n()(e.departureTime).format("HH:mm, DD MMM YYYY")),t.createElement(Y,null,e.availableSeats),t.createElement(Y,null,"$",e.price),t.createElement(Y,null,e.class)),t.createElement(Y,null,(d=e.id,"reservation"===c?t.createElement(l.Z,{color:"error",variant:"outlined",onClick:()=>r(d)},"Cancel Reservation"):t.createElement(t.Fragment,null,t.createElement(l.Z,{variant:"outlined",startIcon:s(d)?t.createElement(ie.Z,null):t.createElement(te.Z,null),onClick:()=>i(d)},"Wishlist")))));var d})))))}},3532:function(e){e.exports=JSON.parse('{"P":[{"id":"FL1001","airline":"ANA","departureAirport":"LAX","arrivalAirport":"CDG","departureTime":"2023-12-01T01:00:00","arrivalTime":"2023-12-01T11:00:00","duration":"6h","distance":"5610 miles","class":"Business","availableSeats":19,"price":550,"userReviews":[{"username":"user1","rating":2,"comment":"Great service and comfortable flight 1."}]},{"id":"FL1002","airline":"Air France","departureAirport":"JWA","arrivalAirport":"ZRH","departureTime":"2023-12-18T02:00:00","arrivalTime":"2023-12-18T12:00:00","duration":"6h","distance":"5620 miles","class":"Economy","availableSeats":18,"price":600,"userReviews":[{"username":"user2","rating":3,"comment":"Great service and comfortable flight 2."}]},{"id":"FL1003","airline":"United Airlines","departureAirport":"MIA","arrivalAirport":"CDG","departureTime":"2023-12-21T03:00:00","arrivalTime":"2023-12-21T13:00:00","duration":"6h","distance":"5630 miles","class":"Business","availableSeats":17,"price":370,"userReviews":[{"username":"user3","rating":4,"comment":"Great service and comfortable flight 3."}]},{"id":"FL1004","airline":"Air Serbia","departureAirport":"JFK","arrivalAirport":"BEG","departureTime":"2023-12-17T03:00:00","arrivalTime":"2023-12-17T13:00:00","duration":"10h","distance":"4630 miles","class":"Business","availableSeats":58,"price":400,"userReviews":[{"username":"dusan","rating":4,"comment":"Great service and comfortable flight 3."}]},{"id":"FL1005","airline":"KLM","departureAirport":"JFK","arrivalAirport":"DCA","departureTime":"2023-12-09T03:00:00","arrivalTime":"2023-12-09T13:00:00","duration":"5h","distance":"400 miles","class":"Business","availableSeats":87,"price":210,"userReviews":[{"username":"dusan","rating":4,"comment":"Great service and comfortable flight 3."}]},{"id":"FL1006","airline":"LHR","departureAirport":"JFK","arrivalAirport":"BER","departureTime":"2023-12-04T03:00:00","arrivalTime":"2023-12-04T13:00:00","duration":"5h","distance":"400 miles","class":"Business","availableSeats":7,"price":210,"userReviews":[{"username":"dusan","rating":4,"comment":"Great service and comfortable flight 3."}]},{"id":"FL1007","airline":"Alitalia","departureAirport":"FRA","arrivalAirport":"FCO","departureTime":"2023-12-01T03:00:00","arrivalTime":"2023-12-01T13:00:00","duration":"5h","distance":"400 miles","class":"Business","availableSeats":23,"price":210,"userReviews":[{"username":"dusan","rating":4,"comment":"Great service and comfortable flight 3."}]},{"id":"FL1008","airline":"Lufthansa","departureAirport":"MAD","arrivalAirport":"VIE","departureTime":"2023-12-27T03:00:00","arrivalTime":"2023-12-27T13:00:00","duration":"5h","distance":"400 miles","class":"Business","availableSeats":97,"price":210,"userReviews":[{"username":"user1","rating":4,"comment":"Great service and comfortable flight 3."}]},{"id":"FL1009","airline":"Air Serbia","departureAirport":"BEG","arrivalAirport":"MLA","departureTime":"2023-12-08T03:00:00","arrivalTime":"2023-12-08T13:00:00","duration":"5h","distance":"400 miles","class":"Business","availableSeats":87,"price":210,"userReviews":[{"username":"user2","rating":4,"comment":"Great service and comfortable flight 3."}]},{"id":"FL1010","airline":"Wizz Air","departureAirport":"NWR","arrivalAirport":"AMS","departureTime":"2023-12-05T03:00:00","arrivalTime":"2023-12-05T13:00:00","duration":"5h","distance":"400 miles","class":"Business","availableSeats":87,"price":210,"userReviews":[{"username":"user2","rating":4,"comment":"Great service and comfortable flight 3."}]}]}')}}]);
//# sourceMappingURL=813b70aaf1c9b8c6fafccb22411b0042bfd41f9f-3d626c0714442ce328a8.js.map