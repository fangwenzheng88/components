import{i as x,a as d}from"./is.816509ab.js";import"./dayjs.min.1edc150c.js";import{u as D}from"./index.f8290869.js";import{O as I,R as z}from"./index.ee9bd0d1.js";import{h as c,x as B,a4 as w,a5 as f}from"./framework.f6b614a8.js";const h=()=>({current:1,pageSize:10,total:0,showTotal:!0,showPageSize:!0});function K(t){const m=[...t.columns];if(t.operations){const e=t.operationsFixed===!1?void 0:t.operationsFixed??"right";m.push({title:"操作",dataIndex:"operation",fixed:e,render(o){const i=t.operations(o.record).filter(l=>l.visible!==!1);return f(z,{onResize:C},()=>f(I,{operations:i}))}})}const r=c(!1),s=c([]),a=D(m);B(s,e=>{if(t.operations&&x(e)&&e.length>0){let o=!1;for(const i of e){const l=t.operations(i).filter(b=>b.visible!==!1);if(l&&l.length>0){o=!0;break}}a.changeColumnVisibleByDataIndex("operation",o)}});function C(e){const{width:o}=e.contentRect;a.updateColumnByDataIndex("operation","width",o+33)}const n=c(h());function g(e){return n.value.current=e,u()}function v(e){return n.value.current=1,n.value.pageSize=e,u()}d(t.pagination)&&(n.value={...h(),...t.pagination});function u(){return r.value=!0,t.fetch({pageNum:n.value.current,pageSize:n.value.pageSize,columnKeys:[...a.columnKeys.value]}).then(e=>{d(e)?(s.value=Array.isArray(e.records)?e.records:[],n.value.total=e.total??0):console.warn("useTablePage请求返回结果数据异常!",e)}).finally(()=>{r.value=!1})}function y(){return u()}function p(){return n.value.current=1,u()}return t.immediate===!0&&p(),{tableData:s,loading:r,loadTableData:p,refreshData:y,pagination:n,tableInstance:a.tableInstance,originColumns:a.originColumns,columns:a.columns,columnKeys:a.columnKeys,resetColumns:a.resetColumns,changeColumnVisibleByDataIndex:a.changeColumnVisibleByDataIndex,updateColumnByDataIndex:a.updateColumnByDataIndex,replaceColumnByDataIndex:a.replaceColumnByDataIndex,tableConfig:w({loading:r,data:s,columns:a.columns,ref:a.ref,pagination:n,onPageChange:g,onPageSizeChange:v,onColumnResize(e,o){a.updateColumnByDataIndex(e,"width",o),a.updateColumnsWidth()}})}}export{K as u};