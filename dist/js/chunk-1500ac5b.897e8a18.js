(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1500ac5b"],{"822b":function(e,t,s){},"85ed":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main",attrs:{id:"preapprovalAnotherPersonOnTitle"}},[s("a-form",{attrs:{form:e.form},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextStep(t)}}},[e._l(e.inputQuestion,(function(t){return s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"inputQue.vShow"}],key:t.title},[s("h3",{},[e._v(e._s(t.title))]),s("br"),s("br"),s("a-switch",{attrs:{id:t.index,"checked-children":"Yes","un-checked-children":"No",checked:t.isCheck,"default-checked":""},on:{click:e.firstSwitchHandler}})],1)})),e._l(e.selectQuestionList,(function(t,i){return s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"selectQuestion.vShow"}],key:t.title},[s("h3",{},[e._v(e._s(t.title))]),s("br"),s("br"),s("a-radio-group",{staticClass:"a-radio-group",on:{change:function(t){return e.onChangeOne(t,i)}},model:{value:t.vModelName,callback:function(s){e.$set(t,"vModelName",s)},expression:"selectQuestion.vModelName"}},e._l(t.vaules,(function(t){return s("a-radio",{key:t.vaules,style:e.radioStyle,attrs:{value:t.vaules}},[e._v(e._s(t.title))])})),1)],1)})),s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.firstInputQuestion.isShow,expression:"firstInputQuestion.isShow"}]},[s("h3",{},[e._v(e._s(e.firstInputQuestion.title))]),s("br"),s("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["firstPrise",e.validatorRules.firstPrise],expression:"['firstPrise', validatorRules.firstPrise]"}],staticStyle:{"margin-left":"0.375em",float:"left",height:"3.2em"},attrs:{type:"text",size:"large",autocomplete:"false",formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},value:e.firstInputQuestion.value}})],1),s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.secondInputQuestion.isShow,expression:"secondInputQuestion.isShow"}]},[s("h3",{},[e._v(e._s(e.secondInputQuestion.title))]),s("br"),s("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["secondPrise",e.validatorRules.secondPrise],expression:"['secondPrise', validatorRules.secondPrise]"}],staticStyle:{"margin-left":"0.375em",float:"left",height:"3.2em"},attrs:{type:"text",size:"large",autocomplete:"false",formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},value:e.secondInputQuestion.value}})],1),e._l(e.secondQuestion,(function(t){return s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"inputQue.vShow"}],key:t.title},[s("h3",{staticStyle:{"text-align":"left"}},[e._v(e._s(t.title))]),s("br"),s("br"),s("a-switch",{attrs:{id:t.index,"checked-children":"Yes","un-checked-children":"No",checked:t.isCheck,"default-checked":""},on:{click:e.secondQuestionSwitchHandler}})],1)})),e._l(e.selectSecondQuestionList,(function(t,i){return s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"selectQuestion.vShow"}],key:t.title},[s("h3",{},[e._v(e._s(t.title))]),s("br"),s("br"),s("a-radio-group",{staticClass:"a-radio-group",on:{change:function(t){return e.onChangeSecondOne(t,i)}},model:{value:t.vModelName,callback:function(s){e.$set(t,"vModelName",s)},expression:"selectQuestion.vModelName"}},e._l(t.vaules,(function(t){return s("a-radio",{key:t.vaules,style:e.radioStyle,attrs:{value:t.vaules}},[e._v(e._s(t.title))])})),1)],1)})),e._l(e.threeQuestion,(function(t){return s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"inputQue.vShow"}],key:t.title},[s("h3",{staticStyle:{"text-align":"left"}},[e._v(e._s(t.title))]),s("br"),s("br"),s("a-switch",{attrs:{id:t.index,"checked-children":"Yes","un-checked-children":"No",checked:t.isCheck,"default-checked":""},on:{click:e.threeQuestionSwitchHandler}})],1)})),s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.fourQuestion[0].vShow,expression:"fourQuestion[0].vShow"}]},[s("a-row",[s("a-col",{attrs:{span:9}},[s("span",{staticClass:"cline_span"},[e._v("Mortgage")])]),s("a-col",{attrs:{span:5}},[s("span",{staticClass:"cline_span"},[e._v("Origination")])]),s("a-col",{attrs:{span:5}},[s("span",{staticClass:"cline_span"},[e._v("Balance")])]),s("a-col",{attrs:{span:5}},[s("span",{staticClass:"cline_span"},[e._v("Payment")])])],1)],1),e._l(e.propertyLoanList,(function(t,i){return s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.fourQuestion[0].vShow,expression:"fourQuestion[0].vShow"}],key:i},[s("a-row",[s("a-divider")],1),s("a-row",[s("a-col",{attrs:{span:9}},[s("a-checkbox",{attrs:{value:i,"default-checked":!0},on:{change:function(t,s){return e.itemCheckBoxChange(t,s,i)}}},[s("span",{staticClass:"checkbox_span"},[e._v(e._s(t.mortgageName))])])],1),s("a-col",{attrs:{span:5}}),s("a-col",{attrs:{span:5}},[s("span",{staticClass:"showvalue_span"},[e._v(" $ "+e._s(t.balancePrice))])]),s("a-col",{attrs:{span:5}},[s("span",{staticClass:"showvalue_span"},[e._v("$ "+e._s(t.paymentPrice))])])],1),s("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[s("a-col",{attrs:{span:24}},[s("a-card",[s("p",{staticClass:"input_title"},[e._v("Company you write the check to")]),s("p",[s("a-input",{staticClass:"inputClass",model:{value:t.mortgageName,callback:function(s){e.$set(t,"mortgageName",s)},expression:"item.mortgageName"}})],1)])],1)],1),s("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[s("a-col",{attrs:{span:24}},[s("a-card",[s("p",{staticClass:"input_title"},[e._v("Balance")]),s("p",[s("a-input-number",{staticClass:"inputClass",attrs:{formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")}},model:{value:t.balancePrice,callback:function(s){e.$set(t,"balancePrice",s)},expression:"item.balancePrice"}})],1)])],1)],1),s("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[s("a-col",{attrs:{span:24}},[s("a-card",[s("p",{staticClass:"input_title"},[e._v("Payment")]),s("p",[s("a-input-number",{staticClass:"inputClass",attrs:{formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")}},model:{value:t.paymentPrice,callback:function(s){e.$set(t,"paymentPrice",s)},expression:"item.paymentPrice"}})],1)])],1)],1),s("a-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}]},[s("a-col",{attrs:{span:24}},[s("a-card",[s("p",{staticClass:"input_title"},[e._v("Is this the primary mortgage on this property?")]),s("p",[s("a-switch",{staticStyle:{"margin-left":"5.8em"},attrs:{id:t.firstSwitchIndex,"checked-children":"Yes","un-checked-children":"No",checked:t.firstSwitch,"default-checked":""},on:{click:function(t){return e.firstItemSwitchHandler(t,i)}}})],1)])],1)],1),s("a-row",{directives:[{name:"show",rawName:"v-show",value:t.secondSwitchShow,expression:"item.secondSwitchShow"}]},[s("a-col",{attrs:{span:24}},[s("a-card",[s("p",{staticClass:"input_title"},[e._v("Do you pay taxes and insurance as part of your monthly payment?")]),s("p",[s("a-switch",{staticStyle:{"margin-left":"5.8em"},attrs:{id:t.secondSwitchIndex,"checked-children":"Yes","un-checked-children":"No",checked:t.secondSwitch,"default-checked":""},on:{click:function(t){return e.secondItemSwitchHandler(t,i)}}})],1)])],1)],1)],1)})),s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.fourQuestion[0].vShow,expression:"fourQuestion[0].vShow"}]},[s("a-row",[s("a-col",{attrs:{span:24}},[s("a-divider")],1)],1),s("a-row",[s("a-col",{attrs:{span:2}},[s("svg",{staticClass:"icon icon-AddCircle",attrs:{width:"24px",height:"24px",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M17.664 17.648h7.476c2.048 0 2.048-3.072 0-3.072h-7.476v-7.472c0-0.848-0.688-1.536-1.536-1.536s-1.536 0.688-1.536 1.536v7.472h-7.508c-2.048 0-2.048 3.072 0 3.072h7.508v7.512c0 0.848 0.688 1.536 1.536 1.536s1.536-0.688 1.536-1.536zM16 32c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"}})])]),s("a-col",{attrs:{span:22}},[s("span",{staticClass:"add_span",on:{click:function(t){return e.addpropertyLoanList()}}},[e._v("Add a loan that's not listed")])])],1),s("a-row",[s("a-col",{attrs:{span:24}},[s("a-divider")],1)],1)],1),e._l(e.fourQuestion,(function(t){return s("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"inputQue.vShow"}],key:t.title},[s("h3",{staticStyle:{"text-align":"left"}},[e._v(e._s(t.title))])])})),s("a-form-item",[s("a-button",{staticClass:"SeeRatesleft",attrs:{type:"primary"},on:{click:e.prevStep}},[e._v("Previous")]),s("a-button",{staticClass:"SeeRatesright",staticStyle:{"margin-left":"2.5em"},attrs:{type:"primary"},on:{click:e.nextStep}},[e._v("Continue")])],1)],2)],1)},n=[],a=(s("0fea"),s("4ec3"),{name:"preapprovalAnotherPersonOnTitle",props:["userList"],data:function(){return{value:0,valueTwo:0,valueThree:0,valueFourAddress:"",showTwo:!1,showThree:!1,showFour:!1,radioStyle:{display:"block",height:"2em",lineHeight:"1.2","text-align":"left","font-size":"1.9em","font-weight":"600","letter-spacing":"-0.025em"},selectQuestionList:[{title:"What are your plans for this property?",vModelName:"",vShow:!0,vaules:[{title:"Sell it",vaules:"1"},{title:"Keep it",vaules:"2"}]}],selectSecondQuestionList:[{title:"How do you hold title to this property?",vModelName:"",vShow:!1,vaules:[{title:"By yourself",vaules:"1"},{title:"Jointly with spouse",vaules:"2"},{title:"Jointly with another person",vaules:"3"}]}],inputQuestion:[{title:"Do you own 4114 Sepulveda Blvd?",vShow:!0,isCheck:!0,index:0,descript:""}],secondQuestion:[{title:"Do you plan to sell 4114 Sepulveda Blvd before you purchase your new home?",vShow:!1,isCheck:!1,descript:""}],threeQuestion:[{title:"Are you currently making monthly payments on this property?",vShow:!1,isCheck:!1,descript:""}],firstInputQuestion:{title:"Expected asking price",value:0,isShow:!1},secondInputQuestion:{title:"Expected monthly rental income",value:0,isShow:!1},fourQuestion:[{title:"Which mortgage(s) are for 4114 Sepulveda Blvd?",vShow:!1,descript:""}],isMortgageShow:!1,propertyLoanList:[{isShow:!0,mortgageName:"",balancePrice:0,paymentPrice:0,firstSwitch:!1,secondSwitch:!1,firstSwitchIndex:0,secondSwitchIndex:1,secondSwitchShow:!1}],form:this.$form.createForm(this),validatorRules:{firstPrise:{rules:[{required:!1,message:""}]},secondPrise:{rules:[{required:!1,message:""}]}},OtherAnnualOtherIncomePrice:0}},created:function(){},methods:{itemCheckBoxChange:function(e,t,s){this.propertyLoanList[s].isShow=e.target.checked},addpropertyLoanList:function(){var e={isShow:!0,mortgageName:"",balancePrice:0,paymentPrice:0,firstSwitch:!1,secondSwitch:!1,firstSwitchIndex:0,secondSwitchIndex:1,secondSwitchShow:!1};this.propertyLoanList.push(e)},firstItemSwitchHandler:function(e,t){this.propertyLoanList[t].firstSwitch=e,this.propertyLoanList[t].secondSwitchShow=e},secondItemSwitchHandler:function(e,t){this.propertyLoanList[t].secondSwitch=e},firstSwitchHandler:function(e,t){var s=this;0==t.currentTarget.id&&(e?(s.inputQuestion[1].vShow=!1,s.selectQuestionList[0].vShow=!0,s.firstInputQuestion.isShow=!1,s.secondInputQuestion.isShow=!1):(s.inputQuestion[1].vShow=!0,s.selectQuestionList[0].vShow=!1,s.selectQuestionList[0].vModelName="",s.firstInputQuestion.isShow=!1,s.firstInputQuestion.value=0,s.secondInputQuestion.isShow=!1,s.secondInputQuestion.value=0)),s.inputQuestion[t.currentTarget.id].isCheck=e},secondQuestionSwitchHandler:function(e,t){this.secondQuestion[0].isCheck=e,this.selectSecondQuestionList[0].vShow=!0},threeQuestionSwitchHandler:function(e,t){this.threeQuestion[0].isCheck=e,this.fourQuestion[0].vShow=e},onChangeOne:function(e,t){var s=this;"1"==e.target.value?(s.firstInputQuestion.isShow=!0,s.secondInputQuestion.isShow=!1,s.secondQuestion[0].vShow=!0,s.selectSecondQuestionList[0].vShow=!1):(s.firstInputQuestion.isShow=!1,s.secondInputQuestion.isShow=!0,s.secondQuestion[0].vShow=!1,s.selectSecondQuestionList[0].vShow=!0)},onChangeSecondOne:function(e,t){this.threeQuestion[0].vShow=!0},prevStep:function(){var e=this;e.userList.navPageTabIndex=41,this.$emit("prevStep",this.userList)},nextStep:function(){var e=this;e.userList.navPageTabIndex=43,e.userList.preapprovalAnotherPersonOnTitle=e.inputQuestion,e.$emit("nextStep",e.userList)},inputCodeChange:function(e){this.inputCodeContent=e.target.value,e.target.value&&0!=e.target.value?(this.inputCodeContent=this.inputCodeContent.toLowerCase(),this.inputCodeNull=!1):this.inputCodeNull=!0}}}),o=a,r=(s("9698"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,null,null);t["default"]=c.exports},9698:function(e,t,s){"use strict";s("822b")}}]);