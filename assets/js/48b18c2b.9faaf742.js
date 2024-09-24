"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4875],{24002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=a(74848),n=a(28453);const i={sidebar_position:70,title:"Multi-person Synchronization"},s=void 0,r={id:"open_datasets/aria_digital_twin_dataset/advanced_tutorials/multiperson_synchronization",title:"Multi-person Synchronization",description:"This tutorial will walk you through the steps to get synchronized ground truth data in a multi-person sequence in the Aria Digital Twin (ADT) dataset.",source:"@site/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials/multiperson_synchronization.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset/advanced_tutorials",slug:"/open_datasets/aria_digital_twin_dataset/advanced_tutorials/multiperson_synchronization",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials/multiperson_synchronization",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials/multiperson_synchronization.mdx",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Multi-person Synchronization"},sidebar:"tutorialSidebar",previous:{title:"Creating pointclouds from depth maps & RGB images",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials/depth_maps_to_pointcloud"},next:{title:"ADT Challenges",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/adt_challenges"}},d={},l=[{value:"Further resources",id:"further-resources",level:2},{value:"How does time synchronization work in ADT?",id:"how-does-time-synchronization-work-in-adt",level:2},{value:"Run tutorial notebook",id:"run-tutorial-notebook",level:2},{value:"Step 0 : Install project_aria_tools package and create venv if not already done",id:"step-0--install-project_aria_tools-package-and-create-venv-if-not-already-done",level:3},{value:"Step 1 : Prepare to download",id:"step-1--prepare-to-download",level:3},{value:"Step 2 : Download sample multi-person sequence",id:"step-2--download-sample-multi-person-sequence",level:3},{value:"Step 3 : Download codebase",id:"step-3--download-codebase",level:3},{value:"Step 4 : Run the tutorial notebook",id:"step-4--run-the-tutorial-notebook",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This tutorial will walk you through the steps to get synchronized ground truth data in a multi-person sequence in the Aria Digital Twin (ADT) dataset."}),"\n",(0,o.jsx)(t.h2,{id:"further-resources",children:"Further resources"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs",children:"Timestamps in Aria VRS Files"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"how-does-time-synchronization-work-in-adt",children:"How does time synchronization work in ADT?"}),"\n",(0,o.jsxs)(t.p,{children:["In a single-person ADT sequence, all ground truth data is stored in the ",(0,o.jsx)(t.a,{href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs",children:"device capture time"})," of the Project Aria device used by the person."]}),"\n",(0,o.jsxs)(t.p,{children:["For a multi-person ADT sequence, we store ground truth files in two separate folders, each representing a person's Aria recording. Each subsequence is self-contained such that all ground truth data is also stored in the device capture time domain of the associated Aria device. To synchronize the two Aria devices, we store a mapping between ",(0,o.jsx)(t.a,{href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs",children:"timecode"})," timestamps and device capture timestamps in each Aria data."]}),"\n",(0,o.jsx)(t.h2,{id:"run-tutorial-notebook",children:"Run tutorial notebook"}),"\n",(0,o.jsx)(t.h3,{id:"step-0--install-project_aria_tools-package-and-create-venv-if-not-already-done",children:"Step 0 : Install project_aria_tools package and create venv if not already done"}),"\n",(0,o.jsxs)(t.p,{children:["Follow Step 0 to Step 3 in ",(0,o.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/getting_started",children:"Getting Started"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"step-1--prepare-to-download",children:"Step 1 : Prepare to download"}),"\n",(0,o.jsxs)(t.p,{children:["Follow Step 1 to Step 3 in ",(0,o.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download#download-the-sample-aria-digital-twin-adt-sequence",children:"Download the sample ADT sequence"})]}),"\n",(0,o.jsx)(t.h3,{id:"step-2--download-sample-multi-person-sequence",children:"Step 2 : Download sample multi-person sequence"}),"\n",(0,o.jsx)(t.p,{children:"From your Python virtual environment, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"adt_benchmark_dataset_downloader -c $HOME/Documents/projectaria_tools_adt_data/aria_digital_twin_dataset_download_urls.json \\\n-o $HOME/Documents/projectaria_tools_adt_data/ -l Apartment_release_multiskeleton_party_seq114 \\\n-d 0\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-3--download-codebase",children:"Step 3 : Download codebase"}),"\n",(0,o.jsxs)(t.p,{children:["Follow the instructions in ",(0,o.jsx)(t.a,{href:"/projectaria_tools/docs/data_utilities/installation/download_codebase#download-codebase",children:"Download codebase"})," to clone the code"]}),"\n",(0,o.jsx)(t.h3,{id:"step-4--run-the-tutorial-notebook",children:"Step 4 : Run the tutorial notebook"}),"\n",(0,o.jsx)(t.p,{children:"From your Python virtual environment, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cd $HOME/Documents/projectaria_sandbox\n\njupyter notebook projectaria_tools/projects/AriaDigitalTwinDatasetTools/examples/adt_multiperson_tutorial.ipynb\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var o=a(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);