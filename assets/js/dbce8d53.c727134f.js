"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1673],{58432:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=n(74848),s=n(28453);n(98180);const o={sidebar_position:30,title:"Recording"},a="Make a Recording Using the Client SDK",d={id:"ARK/sdk/samples/device_recording",title:"Recording",description:"Overview",source:"@site/docs/ARK/sdk/samples/device_recording.mdx",sourceDirName:"ARK/sdk/samples",slug:"/ARK/sdk/samples/device_recording",permalink:"/projectaria_tools/docs/ARK/sdk/samples/device_recording",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/samples/device_recording.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Recording"},sidebar:"tutorialSidebar",previous:{title:"Connection",permalink:"/projectaria_tools/docs/ARK/sdk/samples/device_connection"},next:{title:"Streaming Subscription",permalink:"/projectaria_tools/docs/ARK/sdk/samples/streaming_subscribe"}},t={},c=[{value:"Overview",id:"overview",level:2},{value:"Running the sample",id:"running-the-sample",level:2},{value:"Example 1: Start and stop recording over USB",id:"example-1-start-and-stop-recording-over-usb",level:3},{value:"Example 2: Start and stop recording using a custom sensor profile",id:"example-2-start-and-stop-recording-using-a-custom-sensor-profile",level:3},{value:"Example 3: Start and stop recording over Wi-Fi",id:"example-3-start-and-stop-recording-over-wi-fi",level:3},{value:"Code walkthrough",id:"code-walkthrough",level:3},{value:"1. Retrieve RecordingManager instance",id:"1-retrieve-recordingmanager-instance",level:4},{value:"2. Configure recording settings",id:"2-configure-recording-settings",level:4},{value:"3. Start recording for specific amount of time",id:"3-start-recording-for-specific-amount-of-time",level:4},{value:"Useful links",id:"useful-links",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"make-a-recording-using-the-client-sdk",children:"Make a Recording Using the Client SDK"})}),"\n",(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(r.p,{children:["This ",(0,i.jsx)(r.code,{children:"device_record"})," example shows how to set a ",(0,i.jsx)(r.a,{href:"/docs/tech_spec/recording_profiles",children:"recording profile"}),", start and stop recording using the ",(0,i.jsx)(r.a,{href:"/docs/ARK/sdk",children:"Project Aria Client SDK"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"running-the-sample",children:"Running the sample"}),"\n",(0,i.jsx)(r.h3,{id:"example-1-start-and-stop-recording-over-usb",children:"Example 1: Start and stop recording over USB"}),"\n",(0,i.jsxs)(r.p,{children:["Use the SDK to establish a USB connection, start a 10 second recording using the ",(0,i.jsx)(r.a,{href:"/docs/ARK/ARK_quickstart#set-your-default-recording-profile",children:"default recording profile"}),", then stop the recording."]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Plug your Aria glasses into your computer, using the provided USB cable"}),"\n",(0,i.jsx)(r.li,{children:"From the samples directory in Terminal, run:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"python -m device_record\n"})}),"\n",(0,i.jsxs)(r.ol,{start:"3",children:["\n",(0,i.jsx)(r.li,{children:"The recording LED will show on your Aria glasses"}),"\n",(0,i.jsxs)(r.li,{children:["After 10 seconds the recording will stop and be stored in your Aria glasses","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["View the recording metadata in the Recordings tab of the ",(0,i.jsx)(r.a,{href:"/docs/ARK/mobile_companion_app#recordings-menu",children:"Mobile Companion app"})]}),"\n",(0,i.jsxs)(r.li,{children:["Run ",(0,i.jsx)(r.code,{children:"adb shell ls -l /sdcard/recording"})," and you should see your newly recorded file"]}),"\n",(0,i.jsxs)(r.li,{children:["Run ",(0,i.jsx)(r.code,{children:"adb pull /sdcard/recording/myVrsFile.vrs myLocalFolder/"})," to download the VRS file"]}),"\n",(0,i.jsxs)(r.li,{children:["Run ",(0,i.jsx)(r.code,{children:"adb pull /sdcard/recording/myVrsFile.json myLocalFolder/"})," to download the VRS metadata"]}),"\n",(0,i.jsxs)(r.li,{children:["VRS files can be visualized using the ",(0,i.jsx)(r.a,{href:"/docs/data_utilities/visualization/visualization_cpp",children:"Aria Viewer"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["Go to the ",(0,i.jsx)(r.a,{href:"/projectaria_tools/docs/ARK/ARK_quickstart#download-data",children:"Downloads section"})," of the ",(0,i.jsx)(r.a,{href:"/projectaria_tools/docs/ARK/ARK_quickstart",children:"Project Aria Glasses Quickstart Guide"})," for more ways to download Aria data."]})}),"\n",(0,i.jsx)(r.h3,{id:"example-2-start-and-stop-recording-using-a-custom-sensor-profile",children:"Example 2: Start and stop recording using a custom sensor profile"}),"\n",(0,i.jsxs)(r.p,{children:["Use ",(0,i.jsx)(r.a,{href:"/docs/tech_spec/recording_profiles",children:"Project Aria Recording Profiles"})," to choose among different sensor configurations. To set a specific profile, run:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"python -m device_record --profile profile15\n"})}),"\n",(0,i.jsx)(r.h3,{id:"example-3-start-and-stop-recording-over-wi-fi",children:"Example 3: Start and stop recording over Wi-Fi"}),"\n",(0,i.jsx)(r.p,{children:"Recording over Wi-Fi is similar with Example 1, with a few extra steps."}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Connect your Aria glasses and computer to the same compatible Wi-Fi network:","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Check ",(0,i.jsx)(r.a,{href:"/projectaria_tools/docs/ARK/sdk/setup",children:"Requirements"})," for details about compatible routers"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Open the Mobile Companion app and tap ",(0,i.jsx)(r.a,{href:"/docs/ARK/mobile_companion_app#dashboard",children:"Wi-Fi on the Dashboard"})," to see your glasses' IP address"]}),"\n",(0,i.jsx)(r.li,{children:"From the samples directory in Terminal, run:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"python -m device_record --device-ip <Glasses IP>\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Make sure you replace ",(0,i.jsx)(r.code,{children:"<Glasses IP>"})," with the IP address you got from the Mobile Companion app"]}),"\n",(0,i.jsxs)(r.ol,{start:"4",children:["\n",(0,i.jsx)(r.li,{children:"The recording LED will show on your Aria glasses"}),"\n",(0,i.jsx)(r.li,{children:"After 10 seconds the recording will stop and be stored in your Aria glasses. Follow the same step in Example 1 to pull the data to your computer"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"code-walkthrough",children:"Code walkthrough"}),"\n",(0,i.jsx)(r.h4,{id:"1-retrieve-recordingmanager-instance",children:"1. Retrieve RecordingManager instance"}),"\n",(0,i.jsxs)(r.p,{children:["Use ",(0,i.jsx)(r.a,{href:"/docs/ARK/sdk/api_reference#ariasdkrecordingmanager",children:"RecordingManager"})," to start and stop a recording and get access to the calibration data."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"recording_manager = device.recording_manager\n"})}),"\n",(0,i.jsx)(r.h4,{id:"2-configure-recording-settings",children:"2. Configure recording settings"}),"\n",(0,i.jsxs)(r.p,{children:["Set the profile name for the recording in ",(0,i.jsx)(r.a,{href:"/docs/ARK/sdk/api_reference#ariasdkrecordingconfig",children:"RecordingConfig"})," or you'll use your glasses' ",(0,i.jsx)(r.a,{href:"/docs/ARK/ARK_quickstart#set-your-default-recording-profile",children:"default recording profile"}),". If a default recording profile has not been set, you'll record with ",(0,i.jsx)(r.code,{children:"profile8"}),". Go to the ",(0,i.jsx)(r.a,{href:"/docs/ARK/sdk/concepts/sdk_sensor_profiles",children:"Sensor Profiles page"})," for supported profiles and their specs."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"recording_config = aria.RecordingConfig()\n# If set, profile_name takes precedence over the default profile\nrecording_config.profile_name = args.profile_name\nrecording_manager.recording_config = recording_config\n"})}),"\n",(0,i.jsx)(r.h4,{id:"3-start-recording-for-specific-amount-of-time",children:"3. Start recording for specific amount of time"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"recording_manager.start_recording()\ntime.sleep(args.recording_duration)\nrecording_manager.stop_recording()\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:["You can also stop recording using the Capture button on the glasses, Mobile Companion app or ",(0,i.jsx)(r.a,{href:"/docs/ARK/sdk/cli/api_reference",children:"CLI"}),"."]})}),"\n",(0,i.jsx)(r.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/ARK/ARK_quickstart#record-data",children:"Glasses Quickstart Guide"}),": explore other ways to make recordings."]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>d});var i=n(96540);const s={},o=i.createContext(s);function a(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);