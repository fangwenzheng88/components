import{i as g}from"./is.179ae4a7.js";import"./dayjs.min.fc668ad8.js";import{u as f}from"./index.44acc78f.js";import{h as r,a4 as C}from"./framework.f34eef09.js";const i=()=>({current:1,pageSize:10,total:0,showTotal:!0,showPageSize:!0});function b(t){const u=r(!1),l=r([]),e=f(t.columns),a=r(i());function m(n){return a.value.current=n,o()}function c(n){return a.value.current=1,a.value.pageSize=n,o()}g(t.pagination)&&(a.value={...i(),...t.pagination});function o(){return u.value=!0,t.fetch({pageNum:a.value.current,pageSize:a.value.pageSize,columnKeys:[...e.columnKeys.value]}).then(n=>{l.value=n.records,a.value.total=n.total}).finally(()=>{u.value=!1})}function p(){return o()}function s(){return a.value.current=1,o()}return t.immediate===!0&&s(),{tableData:l,loading:u,loadTableData:s,refreshData:p,pagination:a,tableInstance:e.tableInstance,originColumns:e.originColumns,columns:e.columns,columnKeys:e.columnKeys,resetColumns:e.resetColumns,changeColumnVisibleByDataIndex:e.changeColumnVisibleByDataIndex,updateColumnByDataIndex:e.updateColumnByDataIndex,replaceColumnByDataIndex:e.replaceColumnByDataIndex,tableConfig:C({loading:u,data:l,columns:e.columns,ref:e.ref,pagination:a,onPageChange:m,onPageSizeChange:c,onColumnResize(n,d){e.updateColumnByDataIndex(n,"width",d),e.updateColumnsWidth()}})}}export{b as u};
