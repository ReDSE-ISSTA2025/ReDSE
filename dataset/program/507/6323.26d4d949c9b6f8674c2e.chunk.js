!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ac1f673a-1d4a-4dd6-a45d-067f0aeb0a37",e._sentryDebugIdIdentifier="sentry-dbid-ac1f673a-1d4a-4dd6-a45d-067f0aeb0a37")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30b1ba65cc8722be7e184f4a401fb43e6b21634d"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[6323],{49032:(e,t,a)=>{a.d(t,{B9:()=>l});const n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=e=>!!e&&n.test(e)},84707:(e,t,a)=>{a.d(t,{y:()=>c});a(25440),a(17333),a(41393),a(98992),a(54520),a(81454),a(62953);var n=a(96540),l=a(83199),o=a(49032);const i=(0,a(8711).default)(l.Select).withConfig({displayName:"styled__StyledSelect",componentId:"sc-bkkrx-0"})(["width:100%;"]);a(71517),a(11379),a(93777),a(14190),a(12359),a(86097),a(17273),a(27415),a(19929),a(37583),a(55122),a(20230),a(57268),a(79733),a(25509),a(65223),a(60321),a(41927),a(11632),a(64377),a(66771),a(12516),a(68931),a(52514),a(35694),a(52774),a(49536),a(21926),a(94483),a(16215);const s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name";return e.length?"string"===typeof e[0]?[...new Set(e)]:[...new Map(e.map((e=>[e[t],e]))).values()]:[]},r=[],c=e=>{let{invitations:t,setInvitations:a}=e;const[c,d]=(0,n.useState)(r),[m,u]=(0,n.useState)(""),[p,g]=(0,n.useState)(""),v=()=>g(""),h=(0,n.useCallback)((e=>{u(e.toLowerCase())}),[u]),f=n.useCallback((e=>{let{emails:t=r,invitations:n=r,isEmailValid:l}=e;if(l){const e=s(t),l=s(n);return d(e),a(l),u(""),void v()}g("Invalid Email")}),[a]),b=(0,n.useCallback)((e=>(0,o.B9)(e)&&!c.includes(e)),[c]),y=(0,n.useCallback)((e=>{f({isEmailValid:!0,emails:e.map((e=>e.value)),invitations:e.map((e=>({email:e.value,name:e.value.split("@")[0]})))})}),[d]),E=(0,n.useCallback)((e=>{const a=e.clipboardData.getData("Text").toLowerCase().replace(/ /g,",").replace(/,,/g,",").split(",").filter((e=>b(e)))||r;f({emails:[...c,...a],invitations:[...t,...a.map((e=>({email:e,name:e.split("@")[0]})))],isEmailValid:a.length>0}),e.preventDefault()}),[c,t,b,f]),w=(0,n.useCallback)((e=>{if(m)switch(v(),e.key){case"Enter":case"Tab":case",":case" ":f({emails:[...c,m],invitations:[...t,{email:m,name:m.split("@")[0]}],isEmailValid:b(m)}),e.preventDefault()}}),[c,m,t,b,f]);return n.createElement(l.Flex,{justifyContent:"space-between",column:!0,onPaste:E},n.createElement(i,{components:{DropdownIndicator:null},inputValue:m,isClearable:!0,isMulti:!0,menuIsOpen:!1,onBlur:()=>{m&&f({emails:[...c,m],invitations:[...t,{email:m,name:m.split("@")[0]}],isEmailValid:b(m)})},onChange:y,onInputChange:h,onKeyDown:w,onClear:()=>{d(r),a(r)},placeholder:"Enter an email and hit enter",value:c.map((e=>{return{label:t=e,value:t};var t}))}),p&&n.createElement(l.Text,{color:"error"},p))}},6323:(e,t,a)=>{a.d(t,{d:()=>U});var n=a(58168),l=(a(17333),a(41393),a(98992),a(54520),a(81454),a(62953),a(96540)),o=a(83199),i=a(71847),s=a(13871),r=a(78217),c=a(83179),d=a(4659),m=a(84707),u=a(3914),p=a(14994),g=a(77181),v=a(81048),h=a(15327),f=a(74618),b=a(45765),y=a(27287);const E=e=>{let{id:t,handleDelete:a}=e;const n=(0,g.c)(t,"email");return l.createElement(o.Flex,{justifyContent:"between",alignItems:"center"},l.createElement(o.Flex,{gap:4},l.createElement(o.Icon,{color:"text",name:"check"}),l.createElement(o.Text,null,n)),l.createElement(o.Button,{flavour:"borderless",icon:"trashcan",onClick:()=>a({email:n})}))};var w=a(71835),C=a(49032),I=a(46741),k=a(69756),x=a(36850),S=a(92155),_=a(50876),A=a(63314);const R=e=>{let{email:t}=e;return(0,C.B9)(t)},T=(0,S.A)(o.Button),B={header:"Invitations",text:"Invitations successfully sent!"},U=e=>{let{onClose:t,isSubmodal:a=!1}=e;const{id:C,name:S,slug:U}=(0,u.ap)(),D=(0,p.WW)(),[N,j]=(0,l.useState)(D),[F,L]=(0,l.useState)([]),[V,M]=(0,l.useState)([]),[Z,O]=(0,l.useState)(),{sendLog:z,isReady:P}=(0,_.A)(),[K,H,Y,G]=(0,g.g)(C),[,q]=(0,w.A)(),Q=(0,l.useCallback)((e=>{const{header:a,text:n}=e||B,l=(0,s.UI)({header:a,text:n,success:!0}),o=V.filter(R).map((e=>{let{email:t}=e;return t})).join(",");(0,i.H)("invite","invite-sent","".concat(Z,"::").concat(o,"::").concat(N.join(",")),"","","invite-sent"),r.A.success(l,{context:"manageInvitations"}),t(),P&&z({isSuccess:!0},!0)}),[z,P]),W=(0,I._s)(),J=e=>t=>{let{email:a}=t;e&&H(e),M(V.filter((e=>e.email!==a))),L(F.filter((e=>e.email!==a)))},$=(0,l.useCallback)((()=>{j([])}),[j]),X="member"===Z;return l.createElement(h.GO,{onClose:t,closeOnClickOutside:!1},l.createElement(A.Ay,{feature:"ManageInvitationsModal"},l.createElement(f.z,{onClose:t,isSubmodal:a,title:"Invite Users"}),l.createElement(b.U,null,"Invite users to\xa0",S),l.createElement(h.Yv,null,l.createElement(y.dE,null,"Send invitations to your team"),l.createElement(y.BZ,null,"TIP: You can send more invitations at once, separate each with a comma."),l.createElement(m.y,{invitations:V,setInvitations:M}),l.createElement("br",null),l.createElement(y.dE,null,"Rooms"),l.createElement(o.Flex,{alignItems:"center",justifyContent:"between",margin:[1,0,2]},l.createElement(o.TextSmall,null,"Choose one or more rooms you'd like to invite users to."),!!N.length&&l.createElement(o.Button,{onClick:$,padding:[0],flavour:"borderless","data-ga":"rooms-clear",label:"Clear",small:!0},"Clear")),l.createElement(o.Box,{"data-testid":"invite-selectRoom"},l.createElement(c.A,(0,n.A)({selectedValue:N,onChange:j},X?{formatOptions:e=>{let{name:t}=e;return{isDisabled:t===v.Q8}},filterValues:e=>{let{label:t}=e;return t===v.Q8}}:{}))),l.createElement("br",null),l.createElement(y.dE,null,"Role"),l.createElement(y.BZ,null,"Choose a role for invited user."," ",l.createElement(d.A,{href:x.S,target:"_blank",rel:"noopener noreferrer",Component:o.TextSmall},"Learn more")),l.createElement(o.Box,{"data-testid":"invite-selectRole"},l.createElement(k.A,{availableRoles:W,dataGA:"invite-to-space",dataTestId:"invite-selectRole",onChange:e=>{O(e.target.value)},value:Z})),l.createElement(y.fh,null,l.createElement(T,{label:"Send",onClick:async()=>{const e=V.filter(R).map((e=>({email:e.email,name:e.name,role:Z,roomIDs:N}))),t="".concat(window.location.origin,"/spaces/").concat(U,"/join-space");Y(e,t,{onSuccess:Q,onError:e=>{q(e),z({isFailure:!0,error:e.message},!0)}})},disabled:0===V.length||!Z,flavour:"hollow",isLoading:G,"data-ga":"manage-invitations-modal::click-send::modal-footer"})),l.createElement(o.H5,{margin:[2,0,0]},"Invitations awaiting response"),l.createElement(o.Flex,{column:!0},K.length>0?K.map((e=>l.createElement(E,{key:e,handleDelete:J(e),id:e}))):l.createElement(y.au,null,l.createElement("br",null),l.createElement(y.dE,null,"You haven't invited any users yet."))))))}},27287:(e,t,a)=>{a.d(t,{BZ:()=>r,au:()=>s,dE:()=>o,fh:()=>i});var n=a(8711),l=a(83199);const o=(0,n.default)(l.H5).withConfig({displayName:"styled__StyledH5",componentId:"sc-1kusjmi-0"})(["display:flex;align-items:center;"]),i=n.default.div.withConfig({displayName:"styled__FormRow",componentId:"sc-1kusjmi-1"})(["width:100%;display:flex;flex-flow:row no-wrap;justify-content:flex-end;margin-top:",";"],(0,l.getSizeBy)(2)),s=n.default.div.withConfig({displayName:"styled__StyledUserInvitationEmptyListItem",componentId:"sc-1kusjmi-2"})(["display:flex;flex-flow:column nowrap;align-items:center;"]),r=(0,n.default)(l.TextSmall).withConfig({displayName:"styled__StyledSecondaryText",componentId:"sc-1kusjmi-3"})(["margin:2px 0 8px;"])},69756:(e,t,a)=>{a.d(t,{A:()=>v});a(41393),a(81454);var n=a(96540),l=a(83199),o=a(8711),i=a(80158),s=a(97674),r=a(3914),c=a(4659),d=a(84976),m=a(46741),u=a(27994);const p={admin:"Users with this role can control Spaces, Rooms, Nodes, Users and Billing. They can also access any Room in the Space.",member:"Users with this role can create Rooms and invite other Members. They can only see the Rooms they belong to and all Nodes in the All Nodes room",manager:"Users with this role can manage Rooms and Users. They can access any Room in the Space.",troubleshooter:"Users with this role can use Netdata to troubleshoot, not manage entities. They can access any Room in the Space.",observer:"Users with this role can only view data in specific Rooms.",billing:"Users with this role can handle billing options and invoices."},g=(0,o.default)(l.Flex).withConfig({displayName:"rolePicker__PlanBadge",componentId:"sc-ypuqww-0"})(["pointer-events:auto;"]),v=e=>{let{availableRoles:t,dataGA:a,dataTestId:o,onChange:v,value:h}=e;const f=(0,r.ap)("plan"),b=(0,n.useMemo)((()=>(0,s.L_)(f).map((e=>({isChecked:e===h,isEnabled:t.includes(e),role:e}))).sort(((e,t)=>Number(t.isEnabled)-Number(e.isEnabled)))),[t,s.L_,f,h]),y=(0,m.JT)("billing:ReadAll"),{url:E}=(0,u.A)();return n.createElement(l.Flex,{column:!0,gap:2,"data-testid":"".concat(o,"-roleOptions")},b.map((e=>{let{isChecked:t,isEnabled:s,role:r}=e;const m=s?void 0:"medium",u="troubleshooter"===r?"pro":"business";return n.createElement(l.RadioButton,{key:r,checked:t,"data-ga":"".concat(a,"::select-role-").concat(r,"::global-view"),"data-testid":"".concat(o,"-").concat(r,"Option"),disabled:!s,onChange:v,value:r,alignItems:"start"},n.createElement(l.Flex,{column:!0},n.createElement(l.Flex,{gap:2,alignItems:"center"},n.createElement(l.Text,{opacity:m},(0,i.Zr)(r)),!s&&n.createElement(g,{background:"sideBarMini",border:{side:"all",color:"border"},cursor:"initial",padding:[1],round:!0},n.createElement(c.A,{align:"bottom",as:d.N_,boxProps:{as:l.Flex},color:"text",Component:l.TextMicro,content:"Upgrade your plan in order to use this role","data-ga":"".concat(a,"::click-plan-badge-").concat(u,"::global-view"),disabled:!y,hoverColor:"textFocus",showToolTip:!0,strong:!0,to:E},"Upgrade now!"))),n.createElement(l.TextSmall,{color:"textLite",opacity:m},p[r])))})))}},77181:(e,t,a)=>{a.d(t,{c:()=>f,g:()=>h});a(17333),a(9920),a(41393),a(98992),a(54520),a(3949),a(81454),a(25509),a(65223),a(60321),a(41927),a(11632),a(64377),a(66771),a(12516),a(68931),a(52514),a(35694),a(52774),a(49536),a(21926),a(94483),a(16215),a(62953);var n=a(96540),l=a(47444);const o=(0,l.Iz)({key:"invitation",default:{id:"",email:""}}),i=(0,l.Iz)({key:"invitationIds",default:[]});var s=a(26655);const r=e=>e.map((e=>{let{id:t,email:a}=e;return{id:t,email:a}})),c={member:1,admin:2,manager:3,troubleshooter:4,observer:5,billing:6},d=e=>e.map((e=>{let{role:t,...a}=e;if(void 0===c[t])throw new Error("role not found");return{role:c[t],...a}}));a(14905),a(8872);var m=a(78969);const u=e=>{let{data:t,invitations:a}=e;return t.reduce(((e,t,n)=>{var l,o;(o=t.errorMsgKey)&&o===m.vK&&(null!==(l=a[n])&&void 0!==l&&l.email&&e.push(a[n].email));return e}),[])},p=e=>e.length>1,g=(0,l.K0)({key:"spaceInvitationValue",get:e=>{let{id:t,key:a}=e;return e=>{let{get:n}=e;const l=n(o(t));return a?l[a]:l}}}),v=(0,l.K0)({key:"spaceInvitationsIdsValue",get:e=>t=>{let{get:a}=t;return a(i(e))},set:e=>(t,a)=>{let{set:n}=t,{invitations:l,merge:s}=a;n(i(e),(e=>[...new Set([...e,...l.map((e=>{let{id:t}=e;return t}))])])),l.forEach((e=>{n(o(e.id),(t=>({...s&&t,...e})))}))}}),h=e=>{const t=(0,l.vc)(v(e)),[a,c]=(0,n.useState)(!1),m=(0,l.Zs)((t=>{let{snapshot:a,set:n}=t;return async()=>{if(!(await a.getLoadable(v(e))).length){const{data:t}=await(e=>s.A.get("/api/v2/spaces/".concat(e,"/invitations"),{transform:r}))(e);n(v(e),{invitations:t,merge:!0})}}}),[e]),g=(0,n.useCallback)((async(t,a,n)=>{let{onSuccess:l,onError:o}=n;try{c(!0);const{data:n}=await((e,t,a)=>s.A.post("/api/v1/spaces/".concat(e,"/invitations"),{redirectURI:a,requests:d(t)}))(e,t,a),i=u({data:n,invitations:t});if(i.length&&!p(t))return void(o&&o({message:"User has already joined that space!"}));if(i.length&&p(t)){if(i.length===t.length)return void(o&&o({message:"All of the selected users are already meembers of this space"}));if(l)return void l({header:"Invitations partially send",text:"Some of the selected users are already members of this space"})}l&&l()}catch(i){o&&o(i)}finally{c(!1)}}),[e]),h=(0,l.Zs)((t=>{let{snapshot:a,set:n,reset:l}=t;return async t=>{const r=await a.getPromise(v(e)),c=r.filter((e=>e===t));n(i(e),(e=>{const t=new Set(e);return c.forEach((e=>t.delete(e))),[...t]}));try{await((e,t)=>s.A.delete("/api/v1/spaces/".concat(e,"/invitations"),{params:{invitation_ids:t.join(",")}}))(e,[t]),c.forEach((e=>{l(o(e))}))}catch(d){n(v(e),{invitations:r,merge:!1})}}}),[e]);return(0,n.useEffect)((()=>{m()}),[e]),[t,h,g,a]},f=(e,t)=>(0,l.vc)(g({id:e,key:t}))}}]);