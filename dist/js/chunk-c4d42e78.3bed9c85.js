(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4d42e78"],{"6dbd":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main",attrs:{id:"ContactUs"}},[e("top-menu"),e("div",{staticClass:"bet-PageWrapper--hasSubnav"},[e("a-card",{staticClass:"content"},[e("a-card-grid",{staticClass:"leftimgCard",staticStyle:{width:"40%","text-align":"center"},attrs:{hoverable:!1}},[e("figure",{staticClass:"figureImg"},[e("img",{staticClass:"styles_ContactUs-image__3H3qz",attrs:{src:t.companyInfo.imgSrc,alt:"Letter"}})])]),e("a-card-grid",{staticClass:"rightCardGrid",staticStyle:{width:"48%","text-align":"center"},attrs:{hoverable:!1}},[e("a-card",{attrs:{title:"Contact us"}},[e("a-card-grid",{staticClass:"rightContent",staticStyle:{width:"33%","text-align":"center"},attrs:{hoverable:!1}},[e("a-card",[e("h2",{staticClass:"H2Detial"},[t._v("General inquiries")]),e("span",{staticClass:"spanDetial"},[t._v("We're available by phone or email: ")]),e("a",{staticClass:"ContactUs-link",attrs:{href:"tel:"+t.companyInfo.phone,property:"telephone","data-qa":"telephone"}},[t._v(t._s(t.companyInfo.phone))]),e("a",{staticClass:"ContactUs-link",attrs:{href:"mailto:"+t.companyInfo.email,property:"email","data-qa":"email"}},[t._v(t._s(t.companyInfo.email))])])],1),e("a-card-grid",{staticClass:"rightContent",staticStyle:{width:"33%","text-align":"center"},attrs:{hoverable:!1}},[e("a-card",[e("h2",{staticClass:"H2Detial"},[t._v("Press inquiries")]),e("span",{staticClass:"spanDetial"},[t._v("Tanya Hayre ")]),e("a",{staticClass:"ContactUs-link",attrs:{href:"mailto:"+t.companyInfo.pressInquiriesEmail,property:"email","data-qa":"email"}},[t._v(t._s(t.companyInfo.pressInquiriesEmail))])])],1),e("a-card-grid",{staticClass:"rightContent",staticStyle:{width:"33%","text-align":"center"},attrs:{hoverable:!1}},[e("a-card",[e("h2",{staticClass:"H2Detial"},[t._v("Complaints")]),e("a",{staticClass:"ContactUs-link",staticStyle:{"margin-top":"1.2em !important"},attrs:{href:"mailto:"+t.companyInfo.complaintsEmail,property:"email","data-qa":"email"}},[t._v(t._s(t.companyInfo.complaintsEmail))])])],1)],1)],1)],1)],1),e("foot-content")],1)},s=[],i=e("0fea"),o=e("e15b"),r=e("e64a"),c={components:{TopMenu:o["default"],FootContent:r["default"]},data:function(){return{customActiveKey:"tab1",loginBtn:!1,current:["mail"],bottomCenter:"topLeft",url:{getFirstCompanyInfo:"/web_company/companyInfo/getCompanyInfoFirstObject"},companyInfo:{phone:"415-523-8837",email:"hello@better.com",pressInquiriesEmail:"hello@better.com",complaintsEmail:"hello@better.com",imgSrc:"https://media.better.com/components/contact-us/letter-square-540w.jpg"}}},created:function(){this.getCompanyInfo()},methods:{handlerToPerStart:function(){window.location.href="/perapprovalStart"},getCompanyInfo:function(){var t=this;Object(i["c"])(t.url.getFirstCompanyInfo).then((function(a){a.success&&(t.companyInfo=a.result,t.companyInfo.imgSrc="".concat(window._CONFIG["domianURL"],"/").concat(t.companyInfo.imgSrc))}))}}},l=c,m=(e("ae67"),e("2877")),p=Object(m["a"])(l,n,s,!1,null,null,null);a["default"]=p.exports},"773c":function(t,a,e){},ae67:function(t,a,e){"use strict";e("773c")}}]);