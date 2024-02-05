"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5540],{95788:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>_,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=a(11504);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),p=function(e){return function(t){var a=u(t.components);return n.createElement(e,r({},t,{components:a}))}},u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),c=o,m=p["".concat(i,".").concat(c)]||p[c]||g[c]||r;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function _(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},32060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(45072),o=(a(11504),a(95788));const r={sidebar_position:20,title:"Getting Started"},i="Getting Started With ADT",l={unversionedId:"open_datasets/aria_digital_twin_dataset/getting_started",id:"open_datasets/aria_digital_twin_dataset/getting_started",title:"Getting Started",description:"Overview",source:"@site/docs/open_datasets/aria_digital_twin_dataset/getting_started.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/getting_started",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/getting_started",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/getting_started.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/"},next:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Run Jupyter Notebook on Google Colab",id:"run-jupyter-notebook-on-google-colab",level:2},{value:"Running the Jupyter Notebook locally",id:"running-the-jupyter-notebook-locally",level:2},{value:"Step 0 : Check system requirements and download codebase",id:"step-0--check-system-requirements-and-download-codebase",level:3},{value:"Step 1 : Install Python",id:"step-1--install-python",level:3},{value:"Step 2 : Create a virtual environment",id:"step-2--create-a-virtual-environment",level:3},{value:"Step 3 : Install projectaria_tools from pypi",id:"step-3--install-projectaria_tools-from-pypi",level:3},{value:"Step 4 : Download Sample Sequence:",id:"step-4--download-sample-sequence",level:3},{value:"Step 5 : Run Tutorial",id:"step-5--run-tutorial",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Other Useful Links",id:"other-useful-links",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.mdx)(u,(0,n.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"getting-started-with-adt"},"Getting Started With ADT"),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"This section provides a step-by-step guide to run the Aria Digital Twin (ADT) quickstart tutorial in a Jupyter notebook."),(0,o.mdx)("p",null,"This notebook provides a walkthrough of:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Loading an ADT sequence"),(0,o.mdx)("li",{parentName:"ul"},"Accessing and visualizing all ADT ground-truth data:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"6DoF object poses"),(0,o.mdx)("li",{parentName:"ul"},"2D object bounding box"),(0,o.mdx)("li",{parentName:"ul"},"Segmentation images"),(0,o.mdx)("li",{parentName:"ul"},"Depth images"),(0,o.mdx)("li",{parentName:"ul"},"Skeleton and synthetic rendering"),(0,o.mdx)("li",{parentName:"ul"},"Eye gaze"))),(0,o.mdx)("li",{parentName:"ul"},"An example of undistorting ADT ground-truth data")),(0,o.mdx)("p",null,"We also have an ",(0,o.mdx)("a",{parentName:"p",href:"/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials"},"advanced tutorial page")," that will walk you through getting synchronized ground truth data in a multi-person sequence."),(0,o.mdx)("h2",{id:"run-jupyter-notebook-on-google-colab"},"Run Jupyter Notebook on Google Colab"),(0,o.mdx)("p",null,"Use the following link to run the Python notebook in an installation free playground:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://colab.research.google.com/github/facebookresearch/projectaria_tools/blob/1.3.0/projects/AriaDigitalTwinDatasetTools/examples/adt_quickstart_tutorial.ipynb"},"Aria Digital Twin (ADT)"))),(0,o.mdx)("h2",{id:"running-the-jupyter-notebook-locally"},"Running the Jupyter Notebook locally"),(0,o.mdx)("h3",{id:"step-0--check-system-requirements-and-download-codebase"},"Step 0 : Check system requirements and download codebase"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/download_codebase"},"Ensure your system is supported and then download projectaria_tools codebase from the github")),(0,o.mdx)("h3",{id:"step-1--install-python"},"Step 1 : Install Python"),(0,o.mdx)("p",null,"If you have already installed ",(0,o.mdx)("inlineCode",{parentName:"p"},"projectaria-tools")," using ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/installation_python"},"Python Package Installation"),", you can skip to Step 4. The ADT Python code is part of the main projectaria-tools package."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/troubleshooting#jupyter-notebook-error"},(0,o.mdx)("strong",{parentName:"a"},"Jupyter notebook error"))," : If you have problems using Jupyter examples, please ",(0,o.mdx)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"upgrade python3")," to the latest version."),(0,o.mdx)("h3",{id:"step-2--create-a-virtual-environment"},"Step 2 : Create a virtual environment"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"rm -rf $HOME/projectaria_tools_python_env\n\npython3 -m venv $HOME/projectaria_tools_python_env\n\nsource $HOME/projectaria_tools_python_env/bin/activate\n")),(0,o.mdx)("h3",{id:"step-3--install-projectaria_tools-from-pypi"},"Step 3 : Install projectaria_tools from pypi"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"pip3 install --upgrade pip\n\npip3 install projectaria-tools'[all]'\n")),(0,o.mdx)("h3",{id:"step-4--download-sample-sequence"},"Step 4 : Download Sample Sequence:"),(0,o.mdx)("p",null,"Download the sample Aria Digital Twin (ADT) sequence by following steps 0 to 4 in\n",(0,o.mdx)("a",{parentName:"p",href:"/docs/open_datasets/aria_digital_twin_dataset/dataset_download#download-the-sample-aria-digital-twin-adt-sequence"},"this guide"),"."),(0,o.mdx)("h3",{id:"step-5--run-tutorial"},"Step 5 : Run Tutorial"),(0,o.mdx)("p",null,"From your projectaria_tools python virtual environment, run:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/Documents/projectaria_sandbox\n\njupyter notebook projectaria_tools/projects/AriaDigitalTwinDatasetTools/examples/adt_quickstart_tutorial.ipynb\n")),(0,o.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.mdx)("p",null,"Go to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/troubleshooting"},"Data Utilities Troubleshooting")," if you have issues implementing this guide."),(0,o.mdx)("h2",{id:"other-useful-links"},"Other Useful Links"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/dataset_download"},"Dataset download")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/visualizers"},"Visualizers")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials"},"Advanced tutorial")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/data_utilities/installation/installation_cpp"},"Use projectaria_tools with CMake"))))}c.isMDXComponent=!0}}]);