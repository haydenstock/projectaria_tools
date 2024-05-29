"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5350],{15680:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>s});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=a.createContext({}),s=function(e){return function(r){var t=p(r.components);return a.createElement(e,l({},r,{components:t}))}},p=function(e){var r=a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(m.Provider,{value:r},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(t),u=n,g=s["".concat(i,".").concat(u)]||s[u]||c[u]||l;return t?a.createElement(g,o(o({ref:r},m),{},{components:t})):a.createElement(g,o({ref:r},m))}));function x(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70418:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(58168),n=(t(96540),t(15680));const l={sidebar_position:1e3,title:"Recording Profile Guide"},i="Project Aria Glasses Recording Profile Guide",o={unversionedId:"ARK/glasses_manual/profile_guide",id:"ARK/glasses_manual/profile_guide",title:"Recording Profile Guide",description:"Overview",source:"@site/docs/ARK/glasses_manual/profile_guide.mdx",sourceDirName:"ARK/glasses_manual",slug:"/ARK/glasses_manual/profile_guide",permalink:"/projectaria_tools/docs/ARK/glasses_manual/profile_guide",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/glasses_manual/profile_guide.mdx",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,title:"Recording Profile Guide"},sidebar:"tutorialSidebar",previous:{title:"Pair Additional Glasses",permalink:"/projectaria_tools/docs/ARK/glasses_manual/pair_glasses"},next:{title:"Mobile Companion App",permalink:"/projectaria_tools/docs/ARK/mobile_companion_app"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"General Guidance",id:"general-guidance",level:2},{value:"If you\u2019re not sure what you want",id:"if-youre-not-sure-what-you-want",level:3},{value:"If you&#39;re streaming data",id:"if-youre-streaming-data",level:3},{value:"If you need a high frame rate",id:"if-you-need-a-high-frame-rate",level:3},{value:"If your research focuses on audio",id:"if-your-research-focuses-on-audio",level:3},{value:"To avoid image pre-processing",id:"to-avoid-image-pre-processing",level:3},{value:"Long duration recordings",id:"long-duration-recordings",level:3},{value:"Recording Profiles That Support MPS",id:"recording-profiles-that-support-mps",level:2}],s={toc:m},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.mdx)(p,(0,a.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"project-aria-glasses-recording-profile-guide"},"Project Aria Glasses Recording Profile Guide"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"This page provides an overview of Project Aria sensor recording profiles that are commonly used when collecting data with Project Aria glasses, as well as the recording profiles that work with Machine Perception Services (MPS)."),(0,n.mdx)("p",null,"Recording profiles enable researchers choosing which sensors to record with as well as what settings to use. Settings options include what camera resolution to use and whether the output is RAW (no encoding) or JPEG (compressed)."),(0,n.mdx)("p",null,"Go to ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/tech_spec/recording_profiles"},"Recording Profiles")," in Technical Specifications for more detailed information about each profile. Or, if you have a Project Aria glasses:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Open the Mobile Companion App and select ",(0,n.mdx)("strong",{parentName:"li"},"New Recording Session")),(0,n.mdx)("li",{parentName:"ol"},"Tap ",(0,n.mdx)("strong",{parentName:"li"},"Recording Profile")),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"More Info")," in the top right corner",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The More Info page will show all recording profiles as well as the current settings for the Custom Profile")))),(0,n.mdx)("h2",{id:"general-guidance"},"General Guidance"),(0,n.mdx)("p",null,"These are some sensor profiles researchers have found useful for particular kinds of research. Check recording profiles on your Mobile Companion App for more details."),(0,n.mdx)("h3",{id:"if-youre-not-sure-what-you-want"},"If you\u2019re not sure what you want"),(0,n.mdx)("p",null,"Profile 10 is interesting to explore, it gathers data with all sensors and the RGB Camera records at 10 fps. All sensor data is useful for exploring multimodal ML models."),(0,n.mdx)("p",null,"If you need high RGB Resolution (2880x2880 rather than 1408x1408), and 1FPS is sufficient shutter speed, use Profile 0."),(0,n.mdx)("h3",{id:"if-youre-streaming-data"},"If you're streaming data"),(0,n.mdx)("p",null,"While you can use any recording profile when streaming, we recommend only using Profiles 12 and 18, which are optimized for streaming."),(0,n.mdx)("h3",{id:"if-you-need-a-high-frame-rate"},"If you need a high frame rate"),(0,n.mdx)("p",null,"Use profiles 2, 9 or 15, depending on whether you want EyeTracking or GPS. Profile 2 does not have ET, profile 15 does not have GPS."),(0,n.mdx)("h3",{id:"if-your-research-focuses-on-audio"},"If your research focuses on audio"),(0,n.mdx)("p",null,"Try profiles 4, 7 (no SLAM) or profile 10."),(0,n.mdx)("h3",{id:"to-avoid-image-pre-processing"},"To avoid image pre-processing"),(0,n.mdx)("p",null,"In situations where you want to use RAW videos and skip the Image Sensor Processor (ISP) as much as possible, profile 7 is helpful."),(0,n.mdx)("p",null,"Please note, because profile 7 delivers RAW image files, not JPEGs the data is 8x more costly to store. This profile also uses more energy while recording and may heat up faster than others."),(0,n.mdx)("h3",{id:"long-duration-recordings"},"Long duration recordings"),(0,n.mdx)("p",null,"Profiles 20 and 26 are optimized for 5+ recording hours. Profile 29 is optimized for recording times over 15 hours and uses JPEG decimation to provide 0.1FPS RGB data."),(0,n.mdx)("h2",{id:"recording-profiles-that-support-mps"},"Recording Profiles That Support MPS"),(0,n.mdx)("p",null,"The table below shows which recording profiles have the necessary data to generate Trajectory or Eye Gaze data using MPS. More commonly used profiles are marked with bold text."),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Aria Recording Profile"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"),(0,n.mdx)("th",{parentName:"tr",align:null},"SLAM or Hand Tracking"),(0,n.mdx)("th",{parentName:"tr",align:null},"Eye Tracking"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("strong",{parentName:"td"},(0,n.mdx)("em",{parentName:"strong"},"Profile0"))),(0,n.mdx)("td",{parentName:"tr",align:null},"Default (all sensors)"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("strong",{parentName:"td"},(0,n.mdx)("em",{parentName:"strong"},"Profile2"))),(0,n.mdx)("td",{parentName:"tr",align:null},"RGB and SLAM high frame rate"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"No")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("strong",{parentName:"td"},(0,n.mdx)("em",{parentName:"strong"},"Profile5"))),(0,n.mdx)("td",{parentName:"tr",align:null},"Eye tracking calibration (high res)"),(0,n.mdx)("td",{parentName:"tr",align:null},"No"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile8"),(0,n.mdx)("td",{parentName:"tr",align:null},"Noise and Hearing mode"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("strong",{parentName:"td"},(0,n.mdx)("em",{parentName:"strong"},"Profile9"))),(0,n.mdx)("td",{parentName:"tr",align:null},"Contextualized AI"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("strong",{parentName:"td"},(0,n.mdx)("em",{parentName:"strong"},"Profile10"))),(0,n.mdx)("td",{parentName:"tr",align:null},"All sensors enabled with low fps"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile12"),(0,n.mdx)("td",{parentName:"tr",align:null},"Streaming mode with JPEG"),(0,n.mdx)("td",{parentName:"tr",align:null},"No"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile14"),(0,n.mdx)("td",{parentName:"tr",align:null},"SLAM and ET high frame rate with RGB low frame rate"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("strong",{parentName:"td"},(0,n.mdx)("em",{parentName:"strong"},"Profile15"))),(0,n.mdx)("td",{parentName:"tr",align:null},"AR Replay"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile16"),(0,n.mdx)("td",{parentName:"tr",align:null},"Eye tracking high frame rate"),(0,n.mdx)("td",{parentName:"tr",align:null},"No"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile18"),(0,n.mdx)("td",{parentName:"tr",align:null},"Streaming mode with JPEG and Spatial Audio"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile19"),(0,n.mdx)("td",{parentName:"tr",align:null},"Dual capture"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"No")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile21"),(0,n.mdx)("td",{parentName:"tr",align:null},"Noise and hearing mode with high RGB fps"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile22"),(0,n.mdx)("td",{parentName:"tr",align:null},"High RGB frame rate and max audio exposure"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("strong",{parentName:"td"},(0,n.mdx)("em",{parentName:"strong"},"Profile23"))),(0,n.mdx)("td",{parentName:"tr",align:null},"High RGB frame rate with low SLAM and ET frame rate"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile24"),(0,n.mdx)("td",{parentName:"tr",align:null},"High resolution and frame rate RGB"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"No")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile25"),(0,n.mdx)("td",{parentName:"tr",align:null},"Wrist Tracking with SLAM (Aria with wristband)"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"No")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile27"),(0,n.mdx)("td",{parentName:"tr",align:null},"USB only streaming mode"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"Profile28"),(0,n.mdx)("td",{parentName:"tr",align:null},"AR replay with high ET frame rate"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,n.mdx)("td",{parentName:"tr",align:null},"Yes")))))}u.isMDXComponent=!0}}]);