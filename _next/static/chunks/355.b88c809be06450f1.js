"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{5593:(t,n,e)=>{e.r(n),e.d(n,{default:()=>i});var o=e(5155),a=e(2115),r=e(1424),c=e(3945);function i(){return(0,a.useEffect)(()=>{(async()=>{let{initNotificationCenter:t}=await Promise.resolve().then(e.t.bind(e,3945,23)),n={connectionInheritance:"disabled",options:{brokerUrl:"https://ngunday.github.io/ncweb/web-broker",timeout:3e5}};fetch("https://ngunday.github.io/ncweb/default.layout.fin.json").then(e=>{try{e.json().then(e=>{e&&(n={...n,platform:{layoutSnapshot:e}}),(0,r.N)(n).then(n=>{let e=document.querySelector("#notification_center_container");e&&t({finContext:n,serviceId:"test-channel",container:e,theme:{palette:{brandPrimary:"#641E55",brandSecondary:"#22151F",backgroundPrimary:"#22151F",statusSuccess:"#207735",statusWarning:"#FE7301",statusCritical:"#C21313",statusActive:"#641E55",inputBackground:"#31242E",inputColor:"#FFFFFF",inputPlaceholder:"rgba(255, 255, 255, 0.75)",inputDisabled:"rgba(49, 36, 46, 0.502)",inputFocused:"rgba(255, 255, 255, 0.75)",inputBorder:"#4C424A",textDefault:"#FFFFFF",textHelp:"rgba(255, 255, 255, 0.75)",textInactive:"rgba(255, 255, 255, 0.5)",background1:"#140611",background2:"#22151F",background3:"#31242E",background4:"#3E333C",background5:"#4C424A",background6:"#5A5058",contentBackground1:"#641E55",contentBackground2:"#000000",contentBackground3:"#000000",contentBackground4:"#000000",contentBackground5:"#000000",linkDefault:"#AE8AA7",linkHover:"#AE8AA7"}}}).then(()=>{let t=document.querySelector("#layout_container");t&&n.Platform.Layout.init({container:t})})})})}catch(t){console.error(t)}})})()},[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:()=>{(0,c.setTheme)({palette:{brandPrimary:"#641E55",brandSecondary:"#F1F0F1",backgroundPrimary:"#F1F0F1",statusSuccess:"#207735",statusWarning:"#FE7301",statusCritical:"#C21313",statusActive:"#641E55",inputBackground:"#E3E1E2",inputColor:"#140611",inputPlaceholder:"rgba(20, 6, 17, 0.75)",inputDisabled:"rgba(227, 225, 226, 0.5)",inputFocused:"rgba(20, 6, 17, 0.75)",inputBorder:"#C7C3C6",textDefault:"#140611",textHelp:"rgba(20, 6, 17, 0.75)",textInactive:"rgba(20, 6, 17, 0.5)",background1:"#FFFFFF",background2:"#F1F0F1",background3:"#E3E1E2",background4:"#D5D2D4",background5:"#C7C3C6",background6:"#B8B4B8",contentBackground1:"#641E55",contentBackground2:"#000000",contentBackground3:"#000000",contentBackground4:"#000000",contentBackground5:"#000000",linkDefault:"#7D4270",linkHover:"#7D4270"}})},children:"Use Theme 1"}),(0,o.jsx)("button",{onClick:()=>{(0,c.setTheme)({palette:{brandPrimary:"#641E55",brandSecondary:"#22151F",backgroundPrimary:"#22151F",statusSuccess:"#207735",statusWarning:"#FE7301",statusCritical:"#C21313",statusActive:"#641E55",inputBackground:"#31242E",inputColor:"#FFFFFF",inputPlaceholder:"rgba(255, 255, 255, 0.75)",inputDisabled:"rgba(49, 36, 46, 0.502)",inputFocused:"rgba(255, 255, 255, 0.75)",inputBorder:"#4C424A",textDefault:"#FFFFFF",textHelp:"rgba(255, 255, 255, 0.75)",textInactive:"rgba(255, 255, 255, 0.5)",background1:"#140611",background2:"#22151F",background3:"#31242E",background4:"#3E333C",background5:"#4C424A",background6:"#5A5058",contentBackground1:"#641E55",contentBackground2:"#000000",contentBackground3:"#000000",contentBackground4:"#000000",contentBackground5:"#000000",linkDefault:"#AE8AA7",linkHover:"#AE8AA7"}})},children:"Use Theme 2"}),(0,o.jsx)("button",{onClick:()=>{!function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"snapshot.json",e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),o=URL.createObjectURL(e),a=document.createElement("a");a.href=o,a.download=n,a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)}((0,c.getSnapshot)())},children:"Get Snapshot"}),(0,o.jsx)("div",{id:"layout_container",style:{border:"1px white solid",width:"590px",height:"700px",top:"0",left:"0",position:"fixed",overflow:"hidden",margin:"30px",backgroundColor:"#2f3136",color:"white",padding:"10px"}}),(0,o.jsx)("div",{id:"notification_center_container",style:{position:"fixed",width:"345px",height:"100vh",right:"0",top:"0"}})]})}}}]);