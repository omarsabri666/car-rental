import{j as e,m as t,b as l}from"./index-9202cfb9.js";function m({team:a}){return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"  flex flex-col gap-2 col-span-3 md:col-span-1 shadow-xl",children:[e.jsx("img",{loading:"lazy",className:" w-full  sm:w-[70%] md:w-full sm:mx-auto h-72",src:a.img,alt:""}),e.jsx("h2",{className:"  text-center text-xl font-semibold",children:a.name}),e.jsx("h3",{className:"  mb-3 text-xl text-gray-700  text-center",children:a.role})]})}function n(){const a=[{name:"ryan gosling",role:"Salesman",img:"https://cdn.britannica.com/93/215393-050-E428CADE/Canadian-actor-musician-Ryan-Gosling-2016.jpg"},{name:"michael scott",role:"manager",img:"https://people.com/thmb/BJqN8mOl0sT69KD6JlgmVO6MjqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/the-office-steve-864d7814dbcc4807944c7ea609c4972a.jpg"},{name:"lana del rey",role:"Hr",img:"https://imageio.forbes.com/specials-images/imageserve/642d941b1d97b3757b392965/0x0.jpg?format=jpg&width=1200"}];return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"  my-10 grid  grid-cols-1  gap-4  md:grid-cols-3",children:[e.jsx("h1",{className:" text-6xl font-bold text-center col-span-3 my-5",children:"Our Team"}),e.jsx(l,{children:a.map((s,i)=>e.jsx(m,{team:s},i))})]})}export{n as default};
