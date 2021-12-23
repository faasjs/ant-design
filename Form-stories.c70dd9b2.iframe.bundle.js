"use strict";(self.webpackChunk_faasjs_ant_design=self.webpackChunk_faasjs_ant_design||[]).push([[868],{"./src/components/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,Required:()=>Required});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Form.tsx");__webpack_require__("./node_modules/antd/dist/antd.css");const __WEBPACK_DEFAULT_EXPORT__={title:"Form",component:_Form__WEBPACK_IMPORTED_MODULE_1__.l},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Form__WEBPACK_IMPORTED_MODULE_1__.l,{...args}),Default=Template.bind({});Default.args={items:[{type:"string",id:"string"},{type:"string[]",id:"string[]"}]};const Required=Template.bind({});Required.args={items:[{type:"string",id:"string",rules:[{required:!0}]},{type:"string[]",id:"string[]",rules:[{required:!0}]}]}},"./src/components/Form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Form});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/form/index.js"),_FormItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormItem.tsx");function Form(props){return console.log(props),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,children:props.items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormItem__WEBPACK_IMPORTED_MODULE_1__.x,{...item},item.id)))})}try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"FormItemProps<any>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>FormItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/row/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/col/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/button/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/MinusCircleOutlined.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");function FormItem(props){if(console.log(props),props.input)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Z.Item,{label:props.title||props.id,name:props.id,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(props.input,{})});switch(props.type){case"string":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Z.Item,{label:props.title||props.id,name:props.id,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Z,{})});case"string[]":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Z.List,{name:props.id,rules:props.rules,children:(fields,{add,remove})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ant-row ant-form-item ant-form-item-label",style:{rowGap:"0px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:props.rules?.find((r=>r.required))&&"ant-form-item-required",children:props.title||props.id})}),fields.map((field=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Z.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Z,{gutter:16,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{span:23,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Z.Item,{...field,noStyle:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Z,{style:{width:"100%",marginRight:"12px"}})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{span:1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{danger:!0,type:"link",style:{float:"right"},icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.Z,{}),onClick:()=>remove(field.name)})})]})},field.key))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Z.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{type:"dashed",block:!0,onClick:()=>add(),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.Z,{})})})]})});default:return null}}try{FormItem.displayName="FormItem",FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"string"'},{value:'"string[]"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"(args: { value?: Value; onChange?: (value: Value) => void; }) => Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormItem.tsx#FormItem"]={docgenInfo:FormItem.__docgenInfo,name:"FormItem",path:"src/components/FormItem.tsx#FormItem"})}catch(__react_docgen_typescript_loader_error){}}}]);