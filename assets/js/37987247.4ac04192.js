"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9194],{15680:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>s});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),s=function(e){return function(a){var t=p(a.components);return n.createElement(e,i({},a,{components:t}))}},p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,c=s["".concat(l,".").concat(u)]||s[u]||g[u]||i;return t?n.createElement(c,d(d({ref:a},m),{},{components:t})):n.createElement(c,d({ref:a},m))}));function x(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d[c]="string"==typeof e?e:r,l[1]=d;for(var m=2;m<i;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},74850:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(58168),r=(t(96540),t(15680)),i=t(98180);const l={sidebar_position:80,title:"Eye Gaze"},d="MPS output - Eye gaze",o={unversionedId:"data_formats/mps/mps_eye_gaze",id:"data_formats/mps/mps_eye_gaze",title:"Eye Gaze",description:"Eye Gaze Data Format",source:"@site/docs/data_formats/mps/mps_eye_gaze.mdx",sourceDirName:"data_formats/mps",slug:"/data_formats/mps/mps_eye_gaze",permalink:"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/mps/mps_eye_gaze.mdx",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80,title:"Eye Gaze"},sidebar:"tutorialSidebar",previous:{title:"Multi-SLAM",permalink:"/projectaria_tools/docs/data_formats/mps/slam/mps_multi_slam"},next:{title:"Hand Tracking",permalink:"/projectaria_tools/docs/data_formats/mps/hand_tracking/"}},m={},s=[{value:"Eye Gaze Data Format",id:"eye-gaze-data-format",level:2},{value:"Further resources",id:"further-resources",level:3},{value:"general_eye_gaze.csv",id:"general_eye_gazecsv",level:2},{value:"personalized_eye_gaze.csv",id:"personalized_eye_gazecsv",level:2},{value:"Personalized calibration parameters, pre March 2024 model",id:"personalized-calibration-parameters-pre-march-2024-model",level:3},{value:"Personalized calibration parameters, new model",id:"personalized-calibration-parameters-new-model",level:3},{value:"General Principles",id:"general-principles",level:2},{value:"Confidence Intervals",id:"confidence-intervals",level:3},{value:"Session_uid",id:"session_uid",level:3},{value:"Examples",id:"examples",level:4},{value:"summary.json",id:"summaryjson",level:2},{value:"Stage 1: GazeInference (all recordings)",id:"stage-1-gazeinference-all-recordings",level:4},{value:"Stage 2: InSessionCalibration (if in-session calibration available)",id:"stage-2-insessioncalibration-if-in-session-calibration-available",level:4},{value:"Stage 3: CalibrationCorrection",id:"stage-3-calibrationcorrection",level:4},{value:"Example summary.json files",id:"example-summaryjson-files",level:4},{value:"<strong>Scenario 1: No calibration available</strong>",id:"scenario-1-no-calibration-available",level:5},{value:"<strong>Scenario 2: In-session calibration available</strong>",id:"scenario-2-in-session-calibration-available",level:4}],p={toc:s},u="wrapper";function c(e){let{components:a,...t}=e;return(0,r.mdx)(u,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"mps-output---eye-gaze"},"MPS output - Eye gaze"),(0,r.mdx)("h2",{id:"eye-gaze-data-format"},"Eye Gaze Data Format"),(0,r.mdx)("p",null,"Project Aria's ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/"},"Machine Perception Services (MPS)")," uses Aria's Eye Tracking (ET) camera images to estimate the direction the user is looking. This eye gaze estimation is in ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention#the-nominal-central-pupil-frame-cpf"},"Central Pupil Frame"),"."),(0,r.mdx)("p",null,"In March 2024, we updated our eye gaze model to support depth estimation. We do this by providing left and right eye gaze directions (yaw values) along with the depth at which these gaze directions intersect (translation values)."),(0,r.mdx)("div",{style:{textAlign:"center"}},(0,r.mdx)("img",{width:"60%",src:(0,i.default)("/img/data_formats/eye_gaze_032024_model.png"),alt:"Diagram of Eye Gaze Model"})),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Figure 1:")," ",(0,r.mdx)("em",{parentName:"p"},"Diagram of the March 2024 Model, showing vergence Left, Right and Combined Eye Gaze Directions.")),(0,r.mdx)("p",null,"In the new model, the convergence points and distances are derived from the predicted gaze directions. The combined direction\u2019s yaw is used to populate the yaw field of the EyeGaze object for backwards compatibility. The pitch is common to left, right and combined gaze directions."),(0,r.mdx)("p",null,"Eye Gaze MPS file outputs are:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"summary.json")," - high level report on MPS eye gaze generation"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"general_eye_gaze.csv")," - based on the standard eye gaze configuration"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"personalized_eye_gaze.csv")," - only if you\u2019ve made the recording with ",(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration"},"in-session Eye Gaze Calibration"))),(0,r.mdx)("h3",{id:"further-resources"},"Further resources"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/visualization/visualization_python"},"Visualize Data Using Python")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/visualization/visualization_cpp"},"Visualize Data Using C++")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/core_code_snippets/eye_gaze_code"},"Eye Gaze Code Snippets"),", includes:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Data loading"),(0,r.mdx)("li",{parentName:"ul"},"Vector conversion (yaw pitch to 3 vector)"),(0,r.mdx)("li",{parentName:"ul"},"Coordinates System (CPF_To_Device)")))),(0,r.mdx)("h2",{id:"general_eye_gazecsv"},"general_eye_gaze.csv"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"general_eye_gaze.csv")," outputs are available for all recordings made with Eye Tracking cameras."),(0,r.mdx)("p",null,"At this time, all Open Dataset Eye Gaze data was computed using the older model. ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/"},"Aria Digital Twin (ADT)")," used their ground truth system to compute eye gaze depth for their release."),(0,r.mdx)("p",null,"Where a cell shows 0, the data is not provided for that model, but to ensure backwards compatibility it will be represented as 0 in Project Aria Tools readers."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"th"},"Column")),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Pre March 2024 Model"),(0,r.mdx)("th",{parentName:"tr",align:null},"New Model"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tracking_timestamp_us")),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"The timestamp, in microseconds, of the eye tracking camera frame in device time domain. The MPS location output also contains pose estimations in the same time domain and these timestamps can be directly used to infer the device pose from the MPS location output."),(0,r.mdx)("td",{parentName:"tr",align:null},"Same.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"yaw_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Eye gaze yaw angle in radians in CPF frame. The yaw angle is the angle between the projection of the eye gaze vector (originating at CPF) on XZ plane and the Z axis in the CPF frame."),(0,r.mdx)("td",{parentName:"tr",align:null},"Not provided, however this value can be computed using helper functions and is automatically read when parsed with our data utilities.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pitch_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Eye gaze pitch angle in radians in CPF frame. The pitch angle is the angle between the projection of the eye gaze vector (originating at CPF) on YZ plane and the Z axis in the CPF frame."),(0,r.mdx)("td",{parentName:"tr",align:null},"This now corresponds to the common pitch of the left and right gaze direction.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"depth_m")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Not available."),(0,r.mdx)("td",{parentName:"tr",align:null},"Absolute depth in meters of the 3D gaze point in CPF frame. Depth values are capped at 4m. If there are timestamps where the predicted values are degenerate, this cell is empty.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"yaw_low_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Lower bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"yaw")," estimation."),(0,r.mdx)("td",{parentName:"tr",align:null},"0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pitch_low_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Lower bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"pitch")," estimation."),(0,r.mdx)("td",{parentName:"tr",align:null},"0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"yaw_high_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Upper bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"yaw")," estimation."),(0,r.mdx)("td",{parentName:"tr",align:null},"0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pitch_high_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"Upper bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"pitch")," estimation."),(0,r.mdx)("td",{parentName:"tr",align:null},"0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"left_yaw_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Left eye gaze yaw angle in radians in the CPF frame. The left yaw angle is the angle between the projection of the left eye gaze vector (originating at CPF) on the XZ plane and the Z axis in the CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"right_yaw_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Right eye gaze yaw angle in radians in the CPF frame. The right yaw angle is the angle between the projection of the left eye gaze vector (originating at CPF) on the XZ plane and the Z axis in the CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"left_yaw_low_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Lower bound of left eye gaze yaw angle in radians in CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"right_yaw_low_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Lower bound of the right eye gaze yaw angle in radians in the CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"left_yaw_high_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Upper bound of the left eye gaze yaw angle in radians in the CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"right_yaw_high_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Upper bound of the right eye gaze yaw angle in radians in the CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tx_left_eye_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Translation along the X direction from CPF origin to left eye position.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ty_left_eye_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Translation along the Y direction from CPF origin to left eye position.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tz_left_eye_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Translation along the Z direction from CPF origin to left eye position.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tx_right_eye_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Translation along the X direction from CPF origin to right eye position.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ty_right_eye_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Translation along the Y direction from CPF origin to right eye position.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tz_right_eye_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},"Translation along the Z direction from CPF origin to right eye position.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"session_uid")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Unique identifier for a session within the VRS file"),(0,r.mdx)("td",{parentName:"tr",align:null},"Same.")))),(0,r.mdx)("h2",{id:"personalized_eye_gazecsv"},"personalized_eye_gaze.csv"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"personalized_eye_gaze.csv")," outputs are only generated if the recording has ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration"},"in-session Eye Gaze Calibration data"),". The schema is exactly the same as ",(0,r.mdx)("inlineCode",{parentName:"p"},"general_eye_gaze.csv"),".  The session_uids between general and personalized output will be the same."),(0,r.mdx)("p",null,"The in-session calibration is used to compute user specific calibration (gaze correction parameters). The yaw and pitch values will be adjusted based on this calibration. If the instructions for in-session calibration are followed correctly, the calibrated eye gaze is expected to be more accurate compared to general eye gaze."),(0,r.mdx)("h3",{id:"personalized-calibration-parameters-pre-march-2024-model"},"Personalized calibration parameters, pre March 2024 model"),(0,r.mdx)("p",null,"Four coefficients are used to generate the output ","[s_y, s_p, o_y, o_p]",":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"corrected_yaw = s_y * yaw + o_y"),(0,r.mdx)("li",{parentName:"ul"},"corrected_pitch = s_p * pitch + o_p")),(0,r.mdx)("h3",{id:"personalized-calibration-parameters-new-model"},"Personalized calibration parameters, new model"),(0,r.mdx)("p",null,"Six coefficients are used in the new model output ","[s_ly, s_ry, s_p, o_ly, o_ry, o_p]",":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"corrected_left_yaw = s_ly * left_yaw + o_ly"),(0,r.mdx)("li",{parentName:"ul"},"corrected_right_yaw = s_ry * right_yaw + o_ry"),(0,r.mdx)("li",{parentName:"ul"},"corrected_pitch = s_p * pitch + o_p")),(0,r.mdx)("p",null,"We also use a diopter delta parameter that corrects the depth:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"corrected_depth = 1 / ((1 / depth) - diopter_delta)")),(0,r.mdx)("p",null,"The diopter delta is calculated during calibration (see Stage 2 below) is the median of difference between 1 / predicted_depth and 1 / groundtruth_depth values."),(0,r.mdx)("h2",{id:"general-principles"},"General Principles"),(0,r.mdx)("p",null,"The following principles apply to ",(0,r.mdx)("inlineCode",{parentName:"p"},"general_eye_gaze.csv")," and  ",(0,r.mdx)("inlineCode",{parentName:"p"},"personalized_eye_gaze.csv")),(0,r.mdx)("h3",{id:"confidence-intervals"},"Confidence Intervals"),(0,r.mdx)("p",null,"The confidence intervals represent the models uncertainty estimation. A smaller interval represents higher confidence and a wider interval represents lower confidence. The confidence interval angles are in radians and in CPF frame.\nSome common factors that impact uncertainty include:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Blinking"),(0,r.mdx)("li",{parentName:"ul"},"Hair occluding the eye tracking cameras"),(0,r.mdx)("li",{parentName:"ul"},"Re-adjusting glasses or taking them off to clean them")),(0,r.mdx)("p",null,"For utility function to load the eye gaze in Python and C++, please check the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_utilities/core_code_snippets/mps#eye-gaze"},"code examples")),(0,r.mdx)("h3",{id:"session_uid"},"Session_uid"),(0,r.mdx)("p",null,"When there are multiple users in the same vrs file (users handing off glasses to a different user without stopping the recording), ",(0,r.mdx)("inlineCode",{parentName:"p"},"session_uid"),"  identifies intervals corresponding to different calibration sessions if in-app calibration is performed during the hand-offs."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"All the rows with the same session_uid belong to the same session within the VRS file"),(0,r.mdx)("li",{parentName:"ul"},"If there are multiple calibration sessions, the session_uid would be unique for each session")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"general_eye_gaze.csv")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"There will be a single value when there is no in-session eye calibration or only one in-session calibration"),(0,r.mdx)("li",{parentName:"ul"},"The session_uid column values will always match those in ",(0,r.mdx)("inlineCode",{parentName:"li"},"personalized_eye_gaze.csv"))),(0,r.mdx)("h4",{id:"examples"},"Examples"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"No calibrated eye gaze - general_eye_gaze will have one session_uid across all rows"),(0,r.mdx)("li",{parentName:"ul"},"One in-session calibration - general_eye_gaze will have one session_uid across all rows and this value will be identical in personalized_eye_gaze"),(0,r.mdx)("li",{parentName:"ul"},"k > 1 in-session calibrations - both general and calibrated eye gaze will have k unique session_uid that start when in-session calibration begins and this value will be identical in personalized_eye_gaze")),(0,r.mdx)("h2",{id:"summaryjson"},"summary.json"),(0,r.mdx)("p",null,"The summary.json file provides a high level overview of the output for each of the major stages. This is similar to the ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/mps/mps_summary#operator-summary"},"operator summary output")," from the MPS location pipeline."),(0,r.mdx)("p",null,"For each stage of the ET pipeline, there will be one section in this file. If the section is missing, that means that the stage is not applicable or was not run."),(0,r.mdx)("h4",{id:"stage-1-gazeinference-all-recordings"},"Stage 1: GazeInference (all recordings)"),(0,r.mdx)("p",null,"Uncalibrated Eye Gaze derived data has been generated. If you\u2019re able to download the data to view the .json file it will say SUCCESS."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"status"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"SUCCESS (if you are able to download the data and view this file)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"message"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any further details, if available")))),(0,r.mdx)("h4",{id:"stage-2-insessioncalibration-if-in-session-calibration-available"},"Stage 2: InSessionCalibration (if in-session calibration available)"),(0,r.mdx)("p",null,"If the recording contains one or more valid in-session calibration intervals, the ET pipeline will compute the calibration parameters."),(0,r.mdx)("p",null,"Each calibration session found in the VRS file will generate the following information:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"status"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"SUCCESS / FAIL")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"message"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any further details, if available")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"session_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Unique ID representing the session")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"start_time_us"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"When the first wearer starts using the Aria glasses, or when subsequent wearer begins in-session calibration (2nd eye calibration onwards)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"end_time_us"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"When a wearer session or recording ends")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"params"),(0,r.mdx)("td",{parentName:"tr",align:null},"Array","[float]"),(0,r.mdx)("td",{parentName:"tr",align:null},"The calibration parameters (4 floats)")))),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"The status should be SUCCESS, unless there was an issue where the wearer began the in-session calibration, but did not generate the necessary data. In this case it would FAIL.")),(0,r.mdx)("h4",{id:"stage-3-calibrationcorrection"},"Stage 3: CalibrationCorrection"),(0,r.mdx)("p",null,"If Stage 2 has been successful, CalibrationCorrection will contain details about calibrated eye gaze. For each calibration session, we will output the following information:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"status"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"SUCCESS / FAIL")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"message"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any further details, if available")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"session_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Unique id representing the session")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"generalized_gaze_error_rads"),(0,r.mdx)("td",{parentName:"tr",align:null},"dict"),(0,r.mdx)("td",{parentName:"tr",align:null},"General gaze error in radians")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"calibrated_gaze_error_rads"),(0,r.mdx)("td",{parentName:"tr",align:null},"dict"),(0,r.mdx)("td",{parentName:"tr",align:null},"Calibrated gaze error in radians")))),(0,r.mdx)("p",null,"If the previous stages completed successfully, the status for this stage should always be SUCCESS."),(0,r.mdx)("h4",{id:"example-summaryjson-files"},"Example summary.json files"),(0,r.mdx)("h5",{id:"scenario-1-no-calibration-available"},(0,r.mdx)("strong",{parentName:"h5"},"Scenario 1: No calibration available")),(0,r.mdx)("p",null,"This report is quite short, as no in-session calibration data is available. Eye Gaze MPS was successfully created:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "GazeInference": {\n        "status": "SUCCESS"\n    }\n}\n')),(0,r.mdx)("h4",{id:"scenario-2-in-session-calibration-available"},(0,r.mdx)("strong",{parentName:"h4"},"Scenario 2: In-session calibration available")),(0,r.mdx)("p",null,"In this example, there were multiple calibration sessions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"In session one calibration was completed successfully"),(0,r.mdx)("li",{parentName:"ul"},"In session two, the user began the in-session calibration, but did not generate the necessary data.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "GazeInference": {\n        "status": "SUCCESS"\n    },\n    "InSessionCalibration": [\n        {\n            "Status": "SUCCESS",\n            "session_uid": "01ac9bf2-334a-49c6-9dc6-fdc07ab08a2a",\n            "message": "",\n            "start_time_us": 147588973,\n            "end_time_us": 208304973,\n            "num_calibu_frames": 1000,\n            "parameters":[1.02361481, 1.05426864, 0.01158671, 0.01403982]\n        },\n        {\n            "Status": "FAIL",\n            "message": "Couldn\'t compute GT gaze vectors for the interval [487241235, 508304973]",\n            "session_uid": "6063bf11-84ef-4ed5-a785-ac44b4328fdc",\n            "start_time_us": 487241235,\n            "end_time_us": 508304973,\n            "num_calibu_frames": 10,\n        }\n    ],\n    "CalibrationCorrection": [\n        {\n            "status": "SUCCESS",\n            "message": "",\n            "session_uid": "01ac9bf2-334a-49c6-9dc6-fdc07ab08a2a",\n            "generalized_gaze_error_rads": {\n                "mean": 0.047444001119500284,\n                                     "std": 0.015775822542178554,\n\n                                     "min": 0.009264740570696107,\n\n                                     "max": 0.16895371875829926,\n\n                                     "p25": 0.036160872560797655,\n\n                                     "p50": 0.04529629090291307,\n\n                                     "p75": 0.05761677117669144,\n\n                                     "p95": 0.0675233675673802\n            },\n            "calibrated_gaze_error_rads": {\n                "mean": 0.037444001119500284,\n\n                                     "std": 0.005775822542178554,\n\n                                     "min": 0.006364740570696107,\n\n                                     "max": 0.06835371875829926,\n\n                                     "p25": 0.026060872560797655,\n\n                                     "p50": 0.02519329090291307,\n\n                                     "p75": 0.03760677117669144,\n\n                                     "p95": 0.0474232675673802\n            }\n        },\n        {\n            "status": "FAILURE",\n            "message": "No calibration available for this session",\n            "session_uid": "6063bf11-84ef-4ed5-a785-ac44b4328fdc"\n        }    ]\n}\n')))}c.isMDXComponent=!0}}]);