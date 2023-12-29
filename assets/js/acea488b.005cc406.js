"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7529],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){return function(t){var n=c(t.components);return a.createElement(e,i({},t,{components:n}))}},c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(r,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:20,title:"Python Package Installation"},r="How to Install the Python Package for Project Aria Tools",l={unversionedId:"data_utilities/installation/installation_python",id:"data_utilities/installation/installation_python",title:"Python Package Installation",description:"This page provides information about how to install the Python utilities using a virtual environment or from source. We recommend that only advanced users install from source.",source:"@site/docs/data_utilities/installation/installation_python.mdx",sourceDirName:"data_utilities/installation",slug:"/data_utilities/installation/installation_python",permalink:"/projectaria_tools/docs/data_utilities/installation/installation_python",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/installation/installation_python.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Python Package Installation"},sidebar:"tutorialSidebar",previous:{title:"Download MPS Sample Data",permalink:"/projectaria_tools/docs/data_utilities/installation/download_mps_sample_data"},next:{title:"C++ Installation",permalink:"/projectaria_tools/docs/data_utilities/installation/installation_cpp"}},s={},p=[{value:"Install via virtual environment",id:"install-via-virtual-environment",level:2},{value:"Step 1 : Install Python",id:"step-1--install-python",level:3},{value:"Step 2 : Create a virtual environment",id:"step-2--create-a-virtual-environment",level:3},{value:"Step 3 : Install the required Python packages",id:"step-3--install-the-required-python-packages",level:3},{value:"Step 4 : Verify installation",id:"step-4--verify-installation",level:3},{value:"Building Python bindings from source (advanced user)",id:"building-python-bindings-from-source-advanced-user",level:2},{value:"Generate and install type hinting from source (advanced user)",id:"generate-and-install-type-hinting-from-source-advanced-user",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.mdx)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-to-install-the-python-package-for-project-aria-tools"},"How to Install the Python Package for Project Aria Tools"),(0,o.mdx)("p",null,"This page provides information about how to install the Python utilities using a virtual environment or from source. We recommend that only advanced users install from source.\nFor details on the python type hinting, please refer to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/type_hinting"},"python type hinting page")),(0,o.mdx)("h2",{id:"install-via-virtual-environment"},"Install via virtual environment"),(0,o.mdx)("h3",{id:"step-1--install-python"},"Step 1 : Install Python"),(0,o.mdx)("p",null,"To use the Jupyter notebooks featured in our documentation you'll need Python 3.9 or above. To ensure all utilities work effectively, we recommend keeping Python 3 up to date."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3 download page")),(0,o.mdx)("li",{parentName:"ul"},"To check what what version of Python 3 you have use ",(0,o.mdx)("inlineCode",{parentName:"li"},"python3 --version"))),(0,o.mdx)("h3",{id:"step-2--create-a-virtual-environment"},"Step 2 : Create a virtual environment"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"rm -rf $HOME/projectaria_tools_python_env\n\npython3 -m venv $HOME/projectaria_tools_python_env\n\nsource $HOME/projectaria_tools_python_env/bin/activate\n")),(0,o.mdx)("h3",{id:"step-3--install-the-required-python-packages"},"Step 3 : Install the required Python packages"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"pip3 install --upgrade pip\n\npip3 install projectaria-tools'[all]'\n")),(0,o.mdx)("h3",{id:"step-4--verify-installation"},"Step 4 : Verify installation"),(0,o.mdx)("p",null,"Verify the Python package installed correctly by running through the two example tutorials in Jupyter notebook."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/Documents/projectaria_sandbox\n\n# Basic VRS data access tutorial\njupyter notebook projectaria_tools/core/examples/dataprovider_quickstart_tutorial.ipynb\n\n# Machine Perception Service (MPS) tutorial\njupyter notebook projectaria_tools/core/examples/mps_quickstart_tutorial.ipynb\n")),(0,o.mdx)("admonition",{title:"Python Module Error?",type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"Check the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/troubleshooting#python-module-import-error"},"Python module import error")," section of ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/troubleshooting"},"Data Utilities Troubleshooting Guide")," if you encounter this issue")),(0,o.mdx)("h2",{id:"building-python-bindings-from-source-advanced-user"},"Building Python bindings from source (advanced user)"),(0,o.mdx)("p",null,"You'll need to install C++ dependencies to build Python bindings from source."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Go to the ",(0,o.mdx)("a",{parentName:"li",href:"/docs/data_utilities/installation/installation_cpp"},"C++ Installation page")," and follow the instructions to ",(0,o.mdx)("a",{parentName:"li",href:"/docs/data_utilities/installation/installation_cpp"},"install dependencies")),(0,o.mdx)("li",{parentName:"ol"},"Go to the projectaria_tools code folder"),(0,o.mdx)("li",{parentName:"ol"},"Enter the following commands")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'cd $HOME/Documents/projectaria_sandbox/projectaria_tools\n\npip3 install --upgrade pip\n\npip3 install --global-option=build_ext --config-settings=compile-args="-j2" .;\n')),(0,o.mdx)("h2",{id:"generate-and-install-type-hinting-from-source-advanced-user"},"Generate and install type hinting from source (advanced user)"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Install pybind11-stubgen to generate the stub files"),(0,o.mdx)("li",{parentName:"ol"},"Generate python type hinting with generate_stubs.py script once projectaria_tools package is installed"),(0,o.mdx)("li",{parentName:"ol"},"Install type hinting package for projectaria_tools")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"pip3 install pybind11-stubgen==1.1\n\ncd $HOME/Documents/projectaria_sandbox/projectaria_tools\npython3 generate_stubs.py\n\npip3 install projectaria_tools-stubs/\n")))}u.isMDXComponent=!0}}]);