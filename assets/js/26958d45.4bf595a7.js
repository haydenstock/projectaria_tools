"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6643],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),u=function(e){return function(t){var a=c(t.components);return r.createElement(e,n({},t,{components:a}))}},c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,p=u["".concat(s,".").concat(m)]||u[m]||h[m]||n;return a?r.createElement(p,i(i({ref:t},d),{},{components:a})):r.createElement(p,i({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<n;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},52781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=a(87462),o=(a(67294),a(3905)),n=a(79524),s=a(7909);const i={sidebar_position:10,title:"Glasses User Manual"},l="Project Aria Glasses User Manual",d={unversionedId:"ARK/glasses_manual/glasses_user_manual",id:"ARK/glasses_manual/glasses_user_manual",title:"Glasses User Manual",description:"The Aria Research Kit (ARK) provides Project Aria glasses, services and tools to enable researchers to gather and process their own Aria data. Go to Aria Research Kit intro page to find out more or to apply for the ARK.",source:"@site/docs/ARK/glasses_manual/glasses_user_manual.mdx",sourceDirName:"ARK/glasses_manual",slug:"/ARK/glasses_manual/glasses_user_manual",permalink:"/projectaria_tools/docs/ARK/glasses_manual/glasses_user_manual",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/glasses_manual/glasses_user_manual.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Glasses User Manual"},sidebar:"tutorialSidebar",previous:{title:"Aria Community (Workplace Group)",permalink:"/projectaria_tools/docs/ARK/workplacegroup"},next:{title:"Fit and Comfort",permalink:"/projectaria_tools/docs/ARK/glasses_manual/fit_and_comfort"}},u={},c=[{value:"Proper Handling and Cleaning",id:"proper-handling-and-cleaning",level:2},{value:"You can&#39;t fold the glasses, but you can adjust the tips of the temple arms",id:"you-cant-fold-the-glasses-but-you-can-adjust-the-tips-of-the-temple-arms",level:3},{value:"Detailed Cleaning Instructions",id:"detailed-cleaning-instructions",level:2},{value:"To sanitize",id:"to-sanitize",level:3},{value:"To clean",id:"to-clean",level:3},{value:"Project Aria Glasses",id:"project-aria-glasses",level:2},{value:"Charging",id:"charging",level:3},{value:"Powering On",id:"powering-on",level:3},{value:"Powering Off",id:"powering-off",level:3},{value:"Privacy Switch",id:"privacy-switch",level:3},{value:"Capture Button",id:"capture-button",level:3},{value:"Proximity Sensor",id:"proximity-sensor",level:3},{value:"LED States",id:"led-states",level:2},{value:"Right Arm LED",id:"right-arm-led",level:3},{value:"User Facing LED",id:"user-facing-led",level:3},{value:"Bystander Facing LED",id:"bystander-facing-led",level:3},{value:"Power Cycle/Reboot",id:"power-cyclereboot",level:3},{value:"Factory Reset",id:"factory-reset",level:2},{value:"Device ID",id:"device-id",level:2}],m={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,o.mdx)(p,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"project-aria-glasses-user-manual"},"Project Aria Glasses User Manual"),(0,o.mdx)("p",null,"The Aria Research Kit (ARK) provides Project Aria glasses, services and tools to enable researchers to gather and process their own Aria data. Go to ",(0,o.mdx)("a",{parentName:"p",href:"https://projectaria.com/research-kit/"},"Aria Research Kit intro page")," to find out more or to apply for the ARK."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Aria Glasses Hardware",src:a(77634).Z,width:"700",height:"429"})),(0,o.mdx)("h2",{id:"proper-handling-and-cleaning"},"Proper Handling and Cleaning"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Handle the Glasses with care & avoid damage.")," The Glasses are sensitive electronic equipment and should be handled with care."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Do not try to bend the temples arms.")," Attempting to fold them like normal glasses will damage them."),(0,o.mdx)("li",{parentName:"ul"},"Do not drop, strike, or shake your Glasses excessively. Do not use the Glasses if they are damaged."),(0,o.mdx)("li",{parentName:"ul"},"The Glasses are not intended for use as safety glasses or eye protection."),(0,o.mdx)("li",{parentName:"ul"},"Do not use with other head mounted displays, such as virtual reality headsets or other glasses."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Storage.")," Store the Glasses in a clean, dry, temperature-controlled environment. Do not leave in an unattended vehicle where temperatures may reach hot or cold extremes."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Water & liquids.")," Your Glasses are resistant to water splashes but are not designed for submersion in water or extended exposure to water or other liquids. If water exposure occurs, dry your Glasses thoroughly and clear the charging areas of residue or other debris."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Cleaning.")," Clean using a microfiber cloth or a lens cleaning wipe. Do not soak, rinse, or submerge.")),(0,o.mdx)("h3",{id:"you-cant-fold-the-glasses-but-you-can-adjust-the-tips-of-the-temple-arms"},"You can't fold the glasses, but you can adjust the tips of the temple arms"),(0,o.mdx)("video",{width:"800",controls:!0},(0,o.mdx)("source",{src:(0,n.default)("img/ARK/fit/flexible_temple_arms.mp4"),type:"video/mp4"}),"Your browser does not support the video tag. Video of temple arm tips being adjusted."),(0,o.mdx)("p",null,"Go to the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/glasses_manual/fit_and_comfort"},"Fit and Comfort page")," for more tips about adjusting your glasses."),(0,o.mdx)("h2",{id:"detailed-cleaning-instructions"},"Detailed Cleaning Instructions"),(0,o.mdx)("h3",{id:"to-sanitize"},"To sanitize"),(0,o.mdx)("p",null,"Use 70% pre moistened alcohol lens wipes with a light touch."),(0,o.mdx)("h3",{id:"to-clean"},"To clean"),(0,o.mdx)("p",null,"Clean the eyeglass lenses with a dry microfiber cloth or with a traditional lens cleaner available at any optical store."),(0,o.mdx)("p",null,"Try your best to only use a microfiber cloth for cleaning. Wash the microfiber cloth with soap and water at least weekly and air dry to ensure cleanliness of cloth. Do not use any paper products such as paper towels or Kleenex as it will damage the anti-reflective coating on the lenses. If a microfiber cloth is not available, you can use a 100% soft cotton cloth to wipe your lenses."),(0,o.mdx)("p",null,"Be mindful not to get the camera lenses and sensors wet as much as possible. It's best to spray the cloth first (soap+water mixture ok to use too) to dampen then wipe the lenses with it."),(0,o.mdx)("h2",{id:"project-aria-glasses"},"Project Aria Glasses"),(0,o.mdx)(s.Z,{alt:"Aria glasses buttons diagram",sources:{light:(0,n.default)("/img/ARK/glasses_manual/glasses_buttons.png"),dark:(0,n.default)("/img/ARK/glasses_manual/glasses_buttons_dark.png")},mdxType:"ThemedImage"}),(0,o.mdx)("h3",{id:"charging"},"Charging"),(0,o.mdx)("p",null,"Your Aria glasses must be connected to a charger to upload data. It connects to USB via its magnetic connector on the right arm. If you see the LED flashing red on the inside of the right temple arm, your battery is depleted."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Project Aria Device Charger",src:a(78187).Z,width:"800",height:"450"})),(0,o.mdx)("h3",{id:"powering-on"},"Powering On"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Connect your glasses to the charger to automatically turn them on.")),(0,o.mdx)("p",null,"or"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Hold the power button for 3-5 seconds."),(0,o.mdx)("li",{parentName:"ol"},"Continue holding the button when you see the LED flash green once. You can release the button once you see the LED turn solid blue.")),(0,o.mdx)("video",{width:"800",controls:!0},(0,o.mdx)("source",{src:(0,n.default)("img/ARK/glasses_manual/powering_on.mp4"),type:"video/mp4"}),"Your browser does not support the video tag. Video of Project Aria glasses being turned on."),(0,o.mdx)("h3",{id:"powering-off"},"Powering Off"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Hold the power button for 5 seconds and release")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"It may take several seconds for the LED to turn off.")),(0,o.mdx)("video",{width:"800",controls:!0},(0,o.mdx)("source",{src:(0,n.default)("img/ARK/glasses_manual/powering_off.mp4"),type:"video/mp4"}),"Your browser does not support the video tag. Video of Project Aria glasses being turned off."),(0,o.mdx)("h3",{id:"privacy-switch"},"Privacy Switch"),(0,o.mdx)("p",null,'The Privacy Switch, located underneath the right arm, toggles privacy mode on/off. Privacy mode is enabled when the switch is toggled toward the crossed out camera (i.e., "back" position relative to the wearer).'),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"When the privacy switch is engaged, the Aria glasses cannot record data."),(0,o.mdx)("li",{parentName:"ul"},"Any active recordings will be stopped and deleted when the switch is engaged.")),(0,o.mdx)("video",{width:"800",controls:!0},(0,o.mdx)("source",{src:(0,n.default)("img/ARK/glasses_manual/privacy_switch.mp4"),type:"video/mp4"}),"Your browser does not support the video tag. Video of privacy switch being toggled on and off."),(0,o.mdx)("h3",{id:"capture-button"},"Capture Button"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Located over the right frame."),(0,o.mdx)("li",{parentName:"ul"},"Can be used to start and stop an active recording."),(0,o.mdx)("li",{parentName:"ul"},"The capture and privacy switch are used in combination if you need to factory reset your device.")),(0,o.mdx)("p",null,"Please note, it may take several seconds for your recording to start or stop. The larger the recording, the longer it will take to finish indexing and stop the recording."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Aria Capture Button",src:a(46309).Z,width:"800",height:"450"})),(0,o.mdx)("h3",{id:"proximity-sensor"},"Proximity Sensor"),(0,o.mdx)("p",null,"Senses when the Aria glasses are being worn."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Aria Proximity Sensor",src:a(6082).Z,width:"800",height:"450"})),(0,o.mdx)("h2",{id:"led-states"},"LED States"),(0,o.mdx)("h3",{id:"right-arm-led"},"Right Arm LED"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Low Battery: Flashing Red"),(0,o.mdx)("li",{parentName:"ul"},"Recovery Mode: Alternating Blue and Red (may look violet because of the alternating speed)"),(0,o.mdx)("li",{parentName:"ul"},"Powering On: Flashing Green once"),(0,o.mdx)("li",{parentName:"ul"},"Power On: Solid Blue"),(0,o.mdx)("li",{parentName:"ul"},"Power Off: Off"),(0,o.mdx)("li",{parentName:"ul"},"Charge Loop: Solid Red (when the battery is too low to boot successfully)"),(0,o.mdx)("li",{parentName:"ul"},"Data Uploading: Pulsing Blue 3 times, repeating this pattern (reminder, your device must be connected to power to upload data)")),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Aria LEDs",src:a(82800).Z,width:"800",height:"450"})),(0,o.mdx)("h3",{id:"user-facing-led"},"User Facing LED"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Recording in Progress: Solid White"),(0,o.mdx)("li",{parentName:"ul"},"Thermal Mitigation Reached: Solid Red, may appear Orange (when the Device temperature is too high)")),(0,o.mdx)("h3",{id:"bystander-facing-led"},"Bystander Facing LED"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Recording in Progress: Solid White")),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Project Aria Device Bystander LED",src:a(92476).Z,width:"800",height:"450"})),(0,o.mdx)("h3",{id:"power-cyclereboot"},"Power Cycle/Reboot"),(0,o.mdx)("p",null,"Power cycle your device by holding down the power button down for about 10 seconds, until the nearby LED flashes green once and returns to solid blue."),(0,o.mdx)("h2",{id:"factory-reset"},"Factory Reset"),(0,o.mdx)("admonition",{type:"caution"},(0,o.mdx)("p",{parentName:"admonition"},"This will delete any recordings on your glasses.")),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Engage the Privacy Switch (i.e. in the recordings disabled position)."),(0,o.mdx)("li",{parentName:"ol"},"Tap (press but do not hold) the power button and the capture button at the same time."),(0,o.mdx)("li",{parentName:"ol"},"The device will reboot. After a while, you will see the LED near the power button flashing purple.")),(0,o.mdx)("video",{width:"800",controls:!0},(0,o.mdx)("source",{src:(0,n.default)("img/ARK/glasses_manual/aria_factory_reset.mp4"),type:"video/mp4"}),"Your browser does not support the video tag. Video of Project Aria glasses being factory reset."),(0,o.mdx)("h2",{id:"device-id"},"Device ID"),(0,o.mdx)("p",null,"Aria glasses have a unique device_ID. Unlike the serial number, the device_ID is reset every time the device is a factory reset or the glasses are unpaired."),(0,o.mdx)("p",null,"Aria glasses must go through a factory reset before they can be paired to a new user, so the device_ID will always be associated with a single user account (although an individual user may have multiple devices associated with their account)."),(0,o.mdx)("p",null,"Note: disconnecting your glasses does not trigger a factory reset, only unpairing them so that a new user may use the glasses. The serial number persists and is tied to the device, like any other product."),(0,o.mdx)("p",null,"You can find the Device ID for your glasses in the Mobile Companion App Device Settings (select the settings/gear icon next to your glasses on the dashboard)."),(0,o.mdx)("h1",{id:"health-and-safety-information"},(0,o.mdx)("strong",{parentName:"h1"},"Health and Safety Information")),(0,o.mdx)("p",null,"In addition to the Health and Safety information provided with your welcome kit, you can also read Aria Glasses health and safety information in the Mobile companion app:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Open the Aria companion app on your phone"),(0,o.mdx)("li",{parentName:"ol"},"Select Settings"),(0,o.mdx)("li",{parentName:"ol"},"Select Health & Safety")))}h.isMDXComponent=!0},82800:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aria_LEDS-8877f51d5ef1f66677791b78e9ebe685.png"},46309:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aria_capture_button-33ebd51b4550c10a06e210ad3d55aa76.png"},78187:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aria_charger-d71a9a827b890954f937c85e3df3f518.png"},77634:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aria_hardware-76e885b1f4559c0d4b10378f166e3d8d.png"},6082:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aria_proximity_sensor-5b24d0227e83fca2f59f23143025f0fd.png"},92476:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bystander_LED-ddbf59bd418e61c7b2a1452fbe6fdd4b.png"}}]);