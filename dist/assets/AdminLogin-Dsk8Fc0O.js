import{r as a,c as j,a as v,d as E,y as o,j as e}from"./index-BuUBLaAI.js";import{u as S,c as y,a as f}from"./index.esm-DRJaZ8Qf.js";import{h as p}from"./handleClasses-DgD_DHDH.js";const F=()=>{const[i,n]=a.useState(!1),[h,{isSuccess:d,isError:l,error:c,isLoading:x}]=j(),r=v(),[g,{isSuccess:m,isError:u,error:N,isLoading:b}]=E(),s=S({initialValues:{userName:"",otp:""},validationSchema:y({userName:f().required(),otp:f()}),onSubmit:(t,{resetForm:k})=>{i?h(t):g(t)}});return a.useEffect(()=>{m&&(s.setFieldValue("otp",""),n(!0),o.success("please verify otp"))},[m]),a.useEffect(()=>{u&&o.error(N.message)},[u]),a.useEffect(()=>{d&&r("/admin-dashboard")},[d]),a.useEffect(()=>{l&&(n(!1),o.error(c.data?c.data.message:"sosmething went wrong"))},[l]),b||x?e.jsx("p",{children:"Please Wait ...."}):(a.useEffect(()=>{localStorage.getItem("olx-admin")&&r("/admin-dashboard")},[r]),e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-sm-3",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:"Login"}),e.jsxs("div",{className:"card-body",children:[i?e.jsxs("div",{children:[e.jsx("label",{for:"otp",className:"form-label",children:"Enter Otp"}),e.jsx("input",{type:"text",...s.getFieldProps("otp"),className:p(s,"otp"),id:"otp",placeholder:"Enter Your otp"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.otp})]}):e.jsxs("div",{children:[e.jsx("label",{for:"email",className:"form-label",children:"Enter Email Or Mobile Number"}),e.jsx("input",{type:"text",...s.getFieldProps("userName"),className:p(s,"userName"),id:"email",placeholder:"Enter Your Email Or Mobile Number"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.userName})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:i?"Verify OTP":"Login"})]})]})})})})})}))};export{F as default};
