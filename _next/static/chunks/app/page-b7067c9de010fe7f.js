(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1118:(t,e,n)=>{Promise.resolve().then(n.bind(n,5593))},5593:(t,e,n)=>{"use strict";n.d(e,{default:()=>a});var o=n(5155),i=n(2115),r=n(1424);function a(){return(0,i.useEffect)(()=>{(async()=>{let{initNotificationCenter:t}=await n.e(187).then(n.t.bind(n,3334,23)),e={connectionInheritance:"disabled",options:{brokerUrl:"https://ngunday.github.io/ncweb/web-broker",timeout:3e5}};fetch("https://ngunday.github.io/ncweb/default.layout.fin.json").then(n=>{try{n.json().then(n=>{n&&(e={...e,platform:{layoutSnapshot:n}}),(0,r.N)(e).then(e=>{let n=document.querySelector("#notification_center_container");n&&t({finContext:e,serviceId:"test-channel",container:n}).then(()=>{let t=document.querySelector("#layout_container");t&&e.Platform.Layout.init({container:t})})})})}catch(t){console.error(t)}})})()},[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{id:"layout_container",style:{width:"100%",height:"100%",top:0,left:0,position:"absolute",overflow:"hidden"}}),(0,o.jsx)("div",{id:"notification_center_container",style:{position:"absolute",width:"345px",height:"100%",right:"0",top:"0"}})]})}}},t=>{var e=e=>t(t.s=e);t.O(0,[251,34,441,684,358],()=>e(1118)),_N_E=t.O()}]);