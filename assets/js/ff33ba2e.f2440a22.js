"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8480],{95788:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>l,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=a(11504);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),c=function(e){return function(t){var a=p(t.components);return r.createElement(e,s({},t,{components:a}))}},p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=p(a),l=i,f=c["".concat(o,".").concat(l)]||c[l]||u[l]||s;return a?r.createElement(f,n(n({ref:t},d),{},{components:a})):r.createElement(f,n({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=v;var n={};for(var m in t)hasOwnProperty.call(t,m)&&(n[m]=t[m]);n.originalType=e,n[f]="string"==typeof e?e:i,o[1]=n;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},58496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var r=a(45072),i=(a(11504),a(95788));const s={sidebar_position:30,title:"Timestamp Definitions"},o="Timestamps in Aria VRS Files",n={unversionedId:"data_formats/aria_vrs/timestamps_in_aria_vrs",id:"data_formats/aria_vrs/timestamps_in_aria_vrs",title:"Timestamp Definitions",description:"This page provides information about how Aria timestamp data is formatted in VRS. For deeper dives, go to Project Aria Device Timestamping for how Aria glasses hardware is configured or go to Temporal Alignment of Aria Sensor Data for how the data is temporally aligned and provides information about how to finely align IMU, barometer and magnetometer data.",source:"@site/docs/data_formats/aria_vrs/timestamps_in_aria_vrs.mdx",sourceDirName:"data_formats/aria_vrs",slug:"/data_formats/aria_vrs/timestamps_in_aria_vrs",permalink:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/aria_vrs/timestamps_in_aria_vrs.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Timestamp Definitions"},sidebar:"tutorialSidebar",previous:{title:"Format",permalink:"/projectaria_tools/docs/data_formats/aria_vrs/aria_vrs_format"},next:{title:"Basics",permalink:"/projectaria_tools/docs/data_formats/mps/mps_summary"}},m={},d=[{value:"VRS Timestamps",id:"vrs-timestamps",level:2},{value:"Device timestamps",id:"device-timestamps",level:3},{value:"Timecode timestamp",id:"timecode-timestamp",level:3},{value:"Record and Host(Arrival) timestamps",id:"record-and-hostarrival-timestamps",level:3}],c={toc:d},p="wrapper";function l(e){let{components:t,...a}=e;return(0,i.mdx)(p,(0,r.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"timestamps-in-aria-vrs-files"},"Timestamps in Aria VRS Files"),(0,i.mdx)("p",null,"This page provides information about how Aria timestamp data is formatted in VRS. For deeper dives, go to ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tech_insights/device_timestamping"},"Project Aria Device Timestamping")," for how Aria glasses hardware is configured or go to ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tech_insights/temporal_alignment_of_sensor_data"},"Temporal Alignment of Aria Sensor Data")," for how the data is temporally aligned and provides information about how to finely align IMU, barometer and magnetometer data."),(0,i.mdx)("h2",{id:"vrs-timestamps"},"VRS Timestamps"),(0,i.mdx)("h3",{id:"device-timestamps"},"Device timestamps"),(0,i.mdx)("p",null,"Each piece of data captured by Project Aria glasses is associated with a device timestamp (also called capture timestamp in the VRS file format). All sensors on the same pair of Aria glasses share the same device time domain issued from a single clock. We strongly recommend always working with the device timestamp when dealing with single-device Aria data."),(0,i.mdx)("h3",{id:"timecode-timestamp"},"Timecode timestamp"),(0,i.mdx)("p",null,"In the case of multi-device data capture, we use time sync servers to record pairs of timestamps between the server\u2019s local timestamp and the Aria device\u2019s device timestamp. This generates a mapping between the server\u2019s local time and Aria\u2019s device time. The server\u2019s local time serves as a unified time domain shared by the multiple devices. These are called Timecode timestamps."),(0,i.mdx)("p",null,"Timecode time refers to the same \u201ccapture\u201d event as the device time, but differs by the clock assigning the timestamps. Thus we can convert between timecode time and device time using the timestamp samples corrected by the time sync servers."),(0,i.mdx)("h3",{id:"record-and-hostarrival-timestamps"},"Record and Host(Arrival) timestamps"),(0,i.mdx)("p",null,"When working with Aria data you might encounter timestamps with other time domains. For instance, we call ",(0,i.mdx)("inlineCode",{parentName:"p"},"record timestamps")," the timestamps stored in the index of VRS files. For Project Aria glasses, these are equal to the device timestamp converted to a double-precision floating point representation. Additionally, some of the data record might have a host or arrival timestamp, their meaning is unspecified and should not be needed for any purpose."))}l.isMDXComponent=!0}}]);