"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[963],{75363:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=o(74848),n=o(28453);const i={sidebar_position:63,title:"Object Models"},l="DTC Object Models",d={id:"open_datasets/digital_twin_catalog/digital_twin_catalog_object_models",title:"Object Models",description:"Overview",source:"@site/docs/open_datasets/digital_twin_catalog/digital_twin_catalog_object_models.mdx",sourceDirName:"open_datasets/digital_twin_catalog",slug:"/open_datasets/digital_twin_catalog/digital_twin_catalog_object_models",permalink:"/projectaria_tools/docs/open_datasets/digital_twin_catalog/digital_twin_catalog_object_models",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/digital_twin_catalog/digital_twin_catalog_object_models.mdx",tags:[],version:"current",sidebarPosition:63,frontMatter:{sidebar_position:63,title:"Object Models"},sidebar:"tutorialSidebar",previous:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/digital_twin_catalog/digital_twin_catalog_download_dataset"},next:{title:"DTC Data Format",permalink:"/projectaria_tools/docs/open_datasets/digital_twin_catalog/digital_twin_catalog_data_format"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Download the DTC Object Models",id:"download-the-dtc-object-models",level:2},{value:"Step 0: install project_aria_tools package and create venv if not done before\u200b",id:"step-0-install-project_aria_tools-package-and-create-venv-if-not-done-before",level:3},{value:"Step 1 : Signup and get the download links file",id:"step-1--signup-and-get-the-download-links-file",level:3},{value:"Step 2 : Set up a folder for object models",id:"step-2--set-up-a-folder-for-object-models",level:3},{value:"Step 3 : Download the object models via CLI:",id:"step-3--download-the-object-models-via-cli",level:3},{value:"Troubleshooting\u200b",id:"troubleshooting",level:3},{value:"Object Model Data Format",id:"object-model-data-format",level:2},{value:"Visualizing Object Models",id:"visualizing-object-models",level:2}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"dtc-object-models",children:"DTC Object Models"})}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"This page covers how to download the 3D object models associated with the Digital Twin Catalog (DTC) dataset, and briefly describe the data content and how to visualize the models."}),"\n",(0,a.jsx)(t.h2,{id:"download-the-dtc-object-models",children:"Download the DTC Object Models"}),"\n",(0,a.jsx)(t.h3,{id:"step-0-install-project_aria_tools-package-and-create-venv-if-not-done-before",children:"Step 0: install project_aria_tools package and create venv if not done before\u200b"}),"\n",(0,a.jsxs)(t.p,{children:["Follow Step 0 to Step 4 in ",(0,a.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/digital_twin_catalog/digital_twin_catalog_getting_started",children:"Getting Started"})]}),"\n",(0,a.jsx)(t.h3,{id:"step-1--signup-and-get-the-download-links-file",children:"Step 1 : Signup and get the download links file"}),"\n",(0,a.jsx)(t.p,{children:"To use the downloader CLI, you need to download a file which contains all data URLs plus some metadata for the downloader script."}),"\n",(0,a.jsxs)(t.p,{children:["Visit ",(0,a.jsx)(t.a,{href:"https://www.projectaria.com/datasets/dtc/",children:"Digital Twin Catalog on Project Aria Website"})," and sign up."]}),"\n",(0,a.jsx)(t.p,{children:"Scroll down to the bottom of the page. Enter your email and select Access the Datasets."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot from website showing download dataset",src:o(87733).A+"",width:"1345",height:"415"})}),"\n",(0,a.jsx)(t.p,{children:"Once you've selected Access the Datasets you'll be taken back to the top of the DTC page."}),"\n",(0,a.jsxs)(t.p,{children:["Scroll down the page to select the ",(0,a.jsx)(t.code,{children:"DTC Objects All Download Links"})," link and download the file to the folder ",(0,a.jsx)(t.code,{children:"$HOME/Downloads"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot from website showing download buttons",src:o(36692).A+"",width:"1240",height:"528"})}),"\n",(0,a.jsx)(t.h3,{id:"step-2--set-up-a-folder-for-object-models",children:"Step 2 : Set up a folder for object models"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"mkdir -p $HOME/Documents/dtc_object_library\n"})}),"\n",(0,a.jsx)(t.h3,{id:"step-3--download-the-object-models-via-cli",children:"Step 3 : Download the object models via CLI:"}),"\n",(0,a.jsx)(t.p,{children:"To download all DTC models (~100GB), run the following command from your Python virtual environment:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"dtc_object_downloader  -c {PATH_TO_YOUR_DTC_OBJECT_CDN_FILE} -o $HOME/Documents/dtc_object_library\n"})}),"\n",(0,a.jsx)(t.p,{children:"To download only a select subset of DTC models, run the following command from your Python virtual environment:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"dtc_object_downloader -c {PATH_TO_YOUR_DTC_OBJECT_CDN_FILE} -o $HOME/Documents/dtc_object_library -l {SELECTED_OBJECT_NAMES}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can retrieve object names from the DTC data providers using your downloaded sequence data, or have a look at the ",(0,a.jsx)(t.code,{children:"metadata.json"})," file in your sequence data."]}),"\n",(0,a.jsx)(t.h3,{id:"troubleshooting",children:"Troubleshooting\u200b"}),"\n",(0,a.jsxs)(t.p,{children:["Check ",(0,a.jsx)(t.a,{href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting",children:"Project Aria Tools troubleshooting"})," if you are having issues using this guide."]}),"\n",(0,a.jsx)(t.h2,{id:"object-model-data-format",children:"Object Model Data Format"}),"\n",(0,a.jsx)(t.p,{children:"When downloading the object models using dtc_object_downloader, each object will download into its own folder, named using the instance name of the object.\nUnder each object folder, there will be three files as shown below."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"|InstanceName1|\n    \u251c\u2500\u25003d-asset.glb  # model file\n    \u251c\u2500\u2500CC_BY-SA.txt  # license file\n    \u251c\u2500\u2500metadata.json\n|InstanceName2|\n    {...}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["All poses associated with the objects are stored in each sequence object pose data, not in the downloaded object data.\nFor example code to learn how to load object models and their associated poses, refer to the visualizers in ",(0,a.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/digital_twin_catalog/digital_twin_catalog_tooling",children:"Tooling"})]}),"\n",(0,a.jsx)(t.h2,{id:"visualizing-object-models",children:"Visualizing Object Models"}),"\n",(0,a.jsxs)(t.p,{children:["The GLB files for each object model can be viewed using any off-the-shelf GLB viewer.\nFor example, the open web browser based ",(0,a.jsx)(t.a,{href:"https://sandbox.babylonjs.com/",children:"Babylon viewer"})," can be used by dragging and dropping the GLB file."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},36692:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/download_buttons-84754f9d1680e4b8732c7ece3e3cb9d7.png"},87733:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/email_signup-13a556e11589d25184f4109e925f6666.png"},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>d});var a=o(96540);const n={},i=a.createContext(n);function l(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);