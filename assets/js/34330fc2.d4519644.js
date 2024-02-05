"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7474],{95788:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>m});var a=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){return function(r){var t=d(r.components);return a.createElement(e,n({},r,{components:t}))}},d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(t),p=o,u=m["".concat(i,".").concat(p)]||m[p]||f[p]||n;return t?a.createElement(u,s(s({ref:r},l),{},{components:t})):a.createElement(u,s({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=v;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},69196:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=t(45072),o=(t(11504),t(95788));const n={sidebar_position:10,title:"Aria VRS"},i="Project Aria VRS",s={unversionedId:"data_formats/aria_vrs/aria_vrs",id:"data_formats/aria_vrs/aria_vrs",title:"Aria VRS",description:"Overview",source:"@site/docs/data_formats/aria_vrs/aria_vrs.mdx",sourceDirName:"data_formats/aria_vrs",slug:"/data_formats/aria_vrs/",permalink:"/projectaria_tools/docs/data_formats/aria_vrs/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/aria_vrs/aria_vrs.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Aria VRS"},sidebar:"tutorialSidebar",previous:{title:"Data Formats",permalink:"/projectaria_tools/docs/data_formats/"},next:{title:"Format",permalink:"/projectaria_tools/docs/data_formats/aria_vrs/aria_vrs_format"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"How Project Aria uses VRS",id:"how-project-aria-uses-vrs",level:2},{value:"Further resources",id:"further-resources",level:3}],m={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.mdx)(d,(0,a.c)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"project-aria-vrs"},"Project Aria VRS"),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"This page provides an overview of how Project Aria uses ",(0,o.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/vrs/"},"VRS"),". The other pages in this section are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/data_formats/aria_vrs/aria_vrs_format"},"Project Aria VRS Format")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/data_formats/aria_vrs/timestamps_in_aria_vrs"},"VRS Files Timestamps"))),(0,o.mdx)("h2",{id:"how-project-aria-uses-vrs"},"How Project Aria uses VRS"),(0,o.mdx)("p",null,"Project Aria chose VRS as its data container because it is a file format designed to record and playback streams of ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extended_reality"},"XR (extended reality)")," sensor data and supports huge file sizes. These VRS files contain streams of time-sorted records generated for each sensor, with one set of sensors per stream. Project Aria data uses VRS for features such as:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Records are structured as a succession of typed content blocks."),(0,o.mdx)("li",{parentName:"ul"},"Project Aria Tools recordings are structured following this VRS ",(0,o.mdx)("code",null,(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/projectaria_tools/tree/main/core/data_provider/data_layout"},"DataLayout")),". These definitions provide an overview of what information can be extracted for each stream from a Project Aria sequence."),(0,o.mdx)("li",{parentName:"ul"},"Streams contain ",(0,o.mdx)("code",null,"Configuration"),", ",(0,o.mdx)("code",null,"State")," and ",(0,o.mdx)("code",null,"Data")," records, each with a timestamp in a common time domain for the whole file."),(0,o.mdx)("li",{parentName:"ul"},"Playback is optimized for timestamp order, which is key for network streaming."),(0,o.mdx)("li",{parentName:"ul"},"Random-access playback is supported via VRS.")),(0,o.mdx)("h3",{id:"further-resources"},"Further resources"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs"},"VRS Readme")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/tree/main/vrs"},"VRS Core Functionality"))))}p.isMDXComponent=!0}}]);