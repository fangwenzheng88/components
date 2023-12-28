import{d as j,h as N,a4 as O,C as p,o as i,c as v,H as t,w as a,a as l,b as m,e as A,t as z,F as L,k as s}from"./chunks/framework.f34eef09.js";const H=j({__name:"edit-table-form.md.demo.7c388318",setup(x){const C=()=>({name:void 0,age:void 0,tableData:[]}),f=N(null),r=O(C());function I(){var e;(e=f.value)==null||e.resetFields(),Object.assign(r,C())}function g(e){console.log("表单数据:",e),alert("表单提交成功!")}const h={name:{required:!0,message:"请填写数据"},age:{required:!0,message:"请填写数据"},tableData:[{type:"array",minLength:1,message:"最少新增1条数据",required:!0},{validator(e,E){const d=[];e.forEach((y,u)=>{y.code||d.push(`第${u+1}行，集合编号必填`),y.name||d.push(`第${u+1}行，集合名称必填`)}),E(d.join("；"))}}]},_=[{title:"集合编号",dataIndex:"code"},{title:"集合名称",dataIndex:"name"},{title:"筛选方式",dataIndex:"filterType"},{title:"内容量",dataIndex:"count"},{title:"创建时间",dataIndex:"createdTime"},{title:"操作",width:120,dataIndex:"operation",slotName:"operation"}];function T(e){return!!["code","name","filterType","count","createdTime"].includes(e.column.dataIndex)}function w(e){if(["code","name"].includes(e.column.dataIndex)){const E=e.record[e.column.dataIndex];if(E==null||E==="")return!1}return!0}function k(){r.tableData.push({})}function V(e){r.tableData.splice(e,1)}return(e,E)=>{const d=p("a-input"),y=p("a-form-item"),u=p("a-input-number"),D=p("devops-input-editor"),R=p("devops-select-editor"),P=p("devops-date-editor"),U=p("devops-number-editor"),B=p("a-link"),q=p("devops-edit-table"),b=p("a-button"),S=p("a-space"),$=p("a-form");return i(),v(L,null,[t($,{ref_key:"formRef",ref:f,class:"vp-raw",model:r,"auto-label-width":!0,rules:h,onSubmitSuccess:g},{default:a(()=>[t(y,{field:"name",label:"名称"},{default:a(()=>[t(d,{modelValue:r.name,"onUpdate:modelValue":E[0]||(E[0]=o=>r.name=o)},null,8,["modelValue"])]),_:1}),t(y,{field:"age",label:"年龄"},{default:a(()=>[t(u,{modelValue:r.age,"onUpdate:modelValue":E[1]||(E[1]=o=>r.age=o)},null,8,["modelValue"])]),_:1}),t(y,{field:"tableData",label:"可编辑表格"},{extra:a(()=>[t(B,{onClick:k},{default:a(()=>[l("添加一条数据")]),_:1})]),default:a(()=>[t(q,{"is-editor":T,validator:w,"column-resizable":"",bordered:{cell:!0},data:r.tableData,columns:_,"table-layout-fixed":"",pagination:!1,"show-editor":""},{editor:a(({record:o,column:n,cellendedit:F})=>[n.dataIndex==="code"?(i(),m(D,{key:0,modelValue:o[n.dataIndex],"onUpdate:modelValue":c=>o[n.dataIndex]=c,onBlur:F},null,8,["modelValue","onUpdate:modelValue","onBlur"])):n.dataIndex==="name"?(i(),m(R,{key:1,modelValue:o[n.dataIndex],"onUpdate:modelValue":c=>o[n.dataIndex]=c,options:[1,2,3,4,5,6],onPopupVisibleChange:c=>!c&&F()},null,8,["modelValue","onUpdate:modelValue","onPopupVisibleChange"])):A("",!0),n.dataIndex==="filterType"?(i(),m(D,{key:2,modelValue:o[n.dataIndex],"onUpdate:modelValue":c=>o[n.dataIndex]=c,onBlur:F},null,8,["modelValue","onUpdate:modelValue","onBlur"])):n.dataIndex==="createdTime"?(i(),m(P,{key:3,modelValue:o[n.dataIndex],"onUpdate:modelValue":c=>o[n.dataIndex]=c,onPopupVisibleChange:c=>!c&&F()},null,8,["modelValue","onUpdate:modelValue","onPopupVisibleChange"])):n.dataIndex==="count"?(i(),m(U,{key:4,modelValue:o[n.dataIndex],"onUpdate:modelValue":c=>o[n.dataIndex]=c,onBlur:F},{suffix:a(()=>[l("单位")]),_:2},1032,["modelValue","onUpdate:modelValue","onBlur"])):A("",!0)]),operation:a(({rowIndex:o})=>[t(B,{onClick:n=>V(o)},{default:a(()=>[l("删除")]),_:2},1032,["onClick"])]),_:1},8,["data"])]),_:1}),t(y,null,{default:a(()=>[t(S,null,{default:a(()=>[t(b,{onClick:I},{default:a(()=>[l("重置")]),_:1}),t(b,{"html-type":"submit"},{default:a(()=>[l("提交")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),l(" "+z(r),1)],64)}}}),J=s("h1",{id:"edit-table-form",tabindex:"-1"},[l("edit-table-form "),s("a",{class:"header-anchor",href:"#edit-table-form","aria-label":'Permalink to "edit-table-form"'},"​")],-1),G=s("p",null,"可编辑表格在表单中的示例",-1),K=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"a-form"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"vp-raw"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formData"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":auto-label-width"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"true"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":rules"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"rules"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@submit-success"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleSubmit"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"name"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"名称"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-input"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formData.name"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"age"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"年龄"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-input-number"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formData.age"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"field"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableData"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"可编辑表格"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"devops-edit-table")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":is-editor"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"isEditor"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":validator"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"validatorTableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},"column-resizable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":bordered"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ cell: true }"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":data"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"formData.tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":columns"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"columns"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},"table-layout-fixed")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":pagination"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"false"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},"show-editor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"editor"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{ record, column, cellendedit }"),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"devops-input-editor"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"column.dataIndex === 'code'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"record[column.dataIndex]"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@blur"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"cellendedit"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"devops-input-editor"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"devops-select-editor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},"v-else-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"column.dataIndex === 'name'"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"record[column.dataIndex]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},":options"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"[1, 2, 3, 4, 5, 6]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},"@popup-visible-change"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"(visible) => !visible && cellendedit()"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          ></"),s("span",{style:{color:"#85E89D"}},"devops-select-editor"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"devops-input-editor"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"column.dataIndex === 'filterType'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"record[column.dataIndex]"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@blur"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"cellendedit"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"devops-input-editor"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"devops-date-editor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},"v-else-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"column.dataIndex === 'createdTime'"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"record[column.dataIndex]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},"@popup-visible-change"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"(visible) => !visible && cellendedit()"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          ></"),s("span",{style:{color:"#85E89D"}},"devops-date-editor"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"devops-number-editor"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-else-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"column.dataIndex === 'count'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"record[column.dataIndex]"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@blur"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"cellendedit"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"suffix"),s("span",{style:{color:"#E1E4E8"}},">单位</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"devops-number-editor"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"operation"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{ rowIndex }"),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"a-link"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleDeleteTableData(rowIndex)"'),s("span",{style:{color:"#E1E4E8"}},">删除</"),s("span",{style:{color:"#85E89D"}},"a-link"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"devops-edit-table"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"extra"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-link"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleAddTableData"'),s("span",{style:{color:"#E1E4E8"}},">添加一条数据</"),s("span",{style:{color:"#85E89D"}},"a-link"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleReset"'),s("span",{style:{color:"#E1E4E8"}},">重置</"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"html-type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"submit"'),s("span",{style:{color:"#E1E4E8"}},">提交</"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"a-space"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"a-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"a-form"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {{ formData }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"type"),s("span",{style:{color:"#E1E4E8"}}," { FormInstance, FieldRule } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@arco-design/web-vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"type"),s("span",{style:{color:"#E1E4E8"}}," { EditTableCellParams } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@devops-web/components'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"type"),s("span",{style:{color:"#E1E4E8"}}," { TableColumnDataPlus } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@devops-web/hooks'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { reactive, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"interface"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FormDataType"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#FFAB70"}},"name"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#FFAB70"}},"age"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#FFAB70"}},"tableData"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Record"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},">[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defaultFormData"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ()"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FormDataType"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#79B8FF"}},"undefined"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    age: "),s("span",{style:{color:"#79B8FF"}},"undefined"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    tableData: []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"formRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#B392F0"}},"FormInstance"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"|"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null"),s("span",{style:{color:"#E1E4E8"}},">("),s("span",{style:{color:"#79B8FF"}},"null"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"formData"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FormDataType"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"reactive"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#B392F0"}},"defaultFormData"),s("span",{style:{color:"#E1E4E8"}},"())")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 重置表单数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleReset"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  formRef.value?."),s("span",{style:{color:"#B392F0"}},"resetFields"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  Object."),s("span",{style:{color:"#B392F0"}},"assign"),s("span",{style:{color:"#E1E4E8"}},"(formData, "),s("span",{style:{color:"#B392F0"}},"defaultFormData"),s("span",{style:{color:"#E1E4E8"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleSubmit"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"values"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Record"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},">) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'表单数据:'"),s("span",{style:{color:"#E1E4E8"}},", values)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"alert"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'表单提交成功!'"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"rules"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Record"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#B392F0"}},"FieldRule"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},"> "),s("span",{style:{color:"#F97583"}},"|"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FieldRule"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},">[]> "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  name: { required: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", message: "),s("span",{style:{color:"#9ECBFF"}},"'请填写数据'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  age: { required: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", message: "),s("span",{style:{color:"#9ECBFF"}},"'请填写数据'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  tableData: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    { type: "),s("span",{style:{color:"#9ECBFF"}},"'array'"),s("span",{style:{color:"#E1E4E8"}},", minLength: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", message: "),s("span",{style:{color:"#9ECBFF"}},"'最少新增1条数据'"),s("span",{style:{color:"#E1E4E8"}},", required: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"validator"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"callback"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"messageArr"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},"[] "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        value."),s("span",{style:{color:"#B392F0"}},"forEach"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"rowData"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"rowIndex"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"number"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#E1E4E8"}},"rowData.code) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            messageArr."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"`第${"),s("span",{style:{color:"#E1E4E8"}},"rowIndex"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#9ECBFF"}},"}行，集合编号必填`"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#E1E4E8"}},"rowData.name) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            messageArr."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"`第${"),s("span",{style:{color:"#E1E4E8"}},"rowIndex"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#9ECBFF"}},"}行，集合名称必填`"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},"callback"),s("span",{style:{color:"#E1E4E8"}},"(messageArr."),s("span",{style:{color:"#B392F0"}},"join"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'；'"),s("span",{style:{color:"#E1E4E8"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"columns"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"TableColumnDataPlus"),s("span",{style:{color:"#E1E4E8"}},"[] "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: "),s("span",{style:{color:"#9ECBFF"}},"'集合编号'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'code'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: "),s("span",{style:{color:"#9ECBFF"}},"'集合名称'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: "),s("span",{style:{color:"#9ECBFF"}},"'筛选方式'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'filterType'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: "),s("span",{style:{color:"#9ECBFF"}},"'内容量'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'count'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: "),s("span",{style:{color:"#9ECBFF"}},"'创建时间'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'createdTime'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: "),s("span",{style:{color:"#9ECBFF"}},"'操作'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    width: "),s("span",{style:{color:"#79B8FF"}},"120"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    dataIndex: "),s("span",{style:{color:"#9ECBFF"}},"'operation'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    slotName: "),s("span",{style:{color:"#9ECBFF"}},"'operation'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 判断哪些单元格可编辑")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 返回true的单元格可以编辑")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"isEditor"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"EditTableCellParams"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (["),s("span",{style:{color:"#9ECBFF"}},"'code'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'name'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'filterType'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'count'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'createdTime'"),s("span",{style:{color:"#E1E4E8"}},"]."),s("span",{style:{color:"#B392F0"}},"includes"),s("span",{style:{color:"#E1E4E8"}},"(data.column.dataIndex)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 校验单元格数据是否正确，只有可编辑单元格才会校验。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 这里的校验只用作单元格的样式判断，实际提交校验需要通过表单的rules处理")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"validatorTableData"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"data"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"EditTableCellParams"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (["),s("span",{style:{color:"#9ECBFF"}},"'code'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'name'"),s("span",{style:{color:"#E1E4E8"}},"]."),s("span",{style:{color:"#B392F0"}},"includes"),s("span",{style:{color:"#E1E4E8"}},"(data.column.dataIndex)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"cellVal"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," data.record[data.column.dataIndex]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (cellVal "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"undefined"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," cellVal "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," cellVal "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"''"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 给可编辑表格增加一行")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleAddTableData"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  formData.tableData."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"({})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 删除对应行数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleDeleteTableData"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"rowIndex"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"number"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  formData.tableData."),s("span",{style:{color:"#B392F0"}},"splice"),s("span",{style:{color:"#E1E4E8"}},"(rowIndex, "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"a-form"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"vp-raw"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formData"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":auto-label-width"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"true"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":rules"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"rules"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@submit-success"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleSubmit"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"name"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"名称"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-input"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formData.name"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"age"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"年龄"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-input-number"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formData.age"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"field"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableData"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"可编辑表格"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"devops-edit-table")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":is-editor"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"isEditor"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":validator"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"validatorTableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},"column-resizable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":bordered"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ cell: true }"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":data"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"formData.tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":columns"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"columns"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},"table-layout-fixed")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":pagination"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"false"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},"show-editor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"editor"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},"{ record, column, cellendedit }"),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"devops-input-editor"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"column.dataIndex === 'code'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"record[column.dataIndex]"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@blur"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"cellendedit"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"devops-input-editor"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"devops-select-editor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},"v-else-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"column.dataIndex === 'name'"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"record[column.dataIndex]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},":options"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"[1, 2, 3, 4, 5, 6]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},"@popup-visible-change"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"(visible) => !visible && cellendedit()"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          ></"),s("span",{style:{color:"#22863A"}},"devops-select-editor"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"devops-input-editor"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"column.dataIndex === 'filterType'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"record[column.dataIndex]"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@blur"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"cellendedit"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"devops-input-editor"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"devops-date-editor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},"v-else-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"column.dataIndex === 'createdTime'"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"record[column.dataIndex]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},"@popup-visible-change"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"(visible) => !visible && cellendedit()"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          ></"),s("span",{style:{color:"#22863A"}},"devops-date-editor"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"devops-number-editor"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-else-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"column.dataIndex === 'count'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"record[column.dataIndex]"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@blur"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"cellendedit"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"suffix"),s("span",{style:{color:"#24292E"}},">单位</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"devops-number-editor"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"operation"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},"{ rowIndex }"),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"a-link"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleDeleteTableData(rowIndex)"'),s("span",{style:{color:"#24292E"}},">删除</"),s("span",{style:{color:"#22863A"}},"a-link"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"devops-edit-table"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"extra"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-link"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleAddTableData"'),s("span",{style:{color:"#24292E"}},">添加一条数据</"),s("span",{style:{color:"#22863A"}},"a-link"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleReset"'),s("span",{style:{color:"#24292E"}},">重置</"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"html-type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"submit"'),s("span",{style:{color:"#24292E"}},">提交</"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"a-space"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"a-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"a-form"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {{ formData }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"type"),s("span",{style:{color:"#24292E"}}," { FormInstance, FieldRule } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@arco-design/web-vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"type"),s("span",{style:{color:"#24292E"}}," { EditTableCellParams } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@devops-web/components'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"type"),s("span",{style:{color:"#24292E"}}," { TableColumnDataPlus } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@devops-web/hooks'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { reactive, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"interface"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FormDataType"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#E36209"}},"name"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#E36209"}},"age"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#E36209"}},"tableData"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Record"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},">[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defaultFormData"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ()"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FormDataType"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#005CC5"}},"undefined"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    age: "),s("span",{style:{color:"#005CC5"}},"undefined"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    tableData: []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"formRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#6F42C1"}},"FormInstance"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"|"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null"),s("span",{style:{color:"#24292E"}},">("),s("span",{style:{color:"#005CC5"}},"null"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"formData"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FormDataType"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"reactive"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#6F42C1"}},"defaultFormData"),s("span",{style:{color:"#24292E"}},"())")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 重置表单数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleReset"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  formRef.value?."),s("span",{style:{color:"#6F42C1"}},"resetFields"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  Object."),s("span",{style:{color:"#6F42C1"}},"assign"),s("span",{style:{color:"#24292E"}},"(formData, "),s("span",{style:{color:"#6F42C1"}},"defaultFormData"),s("span",{style:{color:"#24292E"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleSubmit"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"values"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Record"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},">) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'表单数据:'"),s("span",{style:{color:"#24292E"}},", values)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"alert"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'表单提交成功!'"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"rules"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Record"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6F42C1"}},"FieldRule"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},"> "),s("span",{style:{color:"#D73A49"}},"|"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FieldRule"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},">[]> "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  name: { required: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},", message: "),s("span",{style:{color:"#032F62"}},"'请填写数据'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  age: { required: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},", message: "),s("span",{style:{color:"#032F62"}},"'请填写数据'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  tableData: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    { type: "),s("span",{style:{color:"#032F62"}},"'array'"),s("span",{style:{color:"#24292E"}},", minLength: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", message: "),s("span",{style:{color:"#032F62"}},"'最少新增1条数据'"),s("span",{style:{color:"#24292E"}},", required: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"validator"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"callback"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"messageArr"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},"[] "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        value."),s("span",{style:{color:"#6F42C1"}},"forEach"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"rowData"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"rowIndex"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"rowData.code) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            messageArr."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"`第${"),s("span",{style:{color:"#24292E"}},"rowIndex"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#032F62"}},"}行，集合编号必填`"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"rowData.name) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            messageArr."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"`第${"),s("span",{style:{color:"#24292E"}},"rowIndex"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#032F62"}},"}行，集合名称必填`"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},"callback"),s("span",{style:{color:"#24292E"}},"(messageArr."),s("span",{style:{color:"#6F42C1"}},"join"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'；'"),s("span",{style:{color:"#24292E"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"columns"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"TableColumnDataPlus"),s("span",{style:{color:"#24292E"}},"[] "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: "),s("span",{style:{color:"#032F62"}},"'集合编号'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    dataIndex: "),s("span",{style:{color:"#032F62"}},"'code'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: "),s("span",{style:{color:"#032F62"}},"'集合名称'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    dataIndex: "),s("span",{style:{color:"#032F62"}},"'name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: "),s("span",{style:{color:"#032F62"}},"'筛选方式'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    dataIndex: "),s("span",{style:{color:"#032F62"}},"'filterType'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: "),s("span",{style:{color:"#032F62"}},"'内容量'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    dataIndex: "),s("span",{style:{color:"#032F62"}},"'count'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: "),s("span",{style:{color:"#032F62"}},"'创建时间'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    dataIndex: "),s("span",{style:{color:"#032F62"}},"'createdTime'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: "),s("span",{style:{color:"#032F62"}},"'操作'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    width: "),s("span",{style:{color:"#005CC5"}},"120"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    dataIndex: "),s("span",{style:{color:"#032F62"}},"'operation'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    slotName: "),s("span",{style:{color:"#032F62"}},"'operation'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 判断哪些单元格可编辑")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 返回true的单元格可以编辑")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"isEditor"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"data"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"EditTableCellParams"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (["),s("span",{style:{color:"#032F62"}},"'code'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'name'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'filterType'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'count'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'createdTime'"),s("span",{style:{color:"#24292E"}},"]."),s("span",{style:{color:"#6F42C1"}},"includes"),s("span",{style:{color:"#24292E"}},"(data.column.dataIndex)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 校验单元格数据是否正确，只有可编辑单元格才会校验。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 这里的校验只用作单元格的样式判断，实际提交校验需要通过表单的rules处理")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"validatorTableData"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"data"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"EditTableCellParams"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (["),s("span",{style:{color:"#032F62"}},"'code'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'name'"),s("span",{style:{color:"#24292E"}},"]."),s("span",{style:{color:"#6F42C1"}},"includes"),s("span",{style:{color:"#24292E"}},"(data.column.dataIndex)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"cellVal"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," data.record[data.column.dataIndex]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (cellVal "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"undefined"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," cellVal "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," cellVal "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"''"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 给可编辑表格增加一行")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleAddTableData"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  formData.tableData."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"({})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 删除对应行数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleDeleteTableData"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"rowIndex"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  formData.tableData."),s("span",{style:{color:"#6F42C1"}},"splice"),s("span",{style:{color:"#24292E"}},"(rowIndex, "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])])],-1),W=JSON.parse('{"title":"edit-table-form","description":"","frontmatter":{},"headers":[],"relativePath":"components/edit-table-form.md","filePath":"components/edit-table-form.md","lastUpdated":1703763137000}'),M={name:"components/edit-table-form.md"},X=Object.assign(M,{setup(x){return(C,f)=>{const r=p("demo");return i(),v("div",null,[J,G,t(r,{customClass:"demoblock-custom",sourceCode:`<template>
  <a-form ref="formRef" class="vp-raw" :model="formData" :auto-label-width="true" :rules="rules" @submit-success="handleSubmit">
    <a-form-item field="name" label="名称">
      <a-input v-model="formData.name" />
    </a-form-item>
    <a-form-item field="age" label="年龄">
      <a-input-number v-model="formData.age" />
    </a-form-item>
    <a-form-item field="tableData" label="可编辑表格">
      <devops-edit-table
        :is-editor="isEditor"
        :validator="validatorTableData"
        column-resizable
        :bordered="{ cell: true }"
        :data="formData.tableData"
        :columns="columns"
        table-layout-fixed
        :pagination="false"
        show-editor
      >
        <template #editor="{ record, column, cellendedit }">
          <devops-input-editor v-if="column.dataIndex === 'code'" v-model="record[column.dataIndex]" @blur="cellendedit"></devops-input-editor>
          <devops-select-editor
            v-else-if="column.dataIndex === 'name'"
            v-model="record[column.dataIndex]"
            :options="[1, 2, 3, 4, 5, 6]"
            @popup-visible-change="(visible) => !visible && cellendedit()"
          ></devops-select-editor>
          <devops-input-editor v-if="column.dataIndex === 'filterType'" v-model="record[column.dataIndex]" @blur="cellendedit"></devops-input-editor>
          <devops-date-editor
            v-else-if="column.dataIndex === 'createdTime'"
            v-model="record[column.dataIndex]"
            @popup-visible-change="(visible) => !visible && cellendedit()"
          ></devops-date-editor>
          <devops-number-editor v-else-if="column.dataIndex === 'count'" v-model="record[column.dataIndex]" @blur="cellendedit">
            <template #suffix>单位</template>
          </devops-number-editor>
        </template>
        <template #operation="{ rowIndex }">
          <a-link @click="handleDeleteTableData(rowIndex)">删除</a-link>
        </template>
      </devops-edit-table>
      <template #extra>
        <a-link @click="handleAddTableData">添加一条数据</a-link>
      </template>
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button @click="handleReset">重置</a-button>
        <a-button html-type="submit">提交</a-button>
      </a-space>
    </a-form-item>
  </a-form>
  {{ formData }}
</template>

<script setup lang="ts">
import type { FormInstance, FieldRule } from '@arco-design/web-vue'
import type { EditTableCellParams } from '@devops-web/components'
import type { TableColumnDataPlus } from '@devops-web/hooks'
import { reactive, ref } from 'vue'

interface FormDataType {
  name?: string
  age?: number
  tableData: Record<string, any>[]
}

const defaultFormData = (): FormDataType => {
  return {
    name: undefined,
    age: undefined,
    tableData: []
  }
}

const formRef = ref<FormInstance | null>(null)
const formData: FormDataType = reactive(defaultFormData())

/**
 * 重置表单数据
 */
function handleReset() {
  formRef.value?.resetFields()
  Object.assign(formData, defaultFormData())
}

function handleSubmit(values: Record<string, any>) {
  console.log('表单数据:', values)
  alert('表单提交成功!')
}

const rules: Record<string, FieldRule<any> | FieldRule<any>[]> = {
  name: { required: true, message: '请填写数据' },
  age: { required: true, message: '请填写数据' },
  tableData: [
    { type: 'array', minLength: 1, message: '最少新增1条数据', required: true },
    {
      validator(value, callback) {
        const messageArr: string[] = []
        value.forEach((rowData: any, rowIndex: number) => {
          if (!rowData.code) {
            messageArr.push(\`第\${rowIndex + 1}行，集合编号必填\`)
          }
          if (!rowData.name) {
            messageArr.push(\`第\${rowIndex + 1}行，集合名称必填\`)
          }
        })
        callback(messageArr.join('；'))
      }
    }
  ]
}

const columns: TableColumnDataPlus[] = [
  {
    title: '集合编号',
    dataIndex: 'code'
  },
  {
    title: '集合名称',
    dataIndex: 'name'
  },
  {
    title: '筛选方式',
    dataIndex: 'filterType'
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
    title: '操作',
    width: 120,
    dataIndex: 'operation',
    slotName: 'operation'
  }
]

/**
 * 判断哪些单元格可编辑
 * 返回true的单元格可以编辑
 */
function isEditor(data: EditTableCellParams) {
  if (['code', 'name', 'filterType', 'count', 'createdTime'].includes(data.column.dataIndex)) {
    return true
  }
  return false
}

/**
 * 校验单元格数据是否正确，只有可编辑单元格才会校验。
 *
 * 这里的校验只用作单元格的样式判断，实际提交校验需要通过表单的rules处理
 */
function validatorTableData(data: EditTableCellParams) {
  if (['code', 'name'].includes(data.column.dataIndex)) {
    const cellVal = data.record[data.column.dataIndex]
    if (cellVal === undefined || cellVal === null || cellVal === '') {
      return false
    }
  }
  return true
}

/**
 * 给可编辑表格增加一行
 */
function handleAddTableData() {
  formData.tableData.push({})
}

/**
 * 删除对应行数据
 */
function handleDeleteTableData(rowIndex: number) {
  formData.tableData.splice(rowIndex, 1)
}
<\/script>
`},{highlight:a(()=>[K]),default:a(()=>[t(H)]),_:1})])}}});export{W as __pageData,X as default};
