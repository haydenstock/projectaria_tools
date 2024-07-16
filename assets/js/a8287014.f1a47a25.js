"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8604],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>P,useMDXComponents:()=>u,withMDXComponents:()=>c});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){return function(t){var r=u(t.components);return a.createElement(e,n({},t,{components:r}))}},u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,d=c["".concat(s,".").concat(m)]||c[m]||f[m]||n;return r?a.createElement(d,i(i({ref:t},l),{},{components:r})):a.createElement(d,i({ref:t},l))}));function P(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},55176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(58168),o=(r(96540),r(15680));const n={sidebar_position:1,title:"Request MPS"},s="How to request MPS",i={unversionedId:"ARK/mps/request_mps/request_mps",id:"ARK/mps/request_mps/request_mps",title:"Request MPS",description:"Cloud based Machine Perception Services (MPS) are available to Project Aria research partners to generate SLAM, Multi-Slam, Eye Gaze and Hand Tracking derived data outputs. Partner data is only used to serve MPS requests. Partner data is not available to Meta researchers or Meta\u2019s affiliates. Go to MPS Data Processing for more details about how data is processed.",source:"@site/docs/ARK/mps/request_mps/request_mps.mdx",sourceDirName:"ARK/mps/request_mps",slug:"/ARK/mps/request_mps/",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/request_mps/request_mps.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Request MPS"},sidebar:"tutorialSidebar",previous:{title:"Machine Perception Services (MPS)",permalink:"/projectaria_tools/docs/ARK/mps/"},next:{title:"MPS CLI",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli"}},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.mdx)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-to-request-mps"},"How to request MPS"),(0,o.mdx)("p",null,"Cloud based ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/"},"Machine Perception Services (MPS)")," are available to Project Aria research partners to generate SLAM, Multi-Slam, Eye Gaze and Hand Tracking derived data outputs. Partner data is only used to serve MPS requests. Partner data is not available to Meta researchers or Meta\u2019s affiliates. Go to ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/mps_processing"},"MPS Data Processing")," for more details about how data is processed."),(0,o.mdx)("p",null,"The preferred ways to request MPS are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli"},"MPS CLI"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Installed as part of the pip installation version of Project Aria Tools"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/aria_studio"},"Aria Studio"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"A web-based application that builds on features of the MPS CLI")))),(0,o.mdx)("p",null,"Users can also use the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps"},"Desktop Companion app")," to request MPS, however it does not contain MPS CLI capabilities, such as resumable uploads, automatic downloads and the ability to request Multi-SLAM MPS."))}m.isMDXComponent=!0}}]);