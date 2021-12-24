"use strict";(self.webpackChunk_faasjs_ant_design=self.webpackChunk_faasjs_ant_design||[]).push([[935],{"./src/components/Form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Form});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/form/index.js"),_FormItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormItem.tsx");function Form(props){return console.log(props),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,children:props.items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormItem__WEBPACK_IMPORTED_MODULE_1__.x,{...item},item.id)))})}try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"FormItemProps<any>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,String:()=>String,StringList:()=>StringList,Number:()=>Number,NumberList:()=>NumberList,Boolean:()=>Boolean,Children:()=>Children});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_FormItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormItem.tsx"),_Form__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/antd/dist/antd.css"),__webpack_require__("./src/components/Form.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"FormItem",component:_FormItem__WEBPACK_IMPORTED_MODULE_1__.x},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Form__WEBPACK_IMPORTED_MODULE_3__.l,{onValuesChange:console.log,items:[args]}),String=Template.bind({});String.args={type:"string",id:"string"};const StringList=Template.bind({});StringList.args={type:"string[]",id:"string list"};const Number=Template.bind({});Number.args={type:"number",id:"number"};const NumberList=Template.bind({});NumberList.args={type:"number[]",id:"number list"};const Boolean=Template.bind({});Boolean.args={type:"boolean",id:"boolean"};const Children=Template.bind({});function MockChildren({value,onChange}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{value:value?.toUpperCase(),onChange:e=>onChange(e.target.value)})}Children.args={type:"string",id:"children",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockChildren,{})}},"./src/components/FormItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>FormItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/row/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/col/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/button/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/input-number/index.js"),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/antd/es/switch/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/MinusCircleOutlined.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/PlusOutlined.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js");function FormItem(props){const[computedProps,setComputedProps]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();if((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const propsCopy={...props};if(propsCopy.title||(propsCopy.title=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.upperFirst)(propsCopy.id)),propsCopy.label||(propsCopy.label=propsCopy.title),propsCopy.name||(propsCopy.name=propsCopy.id),propsCopy.type||(propsCopy.type="string"),propsCopy.rules||(propsCopy.rules=[]),"boolean"===propsCopy.type)propsCopy.valuePropName="checked";setComputedProps(propsCopy)}),[props]),!computedProps)return null;if(computedProps.children)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{...computedProps,children:computedProps.children});switch(computedProps.type){case"string":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{...computedProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{})});case"string[]":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.List,{name:computedProps.name,rules:computedProps.rules,children:(fields,{add,remove})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ant-row ant-form-item ant-form-item-label",style:{rowGap:"0px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:computedProps.rules.find((r=>r.required))&&"ant-form-item-required",children:computedProps.label})}),fields.map((field=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{gutter:16,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{span:23,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{...field,noStyle:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{span:1,children:!computedProps.rules.find((r=>r.required))&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Z,{danger:!0,type:"link",style:{float:"right"},icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.Z,{}),onClick:()=>remove(field.name)})})]})},field.key))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Z,{type:"dashed",block:!0,onClick:()=>add(),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.Z,{})})})]})});case"number":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{...computedProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Z,{style:{width:"100%"}})});case"number[]":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.List,{name:computedProps.name,rules:computedProps.rules,children:(fields,{add,remove})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ant-row ant-form-item ant-form-item-label",style:{rowGap:"0px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:computedProps.rules?.find((r=>r.required))&&"ant-form-item-required",children:computedProps.label})}),fields.map((field=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{gutter:16,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{span:23,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{...field,noStyle:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Z,{style:{width:"100%"}})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{span:1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Z,{danger:!0,type:"link",style:{float:"right"},icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.Z,{}),onClick:()=>remove(field.name)})})]})},field.key))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Z,{type:"dashed",block:!0,onClick:()=>add(),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.Z,{})})})]})});case"boolean":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{...computedProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z,{})});default:return null}}try{FormItem.displayName="FormItem",FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"RuleObject[] & Rule[]"}},type:{defaultValue:{value:"'string'"},description:"Support string, string[], number, number[], boolean",name:"type",required:!1,type:{name:"enum",value:[{value:'"string"'},{value:'"number"'},{value:'"boolean"'},{value:'"string[]"'},{value:'"number[]"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormItem.tsx#FormItem"]={docgenInfo:FormItem.__docgenInfo,name:"FormItem",path:"src/components/FormItem.tsx#FormItem"})}catch(__react_docgen_typescript_loader_error){}}}]);