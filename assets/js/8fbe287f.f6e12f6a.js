"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[627],{15680:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>u});var d=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d])}return e},o.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,d)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,d,n=function(e,a){if(null==e)return{};var t,d,n={},o=Object.keys(e);for(d=0;d<o.length;d++)t=o[d],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(d=0;d<o.length;d++)t=o[d],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=d.createContext({}),u=function(e){return function(a){var t=m(a.components);return d.createElement(e,o({},a,{components:t}))}},m=function(e){var a=d.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=m(e.components);return d.createElement(s.Provider,{value:a},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var a=e.children;return d.createElement(d.Fragment,{},a)}},w=d.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(t),c=n,p=u["".concat(l,".").concat(c)]||u[c]||_[c]||o;return t?d.createElement(p,r(r({ref:a},s),{},{components:t})):d.createElement(p,r({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=w;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r[p]="string"==typeof e?e:n,l[1]=r;for(var s=2;s<o;s++)l[s]=t[s];return d.createElement.apply(null,l)}return d.createElement.apply(null,t)}w.displayName="MDXCreateElement"},3614:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var d=t(58168),n=(t(96540),t(15680));const o={sidebar_position:20,title:"Dataset Download"},l="How to Download the AEA Dataset",r={unversionedId:"open_datasets/aria_everyday_activities_dataset/aea_download_dataset",id:"open_datasets/aria_everyday_activities_dataset/aea_download_dataset",title:"Dataset Download",description:"Overview",source:"@site/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset.mdx",sourceDirName:"open_datasets/aria_everyday_activities_dataset",slug:"/open_datasets/aria_everyday_activities_dataset/aea_download_dataset",permalink:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Dataset Download"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started"},next:{title:"Data Format",permalink:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_data_format"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Download the sample AEA sequence",id:"download-the-sample-aea-sequence",level:2},{value:"Step 0: Install project_aria_tools package and create a virtual environment if not already done",id:"step-0-install-project_aria_tools-package-and-create-a-virtual-environment-if-not-already-done",level:3},{value:"Step 1 : Visit the AEA website and sign up.",id:"step-1--visit-the-aea-website-and-sign-up",level:3},{value:"Step 2 : Download the download-links file",id:"step-2--download-the-download-links-file",level:3},{value:"Step 3 : Set up a folder for AEA data",id:"step-3--set-up-a-folder-for-aea-data",level:3},{value:"Step 4 : Download the sample sequence (~500MB) via CLI:",id:"step-4--download-the-sample-sequence-500mb-via-cli",level:3},{value:"Download the AEA dataset",id:"download-the-aea-dataset",level:2},{value:"Data size",id:"data-size",level:3},{value:"Download via CLI",id:"download-via-cli",level:3},{value:"Resumable download",id:"resumable-download",level:4},{value:"Detailed arguments",id:"detailed-arguments",level:4},{value:"Download Examples",id:"download-examples",level:3},{value:"Download metadata for ADT datasets",id:"download-metadata-for-adt-datasets",level:4},{value:"Download main data for all sequences",id:"download-main-data-for-all-sequences",level:4},{value:"Download all data for all sequences",id:"download-all-data-for-all-sequences",level:4},{value:"Download main data for 2 specific sequences",id:"download-main-data-for-2-specific-sequences",level:4},{value:"Download main data for all sequences and overwrite",id:"download-main-data-for-all-sequences-and-overwrite",level:4},{value:"Select specific sequences",id:"select-specific-sequences",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:s},m="wrapper";function c(e){let{components:a,...o}=e;return(0,n.mdx)(m,(0,d.A)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"how-to-download-the-aea-dataset"},"How to Download the AEA Dataset"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"This page covers how to download sample Aria Everyday Activities (AEA) sequences, as well as how to download specific sequences and types of data. Follow the instructions to download the sample sequence and from there you'll be able to use the CLI to download more data."),(0,n.mdx)("p",null,"By downloading the datasets you agree that you have read and accepted the terms of the Aria Everyday Activities Dataset License Agreement."),(0,n.mdx)("h2",{id:"download-the-sample-aea-sequence"},"Download the sample AEA sequence"),(0,n.mdx)("h3",{id:"step-0-install-project_aria_tools-package-and-create-a-virtual-environment-if-not-already-done"},"Step 0: Install project_aria_tools package and create a virtual environment if not already done"),(0,n.mdx)("p",null,"Follow Step 0 to Step 3 in ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started"},"Getting Started"),"."),(0,n.mdx)("h3",{id:"step-1--visit-the-aea-website-and-sign-up"},"Step 1 : Visit the ",(0,n.mdx)("a",{parentName:"h3",href:"https://www.projectaria.com/datasets/aea/"},"AEA website")," and sign up."),(0,n.mdx)("p",null,"Scroll down to the bottom of the page. Enter your email and select ",(0,n.mdx)("strong",{parentName:"p"},"Access the Datasets"),"."),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Screenshot of the bottom of the page, showing &quot;Enter email here&quot;",src:t(31108).A,width:"1000",height:"325"})),(0,n.mdx)("h3",{id:"step-2--download-the-download-links-file"},"Step 2 : Download the download-links file"),(0,n.mdx)("p",null,"Once you've selected ",(0,n.mdx)("strong",{parentName:"p"},"Access the Datasets")," you'll be taken back to the top of the AEA page."),(0,n.mdx)("p",null,"Scroll down the page to select AEA Download Links and download the file to the folder $HOME/Downloads."),(0,n.mdx)("admonition",{title:"The download-links file will expire in 14 days",type:"warning"},(0,n.mdx)("p",{parentName:"admonition"},"You can redownload the download links whenever they expire")),(0,n.mdx)("h3",{id:"step-3--set-up-a-folder-for-aea-data"},"Step 3 : Set up a folder for AEA data"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"mkdir -p $HOME/Documents/projectaria_tools_aea_data\n\nmv $HOME/Downloads/aria_everyday_activities_dataset_download_urls.json $HOME/Documents/projectaria_tools_aea_data/\n")),(0,n.mdx)("h3",{id:"step-4--download-the-sample-sequence-500mb-via-cli"},"Step 4 : Download the sample sequence (~500MB) via CLI:"),(0,n.mdx)("p",null,"From your Python virtual environment, run:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"aea_benchmark_dataset_downloader -c $HOME/Documents/projectaria_tools_adt_data/aria_everyday_activities_dataset_download_urls.json \\\n-o $HOME/Documents/projectaria_tools_aea_data/ \\\n-d 0 1 2 3 -e\n")),(0,n.mdx)("p",null,"The sample sequence is representative of a typical single-user sequence, which gives you an idea of to expect from the dataset."),(0,n.mdx)("h2",{id:"download-the-aea-dataset"},"Download the AEA dataset"),(0,n.mdx)("h3",{id:"data-size"},"Data size"),(0,n.mdx)("p",null,"The AEA dataset consists of 143 sequences in total. The total size of the dataset is about 353GB. The dataset is split into main data, plus the standard MPS results including eyegaze and SLAM. Go to ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/"},"Project Aria Machine Perception Services")," for more information about MPS data. The MPS data is also broken into chunks that can be included or excluded at download time. The size of each data type is below."),(0,n.mdx)("table",null,(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"Data type"),(0,n.mdx)("td",null,(0,n.mdx)("strong",null,"What's included")),(0,n.mdx)("td",null,(0,n.mdx)("strong",null,"Per sequence size")),(0,n.mdx)("td",null,(0,n.mdx)("strong",null,"Total size for all sequences"))),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"main"),(0,n.mdx)("td",null,"Aria raw data, speech to text, metadata json"),(0,n.mdx)("td",null,"2 - 4 GB"),(0,n.mdx)("td",null,"~309 GB")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"MPS eyegaze"),(0,n.mdx)("td",null,"Eyegaze, summary file"),(0,n.mdx)("td",null,"< 1 MB"),(0,n.mdx)("td",null,"~31 MB")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"MPS SLAM points"),(0,n.mdx)("td",null,"Semidense points and observations"),(0,n.mdx)("td",null,"200 - 500 MB"),(0,n.mdx)("td",null,"~31 GB")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"MPS SLAM trajectories"),(0,n.mdx)("td",null,"Open and closed loop trajectories"),(0,n.mdx)("td",null,"100 - 200 MB"),(0,n.mdx)("td",null,"12 GB")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"MPS SLAM online calibration"),(0,n.mdx)("td",null,"Online calibrations"),(0,n.mdx)("td",null," < 20 MB"),(0,n.mdx)("td",null," 1.2 GB"))),(0,n.mdx)("h3",{id:"download-via-cli"},"Download via CLI"),(0,n.mdx)("p",null,"Follow the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started"},"AEA Getting Started Guide")," to download the example data. This section will introduce how to download the dataset using the ",(0,n.mdx)("inlineCode",{parentName:"p"},"aea_dataset_downloader"),"."),(0,n.mdx)("h4",{id:"resumable-download"},"Resumable download"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"aea_dataset_downloader")," checks the previous download status of the sequences in the --output_folder. If the downloading breaks in the middle, relaunch the CLI and it will continue the downloading."),(0,n.mdx)("h4",{id:"detailed-arguments"},"Detailed arguments"),(0,n.mdx)("table",null,(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"Arguments"),(0,n.mdx)("td",null,(0,n.mdx)("strong",null,"Type")),(0,n.mdx)("td",null,(0,n.mdx)("strong",null,"Description"))),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"--cdn_file"),(0,n.mdx)("td",null,"str"),(0,n.mdx)("td",null,"The download-urls file you downloaded from the AEA website page after signing up")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"--output_folder"),(0,n.mdx)("td",null,"str"),(0,n.mdx)("td",null,"A local path where the downloaded files and metadata will be stored")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"--metadata_only"),(0,n.mdx)("td",null,"flag"),(0,n.mdx)("td",null,"Only download the metadata file for the dataset")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"--data_types"),(0,n.mdx)("td",null,"list of int"),(0,n.mdx)("td",null,"0\u2192main, 1\u2192MPS eyegaze, 2\u2192MPS trajectories, 3\u2192MPS semidense pointclouds and observations, 3\u2192MPS online calibrations")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"--example_only"),(0,n.mdx)("td",null,"flag"),(0,n.mdx)("td",null,"Only download example data")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"--overwrite"),(0,n.mdx)("td",null,"flag"),(0,n.mdx)("td",null,"Disable resumable download. Force download and overwrite existing data")),(0,n.mdx)("tr",null,(0,n.mdx)("td",null,"--sequence_names"),(0,n.mdx)("td",null,"list of str"),(0,n.mdx)("td",null,"list of sequence names. If not specified, download all sequences"))),(0,n.mdx)("h3",{id:"download-examples"},"Download Examples"),(0,n.mdx)("admonition",{type:"tip"},(0,n.mdx)("p",{parentName:"admonition"},"All these commands must be run from your Python virtual environment that has the projectaria-tools package and dependencies installed.")),(0,n.mdx)("h4",{id:"download-metadata-for-adt-datasets"},"Download metadata for ADT datasets"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --metadata_only\n")),(0,n.mdx)("h4",{id:"download-main-data-for-all-sequences"},"Download main data for all sequences"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0\n")),(0,n.mdx)("h4",{id:"download-all-data-for-all-sequences"},"Download all data for all sequences"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 1 2 3\n")),(0,n.mdx)("h4",{id:"download-main-data-for-2-specific-sequences"},"Download main data for 2 specific sequences"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 --sequence_names loc1_script1_seq1_rec1 loc2_script1_seq1_rec1\n")),(0,n.mdx)("h4",{id:"download-main-data-for-all-sequences-and-overwrite"},"Download main data for all sequences and overwrite"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 --overwrite\n")),(0,n.mdx)("h3",{id:"select-specific-sequences"},"Select specific sequences"),(0,n.mdx)("p",null,"The dataset metadata JSON ",(0,n.mdx)("inlineCode",{parentName:"p"},"aria_everyday_activities_metadata.json"),", which can be downloaded using ",(0,n.mdx)("inlineCode",{parentName:"p"},"aea_dataset_downloader"),", contains metadata for each AEA sequence, including: location number, script number, sequence number, recording number,  dataset version, dataset name, and list of concurrent recordings."),(0,n.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.mdx)("p",null,"Go to ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting"},"troubleshooting")," if you experience issues using this guide."))}c.isMDXComponent=!0},31108:(e,a,t)=>{t.d(a,{A:()=>d});const d=t.p+"assets/images/aea_downloads_1-abe5de0b67a0b9b4bbe56645706a90f8.png"}}]);