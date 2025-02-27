import{r as i,c as p,a as x,d as N,y as b,j as e}from"./index-v5iI-aZC.js";import{u as g,c as j,a as l}from"./index.esm-G1SFvI4Y.js";import{h as d}from"./handleClasses-D8zYPPB5.js";const L=()=>{const[a,c]=i.useState(!1),[m,{isSuccess:n,isError:v,error:E,isLoading:u}]=p(),r=x(),[f,{isSuccess:o,isError:S,error:y,isLoading:h}]=N(),s=g({initialValues:{userName:"",otp:""},validationSchema:j({userName:l().required(),otp:l()}),onSubmit:(t,{resetForm:O})=>{a?m(t):f(t)}});return i.useEffect(()=>{o&&(s.setFieldValue("otp",""),c(!0),b.success("Please verify OTP"))},[o]),i.useEffect(()=>{n&&r("/admin-dashboard")},[n]),i.useEffect(()=>{localStorage.getItem("olx-admin")&&r("/admin-dashboard")},[r]),h||u?e.jsx("p",{children:"Please Wait ...."}):e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-sm-3",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:"Login"}),e.jsxs("div",{className:"card-body",children:[e.jsx("div",{children:a?e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"otp",className:"form-label",children:"Enter OTP"}),e.jsx("input",{type:"text",...s.getFieldProps("otp"),className:d(s,"otp"),id:"otp",placeholder:"Enter Your OTP"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.otp})]}):e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Enter Email Or Mobile Number"}),e.jsx("input",{type:"text",...s.getFieldProps("userName"),className:d(s,"userName"),id:"email",placeholder:"Enter Your Email Or Mobile Number"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.userName})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:a?"Verify OTP":"Login"})]})]})})})})})};export{L as default};
