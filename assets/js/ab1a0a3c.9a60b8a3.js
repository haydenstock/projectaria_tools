"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6987],{82137:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=a(74848),t=a(28453),o=a(49489),s=a(7227);const i={sidebar_position:20,title:"3D Coordinate Frame Conventions"},c="3D Coordinate Frame Conventions for Project Aria Glasses",l={id:"data_formats/coordinate_convention/3d_coordinate_frame_convention",title:"3D Coordinate Frame Conventions",description:"This page provides an overview of 3D Coordinate Frame Conventions used for Project Aria glasses, covering:",source:"@site/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention.mdx",sourceDirName:"data_formats/coordinate_convention",slug:"/data_formats/coordinate_convention/3d_coordinate_frame_convention",permalink:"/projectaria_tools/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"3D Coordinate Frame Conventions"},sidebar:"tutorialSidebar",previous:{title:"2D Image Coordinate System Conventions",permalink:"/projectaria_tools/docs/data_formats/coordinate_convention/2d_image_coordinate_system_convention"},next:{title:"Overview",permalink:"/projectaria_tools/docs/data_utilities/"}},d={},h=[{value:"SE(3) Lie groups",id:"se3-lie-groups",level:2},{value:"A note on sensor naming and motivation",id:"a-note-on-sensor-naming-and-motivation",level:3},{value:"Code",id:"code",level:3},{value:"Camera coordinate system convention",id:"camera-coordinate-system-convention",level:2},{value:"Non-visual sensor coordinate system",id:"non-visual-sensor-coordinate-system",level:2},{value:"The nominal Central Pupil Frame (CPF)",id:"the-nominal-central-pupil-frame-cpf",level:2}];function u(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"3d-coordinate-frame-conventions-for-project-aria-glasses",children:"3D Coordinate Frame Conventions for Project Aria Glasses"})}),"\n",(0,r.jsx)(n.p,{children:"This page provides an overview of 3D Coordinate Frame Conventions used for Project Aria glasses, covering:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Representation of 6-DoF poses"}),"\n",(0,r.jsx)(n.li,{children:"3D Coordinate frame and system conventions"}),"\n",(0,r.jsx)(n.li,{children:"Non-visual sensor coordinate systems"}),"\n",(0,r.jsx)(n.li,{children:"Central Pupil Frame (CPF)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.a,{href:"/projectaria_tools/docs/faq#calibration",children:"Project Aria FAQ"})," for more calibration information and resources."]}),"\n",(0,r.jsx)(n.h2,{id:"se3-lie-groups",children:"SE(3) Lie groups"}),"\n",(0,r.jsxs)(n.p,{children:["Extrinsics in calibration refer to the 6-DoF pose among the sensors. These 6-DoF poses are represented by SE(3) Lie group. The quaternion part of SE(3) uses Hamilton convention following the ",(0,r.jsx)(n.a,{href:"https://eigen.tuxfamily.org/",children:"Eigen library"}),", in which the exact formula to convert a quaternion to a rotation matrix of the SE(3) can be found ",(0,r.jsx)(n.a,{href:"https://gitlab.com/libeigen/eigen/-/blob/master/Eigen/src/Geometry/Quaternion.h#L821-859",children:"in the Eigen code repository"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["We use the SE3d class in the ",(0,r.jsx)(n.a,{href:"https://github.com/strasdat/Sophus",children:"Sophus Library"})," to represent SE(3) Lie groups, and provide a minimal pybind for the class."]}),"\n",(0,r.jsx)(n.h3,{id:"a-note-on-sensor-naming-and-motivation",children:"A note on sensor naming and motivation"}),"\n",(0,r.jsxs)(n.p,{children:["T_sensor1_sensor2 represents a relative SE(3) transformation from sensor2 frame to sensor1 frame. An easy mnemonic is the chaining principle is: T_",(0,r.jsx)("span",{style:{color:"blue"},children:"sensor1"}),(0,r.jsxs)(n.em,{children:[(0,r.jsx)("span",{style:{color:"green"},children:"sensor2"})," * T"]}),(0,r.jsx)("span",{style:{color:"green"},children:"sensor2"}),(0,r.jsxs)(n.em,{children:[(0,r.jsx)("span",{style:{color:"orange"},children:"sensor3"})," * p"]}),(0,r.jsx)("span",{style:{color:"orange"},children:"sensor3"})," = p_",(0,r.jsx)("span",{style:{color:"blue"},children:"sensor1"})," (where p_sensor is a 3D point measured from sensor)"]}),"\n",(0,r.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,r.jsxs)(o.default,{groupId:"programming-language",children:[(0,r.jsxs)(s.default,{value:"python",label:"Python",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"transform_a_b"})," represents a SE(3) rigid transformation from ",(0,r.jsx)(n.code,{children:"b"})," coordinate frame to ",(0,r.jsx)(n.code,{children:"a"})," coordinate frame. ",(0,r.jsx)(n.code,{children:"p_a"})," represents an R^3 point (or vector) in the coordinate system of a.\nEasy mnemonics of the chaining principle (a, b, c are coordinate frames):"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"transform_a_c = transform_a_b @ transform_b_c;\np_a = transform_a_b @ p_b\n"})}),(0,r.jsx)(n.p,{children:"If you want to get quaternion from the SE3d, please notice the order is consistent to numpy"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"quaternion_a_b = transform_a_b.to_quat() # order is w, x, y, z\n"})})]}),(0,r.jsxs)(s.default,{value:"cpp",label:"C++",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"T_a_b"})," represents a SE(3) rigid transformation from ",(0,r.jsx)(n.code,{children:"b"})," coordinate frame to ",(0,r.jsx)(n.code,{children:"a"})," coordinate frame. ",(0,r.jsx)(n.code,{children:"p_a"})," represents an R^3 point (or vector) in the coordinate system of a.\nEasy mnemonics of the chaining principle (a, b, c are coordinate frames):"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"Sophus::SE3d T_A_C = T_A_B * T_B_C;\nEigen::Vector3d p_A = T_A_B * p_B;\n"})}),(0,r.jsx)(n.p,{children:"If you want to get quaternion from the SE3d, please notice the order in Sophus interface"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"quaternion_a_b = T_a_b.so3().unit_quaternion() # order is x, y, z, w\n"})})]})]}),"\n",(0,r.jsx)(n.h1,{id:"3d-coordinate-frame-conventions",children:"3D Coordinate frame conventions"}),"\n",(0,r.jsx)(n.p,{children:'Every sensor on Aria glasses has their own local coordinate system. We represent the 6DoF pose of each sensor as the relative pose (rotation and translation) with regard to the  \u201cDevice frame". The device frame is by-default the local frame of the left Mono Scene (SLAM) camera.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Project Aria device with the x, y and z axises for each sensor",src:a(73083).A+"",width:"1920",height:"1080"})}),"\n",(0,r.jsx)(n.h2,{id:"camera-coordinate-system-convention",children:"Camera coordinate system convention"}),"\n",(0,r.jsx)(n.p,{children:"A camera's local frame has its origin at the camera's optical center. Coarsely, when the camera is placed up-right, the camera coordinate frame's axes points to left, up and forward."}),"\n",(0,r.jsx)(n.p,{children:"More rigorously, we define a camera's local frame based on the optical axis and the entrance pupil of its lens. Both are uniquely defined for each camera according to the camera's lens prescription. The origin of a camera's local frame is at center of the camera's entrance pupil.\nThe frame's Z axis is aligned with the optical axis. The camera's X axis are aligned with the projection of the image plane's X axis on the entrance pupil plane. The cross-product of the X and Z axis defines the system's Y axis."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram of Project Aria coordinates, showing the Optical center and the Lens FOV",src:a(32052).A+"",width:"2288",height:"716"})}),"\n",(0,r.jsx)(n.h2,{id:"non-visual-sensor-coordinate-system",children:"Non-visual sensor coordinate system"}),"\n",(0,r.jsx)(n.p,{children:"We choose the IMU coordinate systems to have their origins at the position of the accelerometer, oriented along the direction of the accelerometer sensitive axis, eventually orthogonalized to compensate for sensor orthogonalities error.\nWe use a similar arrangement for the magnetometer."}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram of Project Aria glasses IMU coordinates",src:a(49309).A+"",width:"422",height:"335"})})}),"\n",(0,r.jsx)(n.h2,{id:"the-nominal-central-pupil-frame-cpf",children:"The nominal Central Pupil Frame (CPF)"}),"\n",(0,r.jsxs)(n.p,{children:["The CPF frame is placed at the midpoint between the eye boxes of the left and right eye. CPF's X-axis points left, Y-axis points up and the Z-axis points forward, from the person's perspective. Aria's ET gaze is defined as a vector in the CPF space originating at ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mn,{children:"0"}),(0,r.jsx)(n.mo,{separator:"true",children:","}),(0,r.jsx)(n.mn,{children:"0"}),(0,r.jsx)(n.mo,{separator:"true",children:","}),(0,r.jsx)(n.mn,{children:"0"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"(0, 0, 0)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord",children:"0"}),(0,r.jsx)(n.span,{className:"mpunct",children:","}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(n.span,{className:"mord",children:"0"}),(0,r.jsx)(n.span,{className:"mpunct",children:","}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(n.span,{className:"mord",children:"0"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})," of the CPF frame."]}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"3D model of a head showing the CPF used in Project Aria data",src:a(54186).A+"",width:"187",height:"260"})})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7227:(e,n,a)=>{a.r(n),a.d(n,{default:()=>s});a(96540);var r=a(34164);const t={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,s),hidden:a,children:n})}},49489:(e,n,a)=>{a.r(n),a.d(n,{default:()=>y});var r=a(96540),t=a(34164),o=a(24245),s=a(56347),i=a(36494),c=a(62814),l=a(45167),d=a(69900);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const t=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,o=u(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,h]=p({queryString:a,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:t}),g=(()=>{const e=l??f;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,o]),tabValues:o}}var x=a(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function j(e){let{className:n,block:a,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),t=i[a].value;t!==r&&(l(n),s(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,t.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:o}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function _(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function y(e){const n=(0,x.default)();return(0,v.jsx)(_,{...e,children:h(e.children)},String(n))}},54186:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/CPF-bdeab7e59eb8f06f4d37f00731956b85.png"},49309:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/ImuFrame-1e456a82070c01ec3de628d161c4bb1d.png"},73083:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/aria_local_frames-92d14a3bc4d42925573a3bb515b32f58.png"},32052:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/camera3d-coordinate-frame-8e7eb3a8462f8402724205da4332725a.png"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var r=a(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);