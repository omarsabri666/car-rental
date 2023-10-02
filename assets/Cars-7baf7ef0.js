import{j as e,m as c,f as a,a as t,L as m,u as f,O as j}from"./index-9843ce9a.js";import{u as h,a as g}from"./api-e7c4bda1.js";function x({car:s}){return e.jsxs(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:" flex flex-col gap-3 shadow-xl",children:[e.jsx("img",{className:" w-full sm:w-[70%] md:w-full sm:mx-auto h-56",src:s.img2,alt:`${s.name}img`}),e.jsxs("div",{className:" flex justify-around",children:[e.jsxs("div",{className:" flex-col flex  gap-2",children:[e.jsx("h1",{className:" text-2xl font-bold",children:s.name1}),e.jsxs("div",{className:" flex items-center ",children:[e.jsx(a,{size:20}),e.jsx(a,{size:20}),e.jsx(a,{size:20}),e.jsx(a,{size:20}),e.jsx(a,{size:20})]})]}),e.jsxs("div",{className:" flex-col flex gap-1 ",children:[e.jsxs("h1",{className:" text-2xl font-bold",children:["$",s.price]}),e.jsx("div",{className:" flex items-center",children:e.jsx("h2",{className:" text-lg",children:"Per Day"})})]})]}),e.jsxs("div",{className:" flex justify-around",children:[e.jsx("div",{className:" flex-col flex  gap-2",children:e.jsxs("h1",{className:" text-lg  flex items-center font-semibold text-gray-600 gap-2",children:[" ",e.jsx("span",{children:e.jsx(t,{})})," ",s.model]})}),e.jsxs("h1",{className:" text-lg text-gray-600 flex items-center gap-2 font-semibold",children:[s.Doors," ",e.jsx(t,{})]})]}),e.jsxs("div",{className:" flex  mb-8 justify-around",children:[e.jsx("div",{className:" flex-col  flex  gap-2",children:e.jsxs("h1",{className:" text-lg  flex items-center font-semibold text-gray-600 gap-2",children:[" ",e.jsx("span",{children:e.jsx(t,{})})," ",s.Transmission]})}),e.jsxs("h1",{className:" text-lg text-gray-600 flex items-center gap-2 font-semibold",children:[s.fuel," ",e.jsx(t,{})]})]}),e.jsx("div",{className:" w-80 justify-center mx-auto h-[1px] bg-gray-500  mb-5"}),e.jsx(m,{className:" bg-omar  transition-all hover:shadow-strong w-3/4 mx-auto text-center py-4 text-white font-bold text-lg mb-4",to:"/home",children:"Book Ride"})]})}function p(){const i=f().getQueryData(["cars"]),{data:l,isLoading:o,isError:d}=h({queryFn:g,queryKey:["caragain"]});return i?o?e.jsx("div",{className:" flex justify-center items-center",children:e.jsx(j,{height:80,width:80,color:"#ff4d30",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#ff4d30",strokeWidth:2,strokeWidthSecondary:2})}):d?e.jsx("div",{className:" flex justify-center items-center",children:e.jsxs("h2",{className:" text-red-600",children:[" ","Could not Load Data check your connection"]})}):e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:" grid grid-cols-1 gap-6 my-24   md:grid-cols-3",children:i==null?void 0:i.map((r,n)=>e.jsx(x,{car:r},n))}):e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:" grid grid-cols-1 gap-6 my-24   md:grid-cols-3",children:l==null?void 0:l.map((r,n)=>e.jsx(x,{car:r},n))})}export{p as default};
