"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9441],{18194:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(74848),i=t(28453);const r={sidebar_position:10,title:"Basics"},a=void 0,o={id:"data_formats/mps/mps_summary",title:"Basics",description:"This page provides an overview of how Project Aria Machine Perception Services (MPS) output files are formatted.",source:"@site/docs/data_formats/mps/mps_summary.mdx",sourceDirName:"data_formats/mps",slug:"/data_formats/mps/mps_summary",permalink:"/projectaria_tools/docs/data_formats/mps/mps_summary",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/mps/mps_summary.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Basics"},sidebar:"tutorialSidebar",previous:{title:"VRS Tools installation",permalink:"/projectaria_tools/docs/data_formats/aria_vrs/aria_vrs_tools_installation"},next:{title:"SLAM",permalink:"/projectaria_tools/docs/data_formats/mps/slam/"}},l={},c=[{value:"MPS File Structure",id:"mps-file-structure",level:2},{value:"Common terminologies",id:"common-terminologies",level:2},{value:"graph_uid",id:"graph_uid",level:3},{value:"tracking_timestamp_us",id:"tracking_timestamp_us",level:3},{value:"utc_timestamp_ns",id:"utc_timestamp_ns",level:3},{value:"Operator summary",id:"operator-summary",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This page provides an overview of how Project Aria ",(0,n.jsx)(s.a,{href:"/docs/ARK/mps",children:"Machine Perception Services (MPS)"})," output files are formatted."]}),"\n",(0,n.jsx)(s.p,{children:"MPS provides derived data generated from Aria raw data (VRS files)."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"MPS Overview"})," for an introduction to MPS"]}),"\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli",children:"Request MPS"})," for how to request MPS on Aria raw data, if you have access to the ",(0,n.jsx)(s.a,{href:"https://www.projectaria.com/research-kit/",children:"Aria Research Kit"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"mps-file-structure",children:"MPS File Structure"}),"\n",(0,n.jsx)(s.p,{children:"MPS outputs use the following structure, in this example recording1.vrs was used to generate MPS."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"    \u2514\u2500\u2500 Example folder\n        \u251c\u2500\u2500 mps_recording1_vrs\n        \u2502   \u251c\u2500\u2500 eye_gaze\n        \u2502   \u2502   \u251c\u2500\u2500 general_eye_gaze.csv\n        \u2502   \u2502   \u2514\u2500\u2500 summary.json\n        \u2502   \u251c\u2500\u2500 slam\n        \u2502   \u2502   \u251c\u2500\u2500 closed_loop_trajectory.csv\n        \u2502   \u2502   \u251c\u2500\u2500 online_calibration.jsonl\n        \u2502   \u2502   \u251c\u2500\u2500 open_loop_trajectory.csv\n        \u2502   \u2502   \u251c\u2500\u2500 semidense_observations.csv.gz\n        \u2502   \u2502   \u251c\u2500\u2500 semidense_points.csv.gz\n        \u2502   \u2502   \u2514\u2500\u2500 summary.json\n        \u2502   \u251c\u2500\u2500 hand_tracking\n        \u2502   \u2502   \u251c\u2500\u2500 wrist_and_palm_poses.csv\n        \u2502   \u2502   \u2514\u2500\u2500 summary.json\n        \u2502   \u251c\u2500\u2500 vrs_health_check.json\n        \u2502   \u2514\u2500\u2500 vrs_health_check_slam.json\n        \u2514\u2500\u2500 recording1.vrs\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["mps_[name of VRS file]_vrs","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Sibling directory where all the intermediate data and MPS output is saved"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["vrs_health_check.json","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Output of the health check performed on your computer before data is uploaded"}),"\n",(0,n.jsx)(s.li,{children:"Contains information about data drops in all the sensor streams"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["vrs_health_check_slam.json","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Summary of SLAM specific checks on the VRS files"}),"\n",(0,n.jsx)(s.li,{children:"If the health check fails it will contain details about which health checks failed"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["slam folder","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Contains outputs after running SLAM (Trajectory and Semi-Dense Point Cloud data)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["eye_gaze folder","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Contains eye gaze outputs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"common-terminologies",children:"Common terminologies"}),"\n",(0,n.jsx)(s.h3,{id:"graph_uid",children:"graph_uid"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"graph_uid"})," is a unique identifier for the world coordinate frame. For all the 3D geometric instances like pose and points in the world frames (having _world in the suffix), when they have the same graph_uid, they are in the same coordinate frame."]}),"\n",(0,n.jsxs)(s.p,{children:["For simulation (such as ",(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started",children:"Aria Synthetic Environments"}),") and ",(0,n.jsx)(s.a,{href:"/docs/open_datasets/aria_digital_twin_dataset",children:"Aria Digital Twin(ADT)"})," datasets we use the same random value for one space, e.g. the same graph_uid for one ADT/simulation space."]}),"\n",(0,n.jsx)(s.h3,{id:"tracking_timestamp_us",children:"tracking_timestamp_us"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"tracking_timestamp_us"}),"'s values are shaped by whether it is real world or synthetic data."]}),"\n",(0,n.jsxs)(s.p,{children:["For real world data, ",(0,n.jsx)(s.code,{children:"tracking_timestamp_us"})," provides the Device timestamps from your Aria glasses. Go to ",(0,n.jsx)(s.a,{href:"/docs/data_formats/aria_vrs/timestamps_in_aria_vrs",children:"Timestamps in Aria VRS"})," for a definition of the device timestamps."]}),"\n",(0,n.jsx)(s.p,{children:"In simulation datasets, this will be the timestamp in the simulator."}),"\n",(0,n.jsxs)(s.p,{children:["In ",(0,n.jsx)(s.code,{children:"tracking_timestamp_us"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This clock has arbitrary starting points, which are not synchronized between recording sessions or devices."}),"\n",(0,n.jsxs)(s.li,{children:["This clock is strictly monotonic, has stable clock speed, and is accurate in duration","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If you want to compute the time duration between two timestamps (especially when touching dynamics, e.g. integrating acceleration to velocity over time), you should use this timestamp."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"utc_timestamp_ns",children:"utc_timestamp_ns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"utc_timestamp_ns"})," is the timestamp from Aria real-time clock (RTC). This time is synchronized to the cell phone time via the Aria Mobile Companion app to get UTC time at the beginning of the recording which is a rough estimate of the external standard clock."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This clock is not available in the simulation datasets."}),"\n",(0,n.jsx)(s.li,{children:"This clock provides rough synchronization between sessions and devices."}),"\n",(0,n.jsx)(s.li,{children:"This clock is not guaranteed to be monotonic, or have stable clock speed, due to synchronization with NTP. So do not compute duration between two UTC timestamps."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"operator-summary",children:"Operator summary"}),"\n",(0,n.jsx)(s.p,{children:"The operator summary includes individual operator\u2019s status and whether the operation was successful. There are three possible status flags:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SUCCESS"}),": the operator successfully finished, without known issues."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"WARNING"}),": The operator finished, but internally it detected problem(s) that may affect results quality. The operator still outputs the results, but we don\u2019t have confidence in the quality of the results, so consume the results with caution."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"ERROR"}),": the operator did not finish, finished with major error, or the quality of the results are too bad to be consumed. Results may or may not be generated, and any results should not be consumed."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The summary also provides information about processes as well as any warning or error messages available"}),"\n",(0,n.jsx)(s.p,{children:"Summary JSON output example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'\n    "SLAM": {\n        "status": "SUCCESS",\n        "info": [\n            "Recording total time: 1104.00s; Trajectory total length: 155.42m",\n            "Total Vision Translational Correction (mm): p50: 0.048; p99: 0.451",\n            "Rotational Correction (deg): p50: 0.001; p99: 0.007"\n        ],\n        "warnings": [],\n        "errors": []\n    },\n...\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(96540);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);