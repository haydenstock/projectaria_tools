"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3352],{95788:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){return function(t){var a=u(t.components);return n.createElement(e,i({},t,{components:a}))}},u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(a),p=r,c=s["".concat(o,".").concat(p)]||s[p]||x[p]||i;return a?n.createElement(c,d(d({ref:t},m),{},{components:a})):n.createElement(c,d({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},51800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(45072),r=(a(11504),a(95788));const i={sidebar_position:50,title:"Data Format"},o="ADT Data Format",d={unversionedId:"open_datasets/aria_digital_twin_dataset/data_format",id:"open_datasets/aria_digital_twin_dataset/data_format",title:"Data Format",description:"Sequence and Subsequence",source:"@site/docs/open_datasets/aria_digital_twin_dataset/data_format.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/data_format",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/data_format.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Data Format"},sidebar:"tutorialSidebar",previous:{title:"Advanced Tutorials",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials"},next:{title:"Data Loader",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_loader"}},l={},m=[{value:"Sequence and Subsequence",id:"sequence-and-subsequence",level:2},{value:"Ground Truth Data",id:"ground-truth-data",level:2},{value:"Skeleton Data and Availability",id:"skeleton-data-and-availability",level:2},{value:"Format of Ground Truth Data",id:"format-of-ground-truth-data",level:2},{value:"2d_bounding_box.csv or 2d_bounding_box_with_skeleton.csv",id:"2d_bounding_boxcsv-or-2d_bounding_box_with_skeletoncsv",level:3},{value:"3d_bounding_box.csv",id:"3d_bounding_boxcsv",level:3},{value:"aria_trajectory.csv",id:"aria_trajectorycsv",level:3},{value:"eyegaze.csv",id:"eyegazecsv",level:3},{value:"scene_objects.csv",id:"scene_objectscsv",level:3},{value:"instances.json",id:"instancesjson",level:3},{value:"Skeleton_T.json or Skeleton_C.json",id:"skeleton_tjson-or-skeleton_cjson",level:3},{value:"skeleton_aria_association.json",id:"skeleton_aria_associationjson",level:3},{value:"video.vrs",id:"videovrs",level:3},{value:"depth_images.vrs",id:"depth_imagesvrs",level:3},{value:"segmentations.vrs",id:"segmentationsvrs",level:3}],s={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.mdx)(u,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adt-data-format"},"ADT Data Format"),(0,r.mdx)("h2",{id:"sequence-and-subsequence"},"Sequence and Subsequence"),(0,r.mdx)("p",null,"A sequence in Aria Digital Twin (ADT) dataset represents a data recording in a scene. It can be either a multi-person activity, which may include multiple Aria devices recording at the same time, or a single-person activity, which includes only one Aria device."),(0,r.mdx)("p",null,"Inside a sequence, we use subsequences to represent the recording of each Aria device and its associated ground truth data. So far, an ADT sequence contains at most 2 subsequences. Each sequence has the following folder structure:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"|SequenceName|\n-----|Subsequence1Name|\n-----|Subsequence2Name| [Optional] # Omitted if a sequence is a single person activity\n-----|metadata.json\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"metadata.json")," file contains the high-level sequence information such as the included Aria's serial number, the scene name, etc, which can be loaded and queried by ",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathProvider"),"."),(0,r.mdx)("admonition",{title:"gt-metadata.json name change",type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Prior to ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/releases/tag/1.1.0"},"v1.1")," of the dataset ",(0,r.mdx)("inlineCode",{parentName:"p"},"metadata.json")," was called ",(0,r.mdx)("inlineCode",{parentName:"p"},"gt-metadata.json"),".")),(0,r.mdx)("h2",{id:"ground-truth-data"},"Ground Truth Data"),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathProvider")," to load a sequence and select a subsequence.\n",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathProvider")," will manage all the ground truth files (see below) in a subsequence folder."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"|SubsequenceName|\n----video.vrs  # Aria recording data\n----instances.json  # metadata of all instances in a sequence. An instance can be an object or a skeleton\n----aria_trajectory.csv  # 6DoF Aria trajectory\n----2d_bounding_box.csv  # 2D bounding box data for instances in three Aria sensors: RGB camera, left SLAM camera, right SLAM camera\n----3d_bounding_box.csv  # 3D AABB of each object\n----scene_objects.csv    # 6 DoF poses of objects\n----eyegaze.csv          # Eye gaze\n----synthetic_video.vrs  # Synthetic rendering of video.vrs\n----depth_images.vrs     # Depth images of video.vrs\n----segmentations.vrs    # Instance segmentations of video.vrs\n----skeleton_aria_association.json [optional]  # File showing association between Aria devices and skeletons, if they exist. Omitted if a sequence does not have skeleton ground truth.\n----Skeleton_*.json [optional]   # Body skeleton data. * is the skeleton name. Omitted if a sequence does not have skeleton ground truth\n----2d_bounding_box_with_skeleton.csv [optional]  # 2D bounding box data with body mesh occlusions. Omitted if a sequence does not have skeleton ground truth\n----depth_images_with_skeleton.vrs [optional]  # Depth images with body mesh occlusions. Omitted if a sequence does not have skeleton ground truth\n----segmentations_with_skeleton.vrs [optional]  # Segmentations with body mesh occlusions. Omitted if a sequence does not have skeleton ground truth\n")),(0,r.mdx)("admonition",{title:"SkeletonMetaData.json name change",type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Prior to ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/releases/tag/1.1.0"},"v1.1")," of the dataset, ",(0,r.mdx)("inlineCode",{parentName:"p"},"skeleton_aria_association.json")," was called ",(0,r.mdx)("inlineCode",{parentName:"p"},"SkeletonMetaData.json"),".")),(0,r.mdx)("h2",{id:"skeleton-data-and-availability"},"Skeleton Data and Availability"),(0,r.mdx)("p",null,"Not all ADT sequences have skeleton tracking. For those sequences with skeleton tracking enabled, we use the marker measurements from the bodysuit to generate a 3D mesh estimate of the wearer which is then used in our ground truth generation pipeline to calculate 2D bounding boxes, segmentation images and depth images."),(0,r.mdx)("p",null,"In these cases, ADT provides two sets of ground truth data: one with skeleton occlusion, one without."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"segmentations.vrs")," vs. ",(0,r.mdx)("inlineCode",{parentName:"li"},"segmentations_with_skeleton.vrs")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"depth_images.vrs")," vs. ",(0,r.mdx)("inlineCode",{parentName:"li"},"depth_images_with_skeleton.vrs")),(0,r.mdx)("li",{parentName:"ul"},"'2d_bounding_box.csv' vs. '2d_bounding_box_with_skeleton.csv'")),(0,r.mdx)("p",null,"You can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathsProvider")," to switch between these two sets."),(0,r.mdx)("h2",{id:"format-of-ground-truth-data"},"Format of Ground Truth Data"),(0,r.mdx)("p",null,"Our data loader loads all this data into a single class with useful tools for accessing data. For more information on the data classes returned by the loader, go to the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/open_datasets/aria_digital_twin_dataset/data_loader"},"Data Loader page"),"."),(0,r.mdx)("h3",{id:"2d_bounding_boxcsv-or-2d_bounding_box_with_skeletoncsv"},"2d_bounding_box.csv or 2d_bounding_box_with_skeleton.csv"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Column"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"stream_id"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"camera stream id associated with the bounding box image")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"object_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"uint64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"id of the instance (object or skeleton)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp","[ns]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp of the image in nanoseconds")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x_min","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the x axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x_max","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the x axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"y_min","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the y axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"y_max","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the y axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"visibility_ratio","[%]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"percentage of the object that is visible (0: not visible, 1: fully visible)")))),(0,r.mdx)("h3",{id:"3d_bounding_boxcsv"},"3d_bounding_box.csv"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Column"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"object_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"uint64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"id of the instance (object or skeleton)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp","[ns]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp of the image in nanoseconds. -1 means the instance is static")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_xmin","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the x axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_xmax","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the x axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_ymin","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the y axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_ymax","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the y axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_zmin","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the z axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_zmax","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the z axis (in meters) of the bounding box")))),(0,r.mdx)("h3",{id:"aria_trajectorycsv"},"aria_trajectory.csv"),(0,r.mdx)("p",null,"ADT uses the same trajectory format as ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_trajectory#closed-loop-trajectory"},"closed loop trajectory in MPS"),"."),(0,r.mdx)("p",null,"While the data structure is the same, the file is generated by the ADT ground truth system, not by MPS."),(0,r.mdx)("h3",{id:"eyegazecsv"},"eyegaze.csv"),(0,r.mdx)("p",null,"ADT uses the same ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_eye_gaze#eye-gaze-data-format"},"eye gaze format as MPS"),"."),(0,r.mdx)("p",null,"This file is generated by MPS, but the depth is estimated by the ADT ground truth system."),(0,r.mdx)("h3",{id:"scene_objectscsv"},"scene_objects.csv"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Column"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"object_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"uint64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"id of the instance (object or skeleton)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp","[ns]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp of the image in nanoseconds. -1 means the instance is static")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"t_wo_x","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"x translation from object frame to world (scene) frame (in meters)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"t_wo_y","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"y translation from object frame to world (scene) frame (in meters)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"t_wo_z","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"z translation from object frame to world (scene) frame (in meters)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_w"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"w component of quaternion from object frame to world (scene) frame")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_x"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"x component of quaternion from object frame to world (scene) frame")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_y"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"y component of quaternion from object frame to world (scene) frame")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_z"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"z component of quaternion from object frame to world (scene) frame")))),(0,r.mdx)("h3",{id:"instancesjson"},"instances.json"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "IID1": {\n    "instance_id": IID1,\n    "instance_name": "XXXX",\n    "prototype_name": "XXXX",\n    "category": "XXXX",\n    "category_uid": XXXX,\n    "motion_type": "static/dynamic",\n    "instance_type": "object/human",\n    "rigidity": "rigid/deformable",\n    "rotational_symmetry": {\n      "is_annotated": true/false\n    },\n    "canonical_pose": {\n      "up_vector": [\n        x,\n        y,\n        z\n      ],\n      "front_vector": [\n        x,\n        y,\n        z\n      ]\n    }\n  },\n  ...\n}\n')),(0,r.mdx)("h3",{id:"skeleton_tjson-or-skeleton_cjson"},"Skeleton_T.json or Skeleton_C.json"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n  "dt_optitrack_minus_device_ns": {\n    "1WM103600M1292": XXXXX\n  },\n  "frames": [\n    {\n      "markers": [\n        [\n          mx1\n          my1\n          mz1\n        ],\n        ...\n       ],\n       "joints": [\n         [\n          jx1\n          jy1\n          jz1\n         ],\n        ...\n       ],\n       "timestamp_ns": tsns1\n    },\n    ...\n  ]\n}\n')),(0,r.mdx)("h3",{id:"skeleton_aria_associationjson"},"skeleton_aria_association.json"),(0,r.mdx)("p",null,"This file shows the skeleton info including name, Id, and associated Aria device for each human in the sequence."),(0,r.mdx)("p",null,"Because it's possible to have a person wearing a bodysuit that is not wearing an Aria device, it's possible to have a skeleton with no associated AriaDeviceSerial."),(0,r.mdx)("p",null,"It's also possible to have an Aria wearer with no bodysuit, which means there may be an empty skeleton Id and a name associated with an Aria device."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "SkeletonMetadata": [\n        {\n            "AssociatedDeviceSerial": "AriaSerial1/NONE",\n            "SkeletonId": ID1,\n            "SkeletonName": "SkeletonName1/NONE"\n        },\n        ...\n    ]\n}\n')),(0,r.mdx)("h3",{id:"videovrs"},"video.vrs"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"video.vrs")," contains the raw sensor recording from the Aria device."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/tech_spec/hardware_spec"},"Aria Hardware Specifications")," shows the sensors used to make recordings",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Images were all recorded at 30 fps")))),(0,r.mdx)("h3",{id:"depth_imagesvrs"},"depth_images.vrs"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"depth_images.vrs1")," contains 3 streams of images corresponding to the exact streams in ",(0,r.mdx)("inlineCode",{parentName:"p"},"video.vrs"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Each depth image is the same size as their corresponding raw image, where the pixel contents are integers expressing the depth in the camera\u2019s Z-axis, in units of mm.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"This should not to be confused with ASE depth images, which describe the depth along each pixel ray"))),(0,r.mdx)("li",{parentName:"ul"},"Depth data is calculated using ADT\u2019s ground truth system")),(0,r.mdx)("h3",{id:"segmentationsvrs"},"segmentations.vrs"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"segmentations.vrs")," contains 3 streams of images corresponding to the exact streams in ",(0,r.mdx)("inlineCode",{parentName:"p"},"video.vrs"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Each segmentation image is the same size as their corresponding raw image, where the pixel contents are integers expressing the Instance Id that was observed by that pixel"),(0,r.mdx)("li",{parentName:"ul"},"Segmentation data is calculated using ADT\u2019s ground truth system")))}p.isMDXComponent=!0}}]);