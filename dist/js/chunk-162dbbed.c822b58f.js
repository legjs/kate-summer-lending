(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-162dbbed"],{"88bc":function(e,r,a){(function(r){var a=1/0,t=9007199254740991,l="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",n="[object Symbol]",i="object"==typeof r&&r&&r.Object===Object&&r,d="object"==typeof self&&self&&self.Object===Object&&self,c=i||d||Function("return this")();function u(e,r,a){switch(a.length){case 0:return e.call(r);case 1:return e.call(r,a[0]);case 2:return e.call(r,a[0],a[1]);case 3:return e.call(r,a[0],a[1],a[2])}return e.apply(r,a)}function b(e,r){var a=-1,t=e?e.length:0,l=Array(t);while(++a<t)l[a]=r(e[a],a,e);return l}function m(e,r){var a=-1,t=r.length,l=e.length;while(++a<t)e[l+a]=r[a];return e}var p=Object.prototype,v=p.hasOwnProperty,f=p.toString,h=c.Symbol,w=p.propertyIsEnumerable,g=h?h.isConcatSpreadable:void 0,C=Math.max;function y(e,r,a,t,l){var o=-1,s=e.length;a||(a=x),l||(l=[]);while(++o<s){var n=e[o];r>0&&a(n)?r>1?y(n,r-1,a,t,l):m(l,n):t||(l[l.length]=n)}return l}function j(e,r){return e=Object(e),U(e,r,(function(r,a){return a in e}))}function U(e,r,a){var t=-1,l=r.length,o={};while(++t<l){var s=r[t],n=e[s];a(n,s)&&(o[s]=n)}return o}function D(e,r){return r=C(void 0===r?e.length-1:r,0),function(){var a=arguments,t=-1,l=C(a.length-r,0),o=Array(l);while(++t<l)o[t]=a[r+t];t=-1;var s=Array(r+1);while(++t<r)s[t]=a[t];return s[r]=o,u(e,this,s)}}function x(e){return O(e)||N(e)||!!(g&&e&&e[g])}function R(e){if("string"==typeof e||L(e))return e;var r=e+"";return"0"==r&&1/e==-a?"-0":r}function N(e){return F(e)&&v.call(e,"callee")&&(!w.call(e,"callee")||f.call(e)==l)}var O=Array.isArray;function T(e){return null!=e&&k(e.length)&&!S(e)}function F(e){return $(e)&&T(e)}function S(e){var r=q(e)?f.call(e):"";return r==o||r==s}function k(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}function q(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}function $(e){return!!e&&"object"==typeof e}function L(e){return"symbol"==typeof e||$(e)&&f.call(e)==n}var A=D((function(e,r){return null==e?{}:j(e,b(y(r,1),R))}));e.exports=A}).call(this,a("c8ba"))},d57c:function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",e.validatorRules.code],expression:"['code', validatorRules.code]"}],attrs:{placeholder:"请输入数据源编码",disabled:!!e.model.id}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",e.validatorRules.name],expression:"['name', validatorRules.name]"}],attrs:{placeholder:"请输入数据源名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库类型"}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbType",e.validatorRules.dbType],expression:"['dbType', validatorRules.dbType]"}],attrs:{placeholder:"请选择数据库类型","dict-code":"database_type",triggerChange:""},on:{change:e.handleDbTypeChange}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"驱动类"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbDriver",e.validatorRules.dbDriver],expression:"['dbDriver', validatorRules.dbDriver]"}],attrs:{placeholder:"请输入驱动类"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUrl",e.validatorRules.dbUrl],expression:"['dbUrl', validatorRules.dbUrl]"}],attrs:{placeholder:"请输入数据源地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbName",e.validatorRules.dbName],expression:"['dbName', validatorRules.dbName]"}],attrs:{placeholder:"请输入数据库名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUsername",e.validatorRules.dbUsername],expression:"['dbUsername', validatorRules.dbUsername]"}],attrs:{placeholder:"请输入用户名"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"密码"}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:21}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbPassword",e.validatorRules.dbPassword],expression:"['dbPassword', validatorRules.dbPassword]"}],attrs:{placeholder:"请输入密码"}})],1),a("a-col",{attrs:{span:3}},[a("a-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"small"},on:{click:e.handleTest}},[e._v("测试")])],1)],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{}],expression:"['remark', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},l=[],o=a("88bc"),s=a.n(o),n=a("0fea"),i=a("ca00"),d={name:"SysDataSourceModal",components:{},data:function(){var e=this;return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{code:{validateFirst:!0,rules:[{required:!0,message:"请输入数据源编码!"},{validator:function(r,a,t){var l=/^[a-z|A-Z][a-z|A-Z\d_-]{0,}$/;l.test(a)?Object(i["q"])("sys_data_source","code",a,e.model.id,t):t("编码必须以字母开头，可包含数字、下划线、横杠")}}]},name:{rules:[{required:!0,message:"请输入数据源名称!"}]},dbType:{rules:[{required:!0,message:"请选择数据库类型!"}]},dbDriver:{rules:[{required:!0,message:"请输入驱动类!"}]},dbUrl:{rules:[{required:!0,message:"请输入数据源地址!"}]},dbName:{rules:[{required:!0,message:"请输入数据库名称!"}]},dbUsername:{rules:[{required:!0,message:"请输入用户名!"}]},dbPassword:{rules:[{required:!0,message:"请输入密码!"}]}},url:{add:"/sys/dataSource/add",edit:"/sys/dataSource/edit"},dbDriverMap:{1:{dbDriver:"com.mysql.jdbc.Driver"},2:{dbDriver:"oracle.jdbc.OracleDriver"},3:{dbDriver:"com.microsoft.sqlserver.jdbc.SQLServerDriver"}},dbUrlMap:{1:{dbUrl:"jdbc:mysql://127.0.0.1:3306/jeecg-boot?characterEncoding=UTF-8&useUnicode=true&useSSL=false"},2:{dbUrl:"jdbc:oracle:thin:@127.0.0.1:1521:ORCL"},3:{dbUrl:"jdbc:sqlserver://127.0.0.1:1433;SelectMethod=cursor;DatabaseName=jeecgboot"}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var r=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){r.form.setFieldsValue(s()(r.model,"code","name","remark","dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(r,a){if(!r){e.confirmLoading=!0;var t=Object.assign(e.model,a),l=e.url.add,o="post";e.model.id&&(l=e.url.edit,o="put",t["code"]=void 0),Object(n["h"])(l,t,o).then((function(r){r.success?(e.$message.success(r.message),e.$emit("ok"),e.close()):e.$message.warning(r.message)})).finally((function(){e.confirmLoading=!1}))}}))},handleCancel:function(){this.close()},handleTest:function(){var e=this,r=["dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"],a=this.form.getFieldsValue(r),t={};r.forEach((function(e){return t[e]={value:a[e],errors:null}})),this.form.setFields(t),this.$nextTick((function(){e.form.validateFields(r,(function(r,t){if(!r){var l=e.$message.loading("连接中……",0);Object(n["i"])("/online/cgreport/api/testConnection",a).then((function(r){if(!r.success)throw new Error(r.message);e.$message.success("连接成功")})).catch((function(r){e.$warning({title:"连接失败",content:r.message||r})})).finally((function(){return l()}))}}))}))},handleDbTypeChange:function(e){var r=this.dbDriverMap[e],a=this.dbUrlMap[e];r&&this.form.setFieldsValue(r),a&&this.form.setFieldsValue(a)}}},c=d,u=a("2877"),b=Object(u["a"])(c,t,l,!1,null,"7fce3db6",null);r["default"]=b.exports}}]);