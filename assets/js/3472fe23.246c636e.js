"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3739],{15680:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),u=function(e){return function(a){var t=p(a.components);return r.createElement(e,o({},a,{components:t}))}},p=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(d.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,c=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return t?r.createElement(c,i(i({ref:a},d),{},{components:t})):r.createElement(c,i({ref:a},d))}));function x(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7227:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var r=t(96540),n=t(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.default)(o.tabItem,l),hidden:t},a)}},49489:(e,a,t)=>{t.r(a),t.d(a,{default:()=>A});var r=t(58168),n=t(96540),o=t(20053),l=t(24245),i=t(56347),s=t(62814),d=t(45167),u=t(81269);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function c(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[s,d]=h({queryString:t,groupId:r}),[p,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,u.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),x=(()=>{const e=s??p;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var x=t(11062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),m=e=>{const a=e.currentTarget,t=u.indexOf(a),r=d[t].value;r!==i&&(p(a),s(r))},c=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":t},a)},d.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>u.push(e),onKeyDown:c,onClick:m},l,{className:(0,o.default)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===a})}),t??a)})))}function w(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function g(e){const a=f(e);return n.createElement("div",{className:(0,o.default)("tabs-container",b.tabList)},n.createElement(v,(0,r.A)({},e,a)),n.createElement(w,(0,r.A)({},e,a)))}function A(e){const a=(0,x.default)();return n.createElement(g,(0,r.A)({key:String(a)},e))}},75428:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=t(58168),n=(t(96540),t(15680)),o=t(49489),l=t(7227),i=t(98180);const s={sidebar_position:20,title:"ARK SW Downloads"},d="ARK SW Downloads and Updates",u={unversionedId:"ARK/ark_downloads",id:"ARK/ark_downloads",title:"ARK SW Downloads",description:"The Aria Research Kit (ARK) provides the Aria Mobile Companion app and Desktop Companion app to researchers who use Project Aria glasses.",source:"@site/docs/ARK/ark_downloads.mdx",sourceDirName:"ARK",slug:"/ARK/ark_downloads",permalink:"/projectaria_tools/docs/ARK/ark_downloads",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/ark_downloads.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"ARK SW Downloads"},sidebar:"tutorialSidebar",previous:{title:"About the Aria Research Kit",permalink:"/projectaria_tools/docs/ARK/about_ARK"},next:{title:"Get the Right Size Glasses",permalink:"/projectaria_tools/docs/ARK/frame_sizing"}},p={},m=[{value:"Mobile Companion App",id:"mobile-companion-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Download and Install",id:"download-and-install",level:4},{value:"Android",id:"android",level:3},{value:"Requirements",id:"requirements-1",level:4},{value:"Download and install",id:"download-and-install-1",level:4},{value:"Installation troubleshooting",id:"installation-troubleshooting",level:4},{value:"Aria Studio",id:"aria-studio",level:2},{value:"Client SDK with CLI",id:"client-sdk-with-cli",level:2},{value:"Desktop Companion App",id:"desktop-companion-app",level:2},{value:"Requirements",id:"requirements-2",level:3},{value:"Aria For MacOS Installer",id:"aria-for-macos-installer",level:3},{value:"Requirements",id:"requirements-3",level:3},{value:"Aria For Windows Installer",id:"aria-for-windows-installer",level:3},{value:"Requirements",id:"requirements-4",level:3},{value:"Aria For Linux Installer",id:"aria-for-linux-installer",level:3},{value:"Are these apps open source?",id:"are-these-apps-open-source",level:2}],c={toc:m},h="wrapper";function f(e){let{components:a,...s}=e;return(0,n.mdx)(h,(0,r.A)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"ark-sw-downloads-and-updates"},"ARK SW Downloads and Updates"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/about_ARK"},"Aria Research Kit (ARK)")," provides the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mobile_companion_app"},"Aria Mobile Companion app")," and ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/desktop_companion_app"},"Desktop Companion app")," to researchers who use Project Aria glasses."),(0,n.mdx)("p",null,"To be able to use Project Aria glasses you must set them up using the Mobile Companion app."),(0,n.mdx)("p",null,"Optional Software available with the ARK:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#studio"},"Aria Studio")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#sdk"},"Aria Client SDK")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#desktop"},"Aria Desktop Companion app"))),(0,n.mdx)("div",{id:"mobile"}),(0,n.mdx)("h2",{id:"mobile-companion-app"},"Mobile Companion App"),(0,n.mdx)("p",null,"The latest version is v165, go to ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sw_release_notes"},"ARK Software Release Notes")," to find out about the latest features."),(0,n.mdx)(o.default,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.mdx)(l.default,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,n.mdx)("h3",{id:"ios"},"iOS"),(0,n.mdx)("h4",{id:"requirements"},"Requirements"),(0,n.mdx)("p",null,"If you're using iOS, your mobile device will need:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"OS version must be iOS 14 or above"),(0,n.mdx)("li",{parentName:"ul"},"(Optional) TrueDepth camera (iPhone X or later) needed for ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration"},"eye-tracking calibration"))),(0,n.mdx)("h4",{id:"download-and-install"},"Download and Install"),(0,n.mdx)("p",null,"The Aria Mobile Companion app is available on iOS as a beta app through TestFlight."),(0,n.mdx)("p",null,"On your phone, scan this QR code"),(0,n.mdx)("div",{style:{textAlign:"center"}},(0,n.mdx)("img",{width:"40%",src:(0,i.default)("/img/ARK/testflight.png"),alt:"TestFlight QR Code"})),(0,n.mdx)("p",null,"to open the ",(0,n.mdx)("a",{parentName:"p",href:"https://testflight.apple.com/join/G9sm51a8"},"Aria Testflight invitation link")," and download the app."),(0,n.mdx)("p",null,"To update:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Open the TestFlight app"),(0,n.mdx)("li",{parentName:"ul"},"Next to the Aria app, select ",(0,n.mdx)("strong",{parentName:"li"},"Update")))),(0,n.mdx)(l.default,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.mdx)("h3",{id:"android"},"Android"),(0,n.mdx)("h4",{id:"requirements-1"},"Requirements"),(0,n.mdx)("p",null,"If you're using Android, your mobile device will need:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Android OS version 10 or above installed"),(0,n.mdx)("li",{parentName:"ul"},"ARM64 processor preferred"),(0,n.mdx)("li",{parentName:"ul"},"(Optional) ARCore Depth API (",(0,n.mdx)("a",{parentName:"li",href:"https://developers.google.com/ar/devices"},"https://developers.google.com/ar/devices"),") support needed for ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration"},"eye-tracking calibration")),(0,n.mdx)("li",{parentName:"ul"},"64-bit is preferred, although 32-bit is supported")),(0,n.mdx)("h4",{id:"download-and-install-1"},"Download and install"),(0,n.mdx)("p",null,"Follow one of these links on your Android device to download the app:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Mobile Companion App APK v170 - ",(0,n.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/android/Aria_v165_ARM64.apk"},"recommended (64-bit architecture)")),(0,n.mdx)("li",{parentName:"ul"},"Mobile Companion App APK v170 - ",(0,n.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/android/Aria_v165_ARMV7.apk"},"for 32-bit architecture"))),(0,n.mdx)("p",null,"To update the app, download and install the latest version."),(0,n.mdx)("h4",{id:"installation-troubleshooting"},"Installation troubleshooting"),(0,n.mdx)("p",null,"On Android, if you see an error message such as, \u201cFor security, your phone is not allowed to install unknown apps from this source,\u201d you\u2019ll need to enable your web browser to install unknown apps."),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Aria Mobile Companion App install error message",src:t(49679).A,width:"243",height:"104"})),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Go to Settings \u2192 Apps & notifications \u2192 Advanced \u2192 Special app access \u2192 Install unknown apps."),(0,n.mdx)("li",{parentName:"ol"},"Select the app (usually your internet browser) that you want to grant permission to install from unknown sources."),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"Allow from this source"))))),(0,n.mdx)("div",{id:"studio"}),(0,n.mdx)("h2",{id:"aria-studio"},"Aria Studio"),(0,n.mdx)("p",null,"Aria Studio is available on:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"x64 Linux distributions of:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fedora 36, 37, 38"),(0,n.mdx)("li",{parentName:"ul"},"Ubuntu jammy (22.04 LTS) and focal (20.04 LTS)"))),(0,n.mdx)("li",{parentName:"ul"},"Mac Intel or Mac ARM-based (M1) with MacOS 11 (Big Sur) or newer")),(0,n.mdx)("p",null,"It is installed via PyPi (pip instiallation). Go to the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/aria_studio"},"Aria Studio guide")," to get started."),(0,n.mdx)("div",{id:"sdk"}),(0,n.mdx)("h2",{id:"client-sdk-with-cli"},"Client SDK with CLI"),(0,n.mdx)("p",null,"Aria Client SDK with CLI is available on:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"x64 Linux distributions of:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fedora 36, 37, 38"))),(0,n.mdx)("li",{parentName:"ul"},"Mac Intel or Mac ARM-based (M1) with MacOS 11 (Big Sur) or newer")),(0,n.mdx)("p",null,"It is installed via PyPi (pip instiallation). Go to the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/setup"},"Aria Client SDK setup guide")," to get started."),(0,n.mdx)("div",{id:"desktop"}),(0,n.mdx)("h2",{id:"desktop-companion-app"},"Desktop Companion App"),(0,n.mdx)("p",null,"The latest version is v38, go to ",(0,n.mdx)("a",{parentName:"p",href:"/docs/ARK/sw_release_notes"},"ARK Software Release Notes")," to find out about the latest features. To update the app, download and install the latest version."),(0,n.mdx)(o.default,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.mdx)(l.default,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,n.mdx)("h3",{id:"requirements-2"},"Requirements"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"MacOS Big Sur 11.3+, Intel or Apple Silicon")),(0,n.mdx)("h3",{id:"aria-for-macos-installer"},"Aria For MacOS Installer"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/mac/Aria_v38.dmg"},"Download Aria's DMG installer")),(0,n.mdx)("li",{parentName:"ol"},"Open the downloaded file"),(0,n.mdx)("li",{parentName:"ol"},"Drag and drop Aria.app to your Applications folder"),(0,n.mdx)("li",{parentName:"ol"},"Double clicking on Aria.app to launch the app"))),(0,n.mdx)(l.default,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,n.mdx)("h3",{id:"requirements-3"},"Requirements"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Windows 10 x86_64 with DirectX (or OpenGL with the latest drivers installed)"),(0,n.mdx)("li",{parentName:"ul"},"Windows 11 may work, but is not actively supported at this time")),(0,n.mdx)("h3",{id:"aria-for-windows-installer"},"Aria For Windows Installer"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/windows/Aria_v38.msi"},"Download Aria's Windows installer")),(0,n.mdx)("li",{parentName:"ol"},"Open the installer and follow the instructions for the Aria Setup Wizard",(0,n.mdx)("ol",{parentName:"li"},(0,n.mdx)("li",{parentName:"ol"},"Sign the End-User License Agreement"),(0,n.mdx)("li",{parentName:"ol"},"Select a Destination folder"))),(0,n.mdx)("li",{parentName:"ol"},"Once the Aria Setup Wizard is complete you should see Aria as a shortcut on your desktop and under the Start Menu"))),(0,n.mdx)(l.default,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,n.mdx)("p",null,"Aria Desktop for Linux is only available for V36. Please use the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli"},"MPS CLI to")," or Aria Studio to request Hand Tracking MPS."),(0,n.mdx)("h3",{id:"requirements-4"},"Requirements"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Linux, debian package for Ubuntu, 22.04 LTS version.")),(0,n.mdx)("admonition",{type:"caution"},(0,n.mdx)("p",{parentName:"admonition"},"The app was only tested for that specific version under Gnome 42.5 and X11 (X Server) as well as Wayland. Any other debian distribution (Ubuntu 22.04 fork such as Kubuntu, Mint etc.) or environment may or may not work.")),(0,n.mdx)("h3",{id:"aria-for-linux-installer"},"Aria For Linux Installer"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/linux/Aria_v36.deb"},"Download Aria's Linux debian package"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"v36 is the latest version for Linux, please use the ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli"},"MPS CLI to")," request Hand Tracking MPS"))),(0,n.mdx)("li",{parentName:"ol"},"Right-click on the Deb file and select \u201cOpen With Other Application\u201c."),(0,n.mdx)("li",{parentName:"ol"},"Select \u201cSoftware Install\u201d and then \u201cSelect\u201d at the top-right."),(0,n.mdx)("li",{parentName:"ol"},"The Software Center will open up on the screen with information on the app you are installing."),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"Install"))),(0,n.mdx)("p",null,'The app will then be visible through "Activities"'))),(0,n.mdx)("h2",{id:"are-these-apps-open-source"},"Are these apps open source?"),(0,n.mdx)("p",null,"Mobile Companion app, Desktop Companion app, Aria Studio and Client SDK are Meta Licensed Materials\xa0and are licensed by Meta to research partners via organizational or individual research agreements. Go to ",(0,n.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/research-kit/"},"projectaria.com"),"\xa0to find out how to become a research partner."),(0,n.mdx)("p",null,"This software is not part of Project Aria Tools, so it won\u2019t be downloaded when you install ",(0,n.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/projectaria_tools/docs/data_utilities"},"Project Aria Tools Data Utilities"),", which is open source and licensed under Apache 2.0."))}f.isMDXComponent=!0},49679:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/unknown_app_error-d581c4541eb38038eb21829448655ead.png"}}]);