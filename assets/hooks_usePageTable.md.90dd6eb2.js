import{u as $}from"./chunks/index.d221e273.js";import{u as O}from"./chunks/usePageTable.b3a42b41.js";import"./chunks/dayjs.min.fc668ad8.js";import{d as G,h as L,C as e,o as y,c as d,H as o,w as n,l as b,L as W,b as g,a as l,t as D,k as s}from"./chunks/framework.f34eef09.js";import"./chunks/is.179ae4a7.js";import"./chunks/index.44acc78f.js";import"./chunks/cloneDeep.4d284b0e.js";const X={class:"vp-raw"},j=s("span",null,"查询",-1),H=s("span",null,"重置",-1),J=s("span",null,"新建",-1),K=s("span",null,"批量导入",-1),Q=s("span",null,"下载",-1),R=s("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"},null,-1),Y=s("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"},null,-1),Z=s("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"},null,-1),ss={key:0,class:"circle"},ls={key:1,class:"circle pass"},os=G({__name:"usePageTable.md.demo.29f5ec9e",setup(T){function v(r){return new Promise(t=>{const m=new Array(r.pageSize).fill(1).map((E,c)=>({index:r.pageSize*(r.pageNum-1)+c+1,number:`number-${c}`,name:"XGMUNG",contentType:"img",count:6,status:"已下线",filterType:"人工筛选",createdTime:new Date}));setTimeout(()=>{t({records:m,total:1e3,pageNum:r.pageNum,pageSize:r.pageSize})})})}const{options:A}=$(()=>Promise.resolve([{label:"label-1",value:0},{label:"label-2",value:1}]),{immediate:!0}),F=()=>({number:"",name:"",contentType:"",filterType:"",createdTime:[],status:""}),p=L(F()),{loadTableData:h,tableConfig:x}=O({fetch(r){return console.log("查询条件：",p.value),v(r)},columns:[{title:"编号",dataIndex:"index",width:100},{title:"集合编号",dataIndex:"number",minWidth:200},{title:"集合名称",dataIndex:"name"},{title:"内容体裁",dataIndex:"contentType",slotName:"contentType"},{title:"筛选方式",dataIndex:"filterType",slotName:"filterType"},{title:"内容量",dataIndex:"count"},{title:"创建时间",dataIndex:"createdTime"},{title:"状态",dataIndex:"status",slotName:"status"},{title:"操作",dataIndex:"operations",slotName:"operations",width:120}],immediate:!0}),w=()=>{p.value=F()};return(r,t)=>{const m=e("a-input"),E=e("a-form-item"),c=e("a-col"),u=e("a-select"),k=e("a-range-picker"),C=e("a-row"),M=e("a-form"),_=e("a-divider"),z=e("icon-search"),i=e("a-button"),N=e("icon-refresh"),f=e("a-space"),P=e("icon-plus"),I=e("a-upload"),S=e("icon-download"),B=e("a-avatar"),V=e("a-link"),q=e("a-table"),U=e("a-card");return y(),d("div",X,[o(U,{bordered:!1,title:"查询表格"},{default:n(()=>[o(C,null,{default:n(()=>[o(c,{flex:1},{default:n(()=>[o(M,{model:p.value,"label-col-props":{span:6},"wrapper-col-props":{span:18},"label-align":"left"},{default:n(()=>[o(C,{gutter:16},{default:n(()=>[o(c,{span:8},{default:n(()=>[o(E,{field:"number",label:"集合编号"},{default:n(()=>[o(m,{modelValue:p.value.number,"onUpdate:modelValue":t[0]||(t[0]=a=>p.value.number=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(c,{span:8},{default:n(()=>[o(E,{field:"name",label:"集合名称"},{default:n(()=>[o(m,{modelValue:p.value.name,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value.name=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(c,{span:8},{default:n(()=>[o(E,{field:"contentType",label:"内容体裁"},{default:n(()=>[o(u,{modelValue:p.value.contentType,"onUpdate:modelValue":t[2]||(t[2]=a=>p.value.contentType=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(c,{span:8},{default:n(()=>[o(E,{field:"filterType",label:"筛选方式"},{default:n(()=>[o(u,{modelValue:p.value.filterType,"onUpdate:modelValue":t[3]||(t[3]=a=>p.value.filterType=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(c,{span:8},{default:n(()=>[o(E,{field:"createdTime",label:"创建时间"},{default:n(()=>[o(k,{modelValue:p.value.createdTime,"onUpdate:modelValue":t[4]||(t[4]=a=>p.value.createdTime=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),o(c,{span:8},{default:n(()=>[o(E,{field:"status",label:"状态"},{default:n(()=>[o(u,{modelValue:p.value.status,"onUpdate:modelValue":t[5]||(t[5]=a=>p.value.status=a),options:b(A)},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),o(_,{style:{height:"84px"},direction:"vertical"}),o(c,{flex:"86px",style:{"text-align":"right"}},{default:n(()=>[o(f,{direction:"vertical",size:18},{default:n(()=>[o(i,{type:"primary",onClick:t[6]||(t[6]=a=>b(h)())},{icon:n(()=>[o(z)]),default:n(()=>[j]),_:1}),o(i,{onClick:w},{icon:n(()=>[o(N)]),default:n(()=>[H]),_:1})]),_:1})]),_:1})]),_:1}),o(_,{style:{"margin-top":"0"}}),o(C,{style:{"margin-bottom":"16px"}},{default:n(()=>[o(c,{span:16},{default:n(()=>[o(f,null,{default:n(()=>[o(i,{type:"primary"},{icon:n(()=>[o(P)]),default:n(()=>[J]),_:1}),o(I,{action:"/"},{"upload-button":n(()=>[o(i,null,{default:n(()=>[K]),_:1})]),_:1})]),_:1})]),_:1}),o(c,{span:8,style:{"text-align":"right"}},{default:n(()=>[o(i,null,{icon:n(()=>[o(S)]),default:n(()=>[Q]),_:1})]),_:1})]),_:1}),o(q,W({bordered:!1,scrollbar:!1,"sticky-header":!0},b(x)),{contentType:n(({record:a})=>[o(f,null,{default:n(()=>[a.contentType==="img"?(y(),g(B,{key:0,size:16,shape:"square"},{default:n(()=>[R]),_:1})):a.contentType==="horizontalVideo"?(y(),g(B,{key:1,size:16,shape:"square"},{default:n(()=>[Y]),_:1})):(y(),g(B,{key:2,size:16,shape:"square"},{default:n(()=>[Z]),_:1})),l(" "+D(a.contentType),1)]),_:2},1024)]),filterType:n(({record:a})=>[l(D(a.filterType),1)]),status:n(({record:a})=>[a.status==="offline"?(y(),d("span",ss)):(y(),d("span",ls)),l(" "+D(a.status),1)]),operations:n(({record:a})=>[o(V,{type:"text",size:"small"},{default:n(()=>[l("编辑")]),_:1})]),_:1},16)]),_:1})])}}}),ns=s("h1",{id:"usetablepage",tabindex:"-1"},[l("useTablePage "),s("a",{class:"header-anchor",href:"#usetablepage","aria-label":'Permalink to "useTablePage"'},"​")],-1),as=s("p",null,[s("code",null,"a-table"),l(" 前端页场景的工具函数，简化前端表格的配置")],-1),es=s("p",null,[l("通过 "),s("code",null,"useColumns"),l(" 实现表格列minWidth，visible的功能")],-1),ts=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vp-raw"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"a-card"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":bordered"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"false"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"查询表格"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-row"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":flex"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"1"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"a-form"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":label-col-props"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ span: 6 }"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":wrapper-col-props"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ span: 18 }"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label-align"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"left"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-row"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":gutter"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"16"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"8"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"number"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"集合编号"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  <"),s("span",{style:{color:"#85E89D"}},"a-input"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel.number"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"8"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"集合名称"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  <"),s("span",{style:{color:"#85E89D"}},"a-input"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel.name"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"8"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"contentType"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"内容体裁"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  <"),s("span",{style:{color:"#85E89D"}},"a-select"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel.contentType"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"8"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"filterType"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"筛选方式"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  <"),s("span",{style:{color:"#85E89D"}},"a-select"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel.filterType"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"8"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"createdTime"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"创建时间"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  <"),s("span",{style:{color:"#85E89D"}},"a-range-picker"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel.createdTime"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"width: 100%"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"8"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"status"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"状态"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  <"),s("span",{style:{color:"#85E89D"}},"a-select"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formModel.status"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":options"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"options"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-row"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"a-form"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-divider"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"height: 84px"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"direction"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vertical"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":flex"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"'86px'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"text-align: right"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"direction"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vertical"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"18"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"loadTableData()"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"icon"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"icon-search"),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">查询</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"reset"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"icon"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"icon-refresh"),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">重置</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"a-row"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-divider"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-top: 0"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-row"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-bottom: 16px"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"16"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"icon"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"icon-plus"),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">新建</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-upload"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"action"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"/"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"upload-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">批量导入</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                </"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-upload"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":span"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"8"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"text-align: right"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"icon"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"icon-download"),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">下载</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"a-col"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"a-row"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-table"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":bordered"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"false"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":scrollbar"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"false"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":sticky-header"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"true"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-bind"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableConfig"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"contentType"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{ record }"),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-avatar"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"record.contentType === 'img'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"16"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"shape"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"square"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"img"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"alt"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"avatar"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"src"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-avatar"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-avatar"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-else-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"record.contentType === 'horizontalVideo'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"16"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"shape"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"square"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"img"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"alt"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"avatar"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"src"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-avatar"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"a-avatar"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-else"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"16"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"shape"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"square"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              <"),s("span",{style:{color:"#85E89D"}},"img"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"alt"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"avatar"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"src"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"a-avatar"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            {{ record.contentType }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"filterType"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{ record }"),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          {{ record.filterType }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"status"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{ record }"),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"record.status === 'offline'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"circle"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-else"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"circle pass"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          {{ record.status }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"operations"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{ record }"),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"a-link"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"text"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"small"'),s("span",{style:{color:"#E1E4E8"}},">编辑</"),s("span",{style:{color:"#85E89D"}},"a-link"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"a-table"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"a-card"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useTablePage, useSelectOptions } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@devops-web/hooks'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { TablePageData } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@devops-web/hooks'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"getPageList"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," { "),s("span",{style:{color:"#FFAB70"}},"pageSize"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"number"),s("span",{style:{color:"#E1E4E8"}},"; "),s("span",{style:{color:"#FFAB70"}},"pageNum"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"number"),s("span",{style:{color:"#E1E4E8"}}," }) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"Promise"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#B392F0"}},"TablePageData"),s("span",{style:{color:"#E1E4E8"}},">(("),s("span",{style:{color:"#FFAB70"}},"resolve"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Array"),s("span",{style:{color:"#E1E4E8"}},"(data.pageSize)."),s("span",{style:{color:"#B392F0"}},"fill"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},")."),s("span",{style:{color:"#B392F0"}},"map"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"index"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        index: data.pageSize "),s("span",{style:{color:"#F97583"}},"*"),s("span",{style:{color:"#E1E4E8"}}," (data.pageNum "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," index "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        number: "),s("span",{style:{color:"#9ECBFF"}},"`number-${"),s("span",{style:{color:"#E1E4E8"}},"index"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'XGMUNG'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        contentType: "),s("span",{style:{color:"#9ECBFF"}},"'img'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        count: "),s("span",{style:{color:"#79B8FF"}},"6"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        status: "),s("span",{style:{color:"#9ECBFF"}},"'已下线'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        filterType: "),s("span",{style:{color:"#9ECBFF"}},"'人工筛选'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        createdTime: "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"setTimeout"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"resolve"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        records: list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        total: "),s("span",{style:{color:"#79B8FF"}},"1000"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        pageNum: data.pageNum,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        pageSize: data.pageSize")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," { "),s("span",{style:{color:"#79B8FF"}},"options"),s("span",{style:{color:"#E1E4E8"}}," } "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useSelectOptions"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"Promise"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"resolve"),s("span",{style:{color:"#E1E4E8"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      { label: "),s("span",{style:{color:"#9ECBFF"}},"'label-1'"),s("span",{style:{color:"#E1E4E8"}},", value: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      { label: "),s("span",{style:{color:"#9ECBFF"}},"'label-2'"),s("span",{style:{color:"#E1E4E8"}},", value: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { immediate: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"generateFormModel"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    number: "),s("span",{style:{color:"#9ECBFF"}},"''"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"''"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    contentType: "),s("span",{style:{color:"#9ECBFF"}},"''"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    filterType: "),s("span",{style:{color:"#9ECBFF"}},"''"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    createdTime: [],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    status: "),s("span",{style:{color:"#9ECBFF"}},"''")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"formModel"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#B392F0"}},"generateFormModel"),s("span",{style:{color:"#E1E4E8"}},"())")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," { "),s("span",{style:{color:"#79B8FF"}},"loadTableData"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"tableConfig"),s("span",{style:{color:"#E1E4E8"}}," } "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useTablePage"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"fetch"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"pagination"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'查询条件：'"),s("span",{style:{color:"#E1E4E8"}},", formModel.value)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"getPageList"),s("span",{style:{color:"#E1E4E8"}},"(pagination)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  columns: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'编号'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'index'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      width: "),s("span",{style:{color:"#79B8FF"}},"100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'集合编号'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'number'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      minWidth: "),s("span",{style:{color:"#79B8FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'集合名称'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'内容体裁'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'contentType'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      slotName: "),s("span",{style:{color:"#9ECBFF"}},"'contentType'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'筛选方式'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'filterType'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      slotName: "),s("span",{style:{color:"#9ECBFF"}},"'filterType'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'内容量'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'count'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'创建时间'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'createdTime'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'状态'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'status'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      slotName: "),s("span",{style:{color:"#9ECBFF"}},"'status'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: "),s("span",{style:{color:"#9ECBFF"}},"'操作'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'operations'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      slotName: "),s("span",{style:{color:"#9ECBFF"}},"'operations'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      width: "),s("span",{style:{color:"#79B8FF"}},"120")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  immediate: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#6A737D"}},"// 传true会自动调用一次loadTableData()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"reset"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  formModel.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"generateFormModel"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"vp-raw"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"a-card"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":bordered"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"false"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"title"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"查询表格"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-row"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":flex"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"1"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"a-form"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":label-col-props"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ span: 6 }"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":wrapper-col-props"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ span: 18 }"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label-align"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"left"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-row"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":gutter"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"16"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"8"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"number"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"集合编号"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  <"),s("span",{style:{color:"#22863A"}},"a-input"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel.number"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"8"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"name"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"集合名称"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  <"),s("span",{style:{color:"#22863A"}},"a-input"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel.name"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"8"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"contentType"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"内容体裁"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  <"),s("span",{style:{color:"#22863A"}},"a-select"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel.contentType"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"8"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"filterType"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"筛选方式"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  <"),s("span",{style:{color:"#22863A"}},"a-select"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel.filterType"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"8"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"createdTime"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"创建时间"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  <"),s("span",{style:{color:"#22863A"}},"a-range-picker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel.createdTime"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"width: 100%"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"8"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"status"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"状态"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  <"),s("span",{style:{color:"#22863A"}},"a-select"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formModel.status"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":options"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"options"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-row"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"a-form"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-divider"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"height: 84px"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"direction"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"vertical"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":flex"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"'86px'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"text-align: right"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"direction"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"vertical"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"18"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"loadTableData()"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"icon"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"icon-search"),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">查询</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"reset"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"icon"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"icon-refresh"),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">重置</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"a-row"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-divider"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"margin-top: 0"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-row"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"margin-bottom: 16px"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"16"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"icon"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"icon-plus"),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">新建</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-upload"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"action"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"/"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"upload-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">批量导入</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                </"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-upload"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":span"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"8"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"text-align: right"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"icon"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"icon-download"),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">下载</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"a-col"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"a-row"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-table"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":bordered"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"false"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":scrollbar"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"false"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":sticky-header"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"true"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-bind"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableConfig"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"contentType"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},"{ record }"),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-avatar"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"record.contentType === 'img'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"16"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"shape"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"square"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"img"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"alt"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"avatar"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"src"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-avatar"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-avatar"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-else-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"record.contentType === 'horizontalVideo'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"16"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"shape"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"square"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"img"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"alt"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"avatar"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"src"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-avatar"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"a-avatar"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-else"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"16"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"shape"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"square"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              <"),s("span",{style:{color:"#22863A"}},"img"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"alt"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"avatar"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"src"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"a-avatar"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            {{ record.contentType }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"filterType"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},"{ record }"),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          {{ record.filterType }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"status"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},"{ record }"),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"record.status === 'offline'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"circle"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-else"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"circle pass"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          {{ record.status }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"operations"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},"{ record }"),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"a-link"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"text"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"small"'),s("span",{style:{color:"#24292E"}},">编辑</"),s("span",{style:{color:"#22863A"}},"a-link"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"a-table"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"a-card"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useTablePage, useSelectOptions } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@devops-web/hooks'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { TablePageData } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@devops-web/hooks'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"getPageList"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"data"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," { "),s("span",{style:{color:"#E36209"}},"pageSize"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}},"; "),s("span",{style:{color:"#E36209"}},"pageNum"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}}," }) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"Promise"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#6F42C1"}},"TablePageData"),s("span",{style:{color:"#24292E"}},">(("),s("span",{style:{color:"#E36209"}},"resolve"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Array"),s("span",{style:{color:"#24292E"}},"(data.pageSize)."),s("span",{style:{color:"#6F42C1"}},"fill"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},")."),s("span",{style:{color:"#6F42C1"}},"map"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"item"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"index"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        index: data.pageSize "),s("span",{style:{color:"#D73A49"}},"*"),s("span",{style:{color:"#24292E"}}," (data.pageNum "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," index "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        number: "),s("span",{style:{color:"#032F62"}},"`number-${"),s("span",{style:{color:"#24292E"}},"index"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'XGMUNG'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        contentType: "),s("span",{style:{color:"#032F62"}},"'img'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        count: "),s("span",{style:{color:"#005CC5"}},"6"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        status: "),s("span",{style:{color:"#032F62"}},"'已下线'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        filterType: "),s("span",{style:{color:"#032F62"}},"'人工筛选'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        createdTime: "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"setTimeout"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"resolve"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        records: list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        total: "),s("span",{style:{color:"#005CC5"}},"1000"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        pageNum: data.pageNum,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        pageSize: data.pageSize")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," { "),s("span",{style:{color:"#005CC5"}},"options"),s("span",{style:{color:"#24292E"}}," } "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useSelectOptions"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"Promise"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"resolve"),s("span",{style:{color:"#24292E"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      { label: "),s("span",{style:{color:"#032F62"}},"'label-1'"),s("span",{style:{color:"#24292E"}},", value: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      { label: "),s("span",{style:{color:"#032F62"}},"'label-2'"),s("span",{style:{color:"#24292E"}},", value: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { immediate: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"generateFormModel"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    number: "),s("span",{style:{color:"#032F62"}},"''"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"''"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    contentType: "),s("span",{style:{color:"#032F62"}},"''"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    filterType: "),s("span",{style:{color:"#032F62"}},"''"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    createdTime: [],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    status: "),s("span",{style:{color:"#032F62"}},"''")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"formModel"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#6F42C1"}},"generateFormModel"),s("span",{style:{color:"#24292E"}},"())")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," { "),s("span",{style:{color:"#005CC5"}},"loadTableData"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"tableConfig"),s("span",{style:{color:"#24292E"}}," } "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useTablePage"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"fetch"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"pagination"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'查询条件：'"),s("span",{style:{color:"#24292E"}},", formModel.value)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"getPageList"),s("span",{style:{color:"#24292E"}},"(pagination)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  columns: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'编号'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'index'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      width: "),s("span",{style:{color:"#005CC5"}},"100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'集合编号'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'number'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      minWidth: "),s("span",{style:{color:"#005CC5"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'集合名称'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'内容体裁'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'contentType'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      slotName: "),s("span",{style:{color:"#032F62"}},"'contentType'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'筛选方式'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'filterType'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      slotName: "),s("span",{style:{color:"#032F62"}},"'filterType'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'内容量'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'count'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'创建时间'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'createdTime'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'状态'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'status'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      slotName: "),s("span",{style:{color:"#032F62"}},"'status'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: "),s("span",{style:{color:"#032F62"}},"'操作'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      dataIndex: "),s("span",{style:{color:"#032F62"}},"'operations'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      slotName: "),s("span",{style:{color:"#032F62"}},"'operations'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      width: "),s("span",{style:{color:"#005CC5"}},"120")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  immediate: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6A737D"}},"// 传true会自动调用一次loadTableData()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"reset"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  formModel.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"generateFormModel"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])])],-1),ds=JSON.parse('{"title":"useTablePage","description":"","frontmatter":{},"headers":[],"relativePath":"hooks/usePageTable.md","filePath":"hooks/usePageTable.md","lastUpdated":null}'),ps={name:"hooks/usePageTable.md"},us=Object.assign(ps,{setup(T){return(v,A)=>{const F=e("demo");return y(),d("div",null,[ns,as,es,o(F,{customClass:"demoblock-custom",sourceCode:`<template>
  <div class="vp-raw">
    <a-card :bordered="false" title="查询表格">
      <a-row>
        <a-col :flex="1">
          <a-form :model="formModel" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }" label-align="left">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="number" label="集合编号">
                  <a-input v-model="formModel.number" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" label="集合名称">
                  <a-input v-model="formModel.name" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="contentType" label="内容体裁">
                  <a-select v-model="formModel.contentType" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="filterType" label="筛选方式">
                  <a-select v-model="formModel.filterType" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="createdTime" label="创建时间">
                  <a-range-picker v-model="formModel.createdTime" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="status" label="状态">
                  <a-select v-model="formModel.status" :options="options" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="loadTableData()">
              <template #icon>
                <icon-search />
              </template>
              <span>查询</span>
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              <span>重置</span>
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="16">
          <a-space>
            <a-button type="primary">
              <template #icon>
                <icon-plus />
              </template>
              <span>新建</span>
            </a-button>
            <a-upload action="/">
              <template #upload-button>
                <a-button>
                  <span>批量导入</span>
                </a-button>
              </template>
            </a-upload>
          </a-space>
        </a-col>
        <a-col :span="8" style="text-align: right">
          <a-button>
            <template #icon>
              <icon-download />
            </template>
            <span>下载</span>
          </a-button>
        </a-col>
      </a-row>
      <a-table :bordered="false" :scrollbar="false" :sticky-header="true" v-bind="tableConfig">
        <template #contentType="{ record }">
          <a-space>
            <a-avatar v-if="record.contentType === 'img'" :size="16" shape="square">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-avatar v-else-if="record.contentType === 'horizontalVideo'" :size="16" shape="square">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-avatar v-else :size="16" shape="square">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            {{ record.contentType }}
          </a-space>
        </template>
        <template #filterType="{ record }">
          {{ record.filterType }}
        </template>
        <template #status="{ record }">
          <span v-if="record.status === 'offline'" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ record.status }}
        </template>
        <template #operations="{ record }">
          <a-link type="text" size="small">编辑</a-link>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { useTablePage, useSelectOptions } from '@devops-web/hooks'
import { TablePageData } from '@devops-web/hooks'
import { ref } from 'vue'

function getPageList(data: { pageSize: number; pageNum: number }) {
  return new Promise<TablePageData>((resolve) => {
    const list = new Array(data.pageSize).fill(1).map((item, index) => {
      return {
        index: data.pageSize * (data.pageNum - 1) + index + 1,
        number: \`number-\${index}\`,
        name: 'XGMUNG',
        contentType: 'img',
        count: 6,
        status: '已下线',
        filterType: '人工筛选',
        createdTime: new Date()
      }
    })
    setTimeout(() => {
      resolve({
        records: list,
        total: 1000,
        pageNum: data.pageNum,
        pageSize: data.pageSize
      })
    })
  })
}

const { options } = useSelectOptions(
  () => {
    return Promise.resolve([
      { label: 'label-1', value: 0 },
      { label: 'label-2', value: 1 }
    ])
  },
  { immediate: true }
)

const generateFormModel = () => {
  return {
    number: '',
    name: '',
    contentType: '',
    filterType: '',
    createdTime: [],
    status: ''
  }
}
const formModel = ref(generateFormModel())

const { loadTableData, tableConfig } = useTablePage({
  fetch(pagination) {
    console.log('查询条件：', formModel.value)
    return getPageList(pagination)
  },
  columns: [
    {
      title: '编号',
      dataIndex: 'index',
      width: 100
    },
    {
      title: '集合编号',
      dataIndex: 'number',
      minWidth: 200
    },
    {
      title: '集合名称',
      dataIndex: 'name'
    },
    {
      title: '内容体裁',
      dataIndex: 'contentType',
      slotName: 'contentType'
    },
    {
      title: '筛选方式',
      dataIndex: 'filterType',
      slotName: 'filterType'
    },
    {
      title: '内容量',
      dataIndex: 'count'
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime'
    },
    {
      title: '状态',
      dataIndex: 'status',
      slotName: 'status'
    },
    {
      title: '操作',
      dataIndex: 'operations',
      slotName: 'operations',
      width: 120
    }
  ],
  immediate: true // 传true会自动调用一次loadTableData()
})

const reset = () => {
  formModel.value = generateFormModel()
}
<\/script>
`},{highlight:n(()=>[ts]),default:n(()=>[o(os)]),_:1})])}}});export{ds as __pageData,us as default};
