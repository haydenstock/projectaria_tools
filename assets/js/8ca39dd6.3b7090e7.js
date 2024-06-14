"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[897],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,u=c["".concat(i,".").concat(p)]||c[p]||h[p]||o;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:35,title:"Time Synchronization"},i="Time Synchronized Recordings with Multiple Aria Glasses",l={unversionedId:"ARK/sdk/ticsync",id:"ARK/sdk/ticsync",title:"Time Synchronization",description:"Overview",source:"@site/docs/ARK/sdk/ticsync.mdx",sourceDirName:"ARK/sdk",slug:"/ARK/sdk/ticsync",permalink:"/projectaria_tools/docs/ARK/sdk/ticsync",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/ticsync.mdx",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,title:"Time Synchronization"},sidebar:"tutorialSidebar",previous:{title:"About TICSync",permalink:"/projectaria_tools/docs/ARK/sdk/concepts/about_ticsync"},next:{title:"API Reference",permalink:"/projectaria_tools/docs/ARK/sdk/api_reference"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Create TICSync recordings",id:"create-ticsync-recordings",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Make the recording",id:"make-the-recording",level:3},{value:"Download the recordings",id:"download-the-recordings",level:2},{value:"Load and visualize the recordings",id:"load-and-visualize-the-recordings",level:2},{value:"To build and run the Jupyter Notebook",id:"to-build-and-run-the-jupyter-notebook",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"General",id:"general",level:3},{value:"Recordings keep failing",id:"recordings-keep-failing",level:3}],c={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.mdx)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"time-synchronized-recordings-with-multiple-aria-glasses"},"Time Synchronized Recordings with Multiple Aria Glasses"),(0,a.mdx)("h2",{id:"overview"},"Overview"),(0,a.mdx)("p",null,"Users can capture time-synchronized data between multiple Project Aria glasses on the one Wi-Fi network via ",(0,a.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/concepts/about_ticsync"},"TICSync"),". Using the Aria hotspot feature, one pair of glasses (server) acts as a Wi-Fi access point that forms a network between all glasses. Time requests from all other glasses go to the server/leader device, creating a synchronized time reference."),(0,a.mdx)("p",null,"The accuracy of this method has been tested to be better than 1ms on average after approximately 45 seconds warm-up."),(0,a.mdx)("p",null,"This guide covers how to:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Create TICSync recordings"),(0,a.mdx)("li",{parentName:"ul"},"Download TICSync recordings"),(0,a.mdx)("li",{parentName:"ul"},"Load and visualize TICSync recordings")),(0,a.mdx)("p",null,"For more details, go to:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/samples/ticsync_sample"},"TICSync Code Snippet"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Advanced features and code walkthrough"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/concepts/about_ticsync"},"TICSync Technical Details"))),(0,a.mdx)("h2",{id:"create-ticsync-recordings"},"Create TICSync recordings"),(0,a.mdx)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"All Aria Glasses need to be ",(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/ARK_quickstart#update-your-glasses"},"set up and paired with the Mobile Companion app")," prior to use",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"This will ensure your glasses have the latest OS and configures them to automatically update when connected to power and a Wi-Fi connection"),(0,a.mdx)("li",{parentName:"ul"},"The glasses do not need to be paired to the same user account"),(0,a.mdx)("li",{parentName:"ul"},"On the Mobile Companion app dashboard, tap ",(0,a.mdx)("strong",{parentName:"li"},"Add "),"or ",(0,a.mdx)("strong",{parentName:"li"},"Switch")," to set up additional glasses",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Go to ",(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/glasses_manual/pair_glasses"},"How to Pair Additional Glasses and Pairing Troubleshooting")," for more details"))))),(0,a.mdx)("li",{parentName:"ol"},"Install the Client SDK and pair each set of glasses with your computer (Steps 1-3 in the ",(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/setup"},"SDK Setup Guide"),")",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"All the glasses must be paired to the one computer"),(0,a.mdx)("li",{parentName:"ul"},"Tap ",(0,a.mdx)("strong",{parentName:"li"},"Switch")," to toggle between different glasses",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"In the Mobile Companion app, you can only see the status for the glasses currently connected to the app"))),(0,a.mdx)("li",{parentName:"ul"},"To check if your glasses have the certificates necessary to connect",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Go to Device Settings (tap the glasses info card on the Dashboard)"),(0,a.mdx)("li",{parentName:"ul"},"Scroll down to Glasses OS, if you see Revoke Client SDK Certificates, your glasses are paired to a computer")))))),(0,a.mdx)("h3",{id:"make-the-recording"},"Make the recording"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Plug all glasses into your computer"),(0,a.mdx)("li",{parentName:"ol"},"Use  ",(0,a.mdx)("inlineCode",{parentName:"li"},"ticsync_recording.py")," to start recording")),(0,a.mdx)("p",null,"In this example all the glasses will start recording with recording profile 4"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"python -m ticsync_recording --total_num_devices 3 --profile profile4\n")),(0,a.mdx)("p",null,"The instructions above automatically chose the device with the lowest serial number to be the server and for all the glasses use the same recording profile. For granular control of how the glasses make recordings go to ",(0,a.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/samples/ticsync_sample"},"TICSync Code Snippet"),"."),(0,a.mdx)("admonition",{title:"Some recording profiles won't work",type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Recording profiles 0, 2, 10, 19, 25 and 27 have wifiScanModeActive enabled, so they can't be used to create TICSync recordings.")),(0,a.mdx)("ol",{start:3},(0,a.mdx)("li",{parentName:"ol"},"In the command line you should then see:",(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"Confirmation that all glasses have started recording",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"You\u2019ll also see the recording LED to start on each of the glasses"))),(0,a.mdx)("li",{parentName:"ol"},"Confirmation the glasses are ready for time synchronized data collection")))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'    "-------- All devices are ready for data collection. You can safely unplug all your glasses from USB ---------"\n')),(0,a.mdx)("ol",{start:4},(0,a.mdx)("li",{parentName:"ol"},"Unplug the glasses (if you wish) and record your activity",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"It may take ~45 seconds for the ticsync algorithm to reach stabilization between all devices. The ticsync_tutorial below includes how to assess how long it takes for your specific setup and recording profile."))),(0,a.mdx)("li",{parentName:"ol"},"Stop recording:\n4. Press the Capture button on the top right of the Aria glasses\n5. Plug the glasses back into your computer and use ",(0,a.mdx)("inlineCode",{parentName:"li"},"ticsync_cleanup"))),(0,a.mdx)("p",null,"Once you\u2019ve completed the recordings:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Plug all your glasses into the computer"),(0,a.mdx)("li",{parentName:"ol"},"Use ",(0,a.mdx)("inlineCode",{parentName:"li"},"ticsync_cleanup.py")," to return the glasses to their normal recording state (no longer creating TICSync recordings). In this example, three devices are plugged in. Run:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"python -m ticsync_cleanup --total_num_devices 3\n")),(0,a.mdx)("ol",{start:3},(0,a.mdx)("li",{parentName:"ol"},"Press Enter to initiate cleanup")),(0,a.mdx)("p",null,"Example output:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"-------- Plug in all devices to your computer again for TicSync cleanup --------\n-------- Then press Enter to start TicSync cleanup --------\n[('1WM999999D0000', 'Aria'), ('1WM281623D3490', 'Aria'), ('1WM391623D5689', 'Aria')]\n[AriaSdk:DeviceControllerImpl][INFO]: Connecting to device 1WM999999D0000 over USB\n[AriaSdk:DeviceControllerImpl][INFO]: Connecting to device 1WM281623D3490 over USB\n[AriaSdk:DeviceControllerImpl][INFO]: Connecting to device 1WM391623D5689 over USB\nDetected server serial 1WM999999D0000\nDetected client serials ['1WM281623D3490', '1WM391623D5689']\n[AriaSdk:DeviceControllerImpl][INFO]: Connecting to device 1WM281623D3490 over USB\n[AriaSdk:DeviceControllerImpl][INFO]: Connecting to device 1WM391623D5689 over USB\n[AriaSdk:DeviceControllerImpl][INFO]: Connecting to device 1WM999999D0000 over USB\n-------- All devices reconnected, please keep all devices plugged in. Performing cleanup --------\nDDS RPC enabled, disabling it\n-------- Successfully performed cleanup. Exiting --------\n")),(0,a.mdx)("h2",{id:"download-the-recordings"},"Download the recordings"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"ticsync_file_manager")," enables you to view recordings on your Aria glasses that contain TICSync data as well as download the server and client files at the same time."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Plug all glasses into your computer"),(0,a.mdx)("li",{parentName:"ol"},"View what files with TICSync data are available")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"ticsync_file_manager -- --list\n")),(0,a.mdx)("p",null,"The Shared Session ID outputs will be listed for each recording session, with a list of devices that were in each session."),(0,a.mdx)("p",null,"Example output:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"2024-05-23 21:17:19 Shared Session ID: 7dfe4d16-6f54-47bf-859e-6ee4043234d3 Server Serial: 1WM281623D3490 Server Recording UUID: d8b717ce-ef48-40cd-bcc8-56cd9fe14319\n        Client Serial: 1WM391623D5689 Client Recording UUID: 63334502-6125-498e-8f2e-86567c4cfc0e\n      Client Serial: 1WM222222S0000 Client Recording UUID: c0fae751-4ad5-4e95-a21d-f9060edc1112\n\n2024-05-23 21:14:58 Shared Session ID: 4b5e2587-de1a-42f9-a17c-60bd96a8658c Server Serial: 1WM281623D3490 Server Recording UUID: 1204bcb6-71ea-42b9-bfbb-62e11f5c620a\n        Client Serial: 1WM391623D5689 Client Recording UUID: 012e5c7f-c904-4d6f-822e-0b26aedb7684\n")),(0,a.mdx)("p",null,"Making a copy of the details of each recording associated with a Shared Session ID will be helpful when consuming the data using the notebook below."),(0,a.mdx)("ol",{start:3},(0,a.mdx)("li",{parentName:"ol"},"Download VRS files and supporting metadata")),(0,a.mdx)("p",null,"Use a Shared Session ID to copy all files from a recording session to a specific folder. In this example all the recordings from session 7dfe4d16-6f54-47bf-859e-6ee4043234d3 will saved to the new folder recording_session_2"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"ticsync_file_manager -- --download 7dfe4d16-6f54-47bf-859e-6ee4043234d3 --output_dir recording_session_2\n")),(0,a.mdx)("p",null,"The folder will contain a VRS for each recording with all sensor data, including timestamps from the shared reference clock."),(0,a.mdx)("div",{id:"tutorial"}),(0,a.mdx)("h2",{id:"load-and-visualize-the-recordings"},"Load and visualize the recordings"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"ticsync_tutorial.ipynb")," Jupyter notebook will take you through how to:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Load synchronized sensor data programmatically"),(0,a.mdx)("li",{parentName:"ul"},"Visualize the data"),(0,a.mdx)("li",{parentName:"ul"},"Assess the accuracy of the time synchronization")),(0,a.mdx)("h3",{id:"to-build-and-run-the-jupyter-notebook"},"To build and run the Jupyter Notebook"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/installation/installation_python"},"Download and install the Python version of Project Aria Tools")),(0,a.mdx)("li",{parentName:"ol"},"Run the notebook")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"cd $HOME/Documents/projectaria_sandbox\n\njupyter notebook projectaria_tools/core/examples/ticsync_tutorial.ipynb\n\n")),(0,a.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.mdx)("h3",{id:"general"},"General"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Go to ",(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/sdk_troubleshooting"},"Client SDK and CLI Troubleshooting")," if you encounter issues creating the recordings or setting up the SDK"),(0,a.mdx)("li",{parentName:"ul"},"Go to ",(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting"},"Project Aria Tools Troubleshooting")," if you encounter issues creating the Jupyter notebook")),(0,a.mdx)("h3",{id:"recordings-keep-failing"},"Recordings keep failing"),(0,a.mdx)("p",null,"If you try to initiate recording and it fails, it may be because the glasses are in a bad state. Try rebooting the glasses."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"If they are connected to a charge cable, unplug your glasses"),(0,a.mdx)("li",{parentName:"ol"},"Hold down the power button down for about 10 seconds, until the nearby LED flashes green once and returns to solid blue")))}p.isMDXComponent=!0}}]);