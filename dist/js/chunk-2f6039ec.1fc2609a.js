(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f6039ec"],{"88bc":function(e,t,n){(function(t){var n=1/0,r=9007199254740991,s="[object Arguments]",i="[object Function]",a="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function h(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function f(e,t){var n=-1,r=e?e.length:0,s=Array(r);while(++n<r)s[n]=t(e[n],n,e);return s}function d(e,t){var n=-1,r=t.length,s=e.length;while(++n<r)e[s+n]=t[n];return e}var g=Object.prototype,p=g.hasOwnProperty,m=g.toString,y=u.Symbol,b=g.propertyIsEnumerable,w=y?y.isConcatSpreadable:void 0,v=Math.max;function O(e,t,n,r,s){var i=-1,a=e.length;n||(n=P),s||(s=[]);while(++i<a){var o=e[i];t>0&&n(o)?t>1?O(o,t-1,n,r,s):d(s,o):r||(s[s.length]=o)}return s}function j(e,t){return e=Object(e),S(e,t,(function(t,n){return n in e}))}function S(e,t,n){var r=-1,s=t.length,i={};while(++r<s){var a=t[r],o=e[a];n(o,a)&&(i[a]=o)}return i}function $(e,t){return t=v(void 0===t?e.length-1:t,0),function(){var n=arguments,r=-1,s=v(n.length-t,0),i=Array(s);while(++r<s)i[r]=n[t+r];r=-1;var a=Array(t+1);while(++r<t)a[r]=n[r];return a[t]=i,h(e,this,a)}}function P(e){return R(e)||F(e)||!!(w&&e&&e[w])}function Q(e){if("string"==typeof e||A(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function F(e){return x(e)&&p.call(e,"callee")&&(!b.call(e,"callee")||m.call(e)==s)}var R=Array.isArray;function D(e){return null!=e&&C(e.length)&&!k(e)}function x(e){return E(e)&&D(e)}function k(e){var t=U(e)?m.call(e):"";return t==i||t==a}function C(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function U(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){return!!e&&"object"==typeof e}function A(e){return"symbol"==typeof e||E(e)&&m.call(e)==o}var K=$((function(e,t){return null==e?{}:j(e,f(O(t,1),Q))}));e.exports=K}).call(this,n("c8ba"))},b65a:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ca00"),s=n("0fea"),i=n("2b0e"),a=n("9fb0");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":i["default"].ls.get(a["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var n=this.getQueryParams();this.loading=!0,Object(s["c"])(this.url.list,n).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(r["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var n=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){n.loading=!0,Object(s["a"])(n.url.deleteBatch,{ids:e}).then((function(e){e.success?(n.$message.success(e.message),n.loadData(),n.onClearSelected()):n.$message.warning(e.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,n){Object.keys(n).length>0&&(this.isorter.column=n.field,this.isorter.order="ascend"==n.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var n=l({},this.getQueryParams());this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),Object(s["b"])(this.url.exportXlsUrl,n).then((function(n){if(n)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([n],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([n],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=r,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var n=e.file.response,r=n.message,s=n.result,i=s.msg,a=s.fileUrl,o=s.fileName,l=window._CONFIG["domianURL"]+a;this.$warning({title:r,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(s["d"])(e)},downloadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(s["d"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}}}]);