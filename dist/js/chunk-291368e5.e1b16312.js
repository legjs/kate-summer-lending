(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-291368e5"],{"396b":function(e,t,a){},"50d5":function(e,t,a){"use strict";a("396b")},b8c7:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main",attrs:{id:"preapprovalAnotherPersonOnTitle"}},[a("a-form",{attrs:{form:e.form},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextStep(t)}}},[a("a-form-item",[a("h3",{staticStyle:{"text-align":"left"}},[e._v("Tell us about the real estate you own")])]),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{md:16,sm:8}},[a("div",{staticClass:"title_div"},[e._v("Address")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["valueFourAddress",e.validatorRules.valueFourAddress],expression:"['valueFourAddress', validatorRules.valueFourAddress]"}],staticStyle:{"margin-left":"0.375em",float:"left",height:"3.2em"},attrs:{type:"text",autocomplete:"false",placeholder:"City,state,or zip"}})],1),a("a-col",{attrs:{md:8,sm:8}},[a("div",{staticClass:"title_div"},[e._v("Apt/Unit")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["valueFourAddress",e.validatorRules.valueFourAddress],expression:"['valueFourAddress', validatorRules.valueFourAddress]"}],staticStyle:{"margin-left":"0.375em",float:"left",height:"3.2em"},attrs:{type:"text",autocomplete:"false",placeholder:"City,state,or zip"}})],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{md:8,sm:8}},[a("div",{staticClass:"title_div"},[e._v("City")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["valueFourAddress",e.validatorRules.valueFourAddress],expression:"['valueFourAddress', validatorRules.valueFourAddress]"}],staticStyle:{"margin-left":"0.375em",float:"left",height:"3.2em"},attrs:{type:"text",autocomplete:"false",placeholder:"City,state,or zip"}})],1),a("a-col",{attrs:{md:10,sm:8}},[a("div",{staticClass:"title_div"},[e._v("State")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["valueFourAddress",e.validatorRules.valueFourAddress],expression:"['valueFourAddress', validatorRules.valueFourAddress]"}],staticStyle:{"margin-left":"0.375em",float:"left",height:"3.2em"},attrs:{type:"text",autocomplete:"false",placeholder:"City,state,or zip"}})],1),a("a-col",{attrs:{md:6,sm:8}},[a("div",{staticClass:"title_div"},[e._v("ZIP code")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["valueFourAddress",e.validatorRules.valueFourAddress],expression:"['valueFourAddress', validatorRules.valueFourAddress]"}],staticStyle:{"margin-left":"0.375em",float:"left",height:"3.2em"},attrs:{type:"text",autocomplete:"false",placeholder:"City,state,or zip"}})],1)],1),e._l(e.selectSecondQuestionList,(function(t,s){return a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"selectQuestion.vShow"}],key:t.title},[a("h3",{},[e._v(e._s(t.title))]),a("br"),a("br"),a("a-radio-group",{staticClass:"a-radio-group",on:{change:function(t){return e.onChangeSecondOne(t,s)}},model:{value:t.vModelName,callback:function(a){e.$set(t,"vModelName",a)},expression:"selectQuestion.vModelName"}},e._l(t.vaules,(function(t){return a("a-radio",{key:t.vaules,style:e.radioStyle,attrs:{value:t.vaules}},[e._v(e._s(t.title))])})),1)],1)})),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.inputExpectedMonthlyIncomeShow,expression:"inputExpectedMonthlyIncomeShow"}]},[a("span",{staticClass:"input_title"},[e._v("Expected monthly rental income")]),a("a-input-number",{staticClass:"inputClass_exterior",attrs:{formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")}},model:{value:e.ExpectedPrice,callback:function(t){e.ExpectedPrice=t},expression:"ExpectedPrice"}}),a("p",{staticClass:"inputClass_p"},[e._v("\n        If there’s an existing tenant, enter the rent amount from their lease. If you're bringing in new tenants,\n        enter the expected rent.\n      ")])],1),e._l(e.threeQuestion,(function(t){return a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"inputQue.vShow"}],key:t.title},[a("h3",{staticStyle:{"text-align":"left"}},[e._v(e._s(t.title))]),a("br"),a("br"),a("a-switch",{attrs:{id:t.index,"checked-children":"Yes","un-checked-children":"No",checked:t.isCheck,"default-checked":""},on:{click:e.threeQuestionSwitchHandler}})],1)})),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isMortgageShow,expression:"isMortgageShow"}]},[a("a-row",[a("a-col",{attrs:{span:9}},[a("span",{staticClass:"cline_span"},[e._v("Mortgage")])]),a("a-col",{attrs:{span:5}},[a("span",{staticClass:"cline_span"},[e._v("Origination")])]),a("a-col",{attrs:{span:5}},[a("span",{staticClass:"cline_span"},[e._v("Balance")])]),a("a-col",{attrs:{span:5}},[a("span",{staticClass:"cline_span"},[e._v("Payment")])])],1)],1),e._l(e.propertyLoanList,(function(t,s){return a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isMortgageShow,expression:"isMortgageShow"}],key:s},[a("a-row",[a("a-divider")],1),a("a-row",[a("a-col",{attrs:{span:9}},[a("a-checkbox",{attrs:{value:s,"default-checked":!0},on:{change:function(t,a){return e.itemCheckBoxChange(t,a,s)}}},[a("span",{staticClass:"checkbox_span"},[e._v(e._s(t.mortgageName))])])],1),a("a-col",{attrs:{span:5}}),a("a-col",{attrs:{span:5}},[a("span",{staticClass:"showvalue_span"},[e._v(" $ "+e._s(t.balancePrice))])]),a("a-col",{attrs:{span:5}},[a("span",{staticClass:"showvalue_span"},[e._v("$ "+e._s(t.paymentPrice))])])],1),a("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[a("a-col",{attrs:{span:24}},[a("a-card",[a("p",{staticClass:"input_title"},[e._v("Company you write the check to")]),a("p",[a("a-input",{staticClass:"inputClass",model:{value:t.mortgageName,callback:function(a){e.$set(t,"mortgageName",a)},expression:"item.mortgageName"}})],1)])],1)],1),a("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[a("a-col",{attrs:{span:24}},[a("a-card",[a("p",{staticClass:"input_title"},[e._v("Balance")]),a("p",[a("a-input-number",{staticClass:"inputClass",attrs:{formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")}},model:{value:t.balancePrice,callback:function(a){e.$set(t,"balancePrice",a)},expression:"item.balancePrice"}})],1)])],1)],1),a("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[a("a-col",{attrs:{span:24}},[a("a-card",[a("p",{staticClass:"input_title"},[e._v("Payment")]),a("p",[a("a-input-number",{staticClass:"inputClass",attrs:{formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")}},model:{value:t.paymentPrice,callback:function(a){e.$set(t,"paymentPrice",a)},expression:"item.paymentPrice"}})],1)])],1)],1),a("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[a("a-col",{attrs:{span:24}},[a("a-card",[a("p",{staticClass:"input_title"},[e._v("Is this the primary mortgage on this property?")]),a("p",[a("a-switch",{staticStyle:{"margin-left":"5.8em"},attrs:{id:t.firstSwitchIndex,"checked-children":"Yes","un-checked-children":"No",checked:t.firstSwitch,"default-checked":""},on:{click:function(t){return e.firstItemSwitchHandler(t,s)}}})],1)])],1)],1),a("a-row",{directives:[{name:"show",rawName:"v-show",value:t.secondSwitchShow,expression:"item.secondSwitchShow"}]},[a("a-col",{attrs:{span:24}},[a("a-card",[a("p",{staticClass:"input_title"},[e._v("Do you pay taxes and insurance as part of your monthly payment?")]),a("p",[a("a-switch",{staticStyle:{"margin-left":"5.8em"},attrs:{id:t.secondSwitchIndex,"checked-children":"Yes","un-checked-children":"No",checked:t.secondSwitch,"default-checked":""},on:{click:function(t){return e.secondItemSwitchHandler(t,s)}}})],1)])],1)],1)],1)})),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isMortgageShow,expression:"isMortgageShow"}]},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-divider")],1)],1),a("a-row",[a("a-col",{attrs:{span:2}},[a("svg",{staticClass:"icon icon-AddCircle",attrs:{width:"24px",height:"24px",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M17.664 17.648h7.476c2.048 0 2.048-3.072 0-3.072h-7.476v-7.472c0-0.848-0.688-1.536-1.536-1.536s-1.536 0.688-1.536 1.536v7.472h-7.508c-2.048 0-2.048 3.072 0 3.072h7.508v7.512c0 0.848 0.688 1.536 1.536 1.536s1.536-0.688 1.536-1.536zM16 32c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"}})])]),a("a-col",{attrs:{span:22}},[a("span",{staticClass:"add_span",on:{click:function(t){return e.addpropertyLoanList()}}},[e._v("Add a loan that's not listed")])])],1),a("a-row",[a("a-col",{attrs:{span:24}},[a("a-divider")],1)],1)],1),e._l(e.fourQuestion,(function(t){return a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"inputQue.vShow"}],key:t.title},[a("h3",{staticStyle:{"text-align":"left"}},[e._v(e._s(t.title))])])})),a("a-form-item",[a("a-button",{staticClass:"SeeRatesleft",attrs:{type:"primary"},on:{click:e.prevStep}},[e._v("Cancel")]),a("a-button",{staticClass:"SeeRatesright",staticStyle:{"margin-left":"2.5em"},attrs:{type:"primary"},on:{click:e.nextStep}},[e._v("Save")])],1)],2)],1)},i=[],r=(a("0fea"),a("4ec3"),{name:"preapprovalAnotherPersonOnTitle",props:["userList"],data:function(){return{ExpectedPrice:0,valueFourAddress:"",radioStyle:{display:"block",height:"2em",lineHeight:"1.2","text-align":"left","font-size":"1.9em","font-weight":"600","letter-spacing":"-0.025em"},selectSecondQuestionList:[{title:"How do you use this property?",vModelName:"",vShow:!0,vaules:[{title:"Second home",vaules:"1"},{title:"Investment",vaules:"2"}]},{title:"How do you hold title to this property?",vModelName:"",vShow:!0,vaules:[{title:"By yourself",vaules:"1"},{title:"Jointly with spouse",vaules:"2"},{title:"Jointly with another person",vaules:"3"}]}],threeQuestion:[{title:"Are you currently making monthly payments on this property?",vShow:!1,isCheck:!1,descript:""}],fourQuestion:[{title:"Which mortgages are for this property?",vShow:!1,isCheck:!1,descript:""}],inputExpectedMonthlyIncomeShow:!1,isMortgageShow:!1,propertyLoanList:[{isShow:!0,mortgageName:"",balancePrice:0,paymentPrice:0,firstSwitch:!1,secondSwitch:!1,firstSwitchIndex:0,secondSwitchIndex:1,secondSwitchShow:!1}],form:this.$form.createForm(this),validatorRules:{firstPrise:{rules:[{required:!1,message:""}]},secondPrise:{rules:[{required:!1,message:""}]}},OtherAnnualOtherIncomePrice:0}},created:function(){},methods:{itemCheckBoxChange:function(e,t,a){this.propertyLoanList[a].isShow=e.target.checked},addpropertyLoanList:function(){var e={isShow:!0,mortgageName:"",balancePrice:0,paymentPrice:0,firstSwitch:!1,secondSwitch:!1,firstSwitchIndex:0,secondSwitchIndex:1,secondSwitchShow:!1};this.propertyLoanList.push(e)},firstItemSwitchHandler:function(e,t){this.propertyLoanList[t].firstSwitch=e,this.propertyLoanList[t].secondSwitchShow=e},secondItemSwitchHandler:function(e,t){this.propertyLoanList[t].secondSwitch=e},secondQuestionSwitchHandler:function(e,t){this.secondQuestion[0].isCheck=e,this.selectSecondQuestionList[0].vShow=!0},threeQuestionSwitchHandler:function(e,t){this.threeQuestion[0].isCheck=e,this.isMortgageShow=e,this.fourQuestion[0].vShow=e},onChangeSecondOne:function(e,t){0==t&&("2"==e.target.value?this.inputExpectedMonthlyIncomeShow=!0:this.inputExpectedMonthlyIncomeShow=!1),this.threeQuestion[0].vShow=!0},prevStep:function(){this.userList.navPageTabIndex=43,this.$emit("prevStep",this.userList)},nextStep:function(){var e=this;e.userList.navPageTabIndex=43,e.userList.preapprovalAnotherPersonOnTitle=e.inputQuestion,e.$emit("nextStep",e.userList)},inputCodeChange:function(e){this.inputCodeContent=e.target.value,e.target.value&&0!=e.target.value?(this.inputCodeContent=this.inputCodeContent.toLowerCase(),this.inputCodeNull=!1):this.inputCodeNull=!0}}}),o=r,n=(a("50d5"),a("2877")),c=Object(n["a"])(o,s,i,!1,null,null,null);t["default"]=c.exports}}]);