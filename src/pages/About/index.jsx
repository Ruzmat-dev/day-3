import React, { useRef } from 'react';
import "./style.scss";
const index = () => {

   const cardRef = useRef();
   const valueIn = useRef();

   const addStyle = () => {
      cardRef.current.classList.toggle("swiper")
   }

   const valueInput = () => {
    valueIn.current.value
   }

   return (
      <>
         <div className="container">
            <button className="btn btn-primary m-5" onClick={() => addStyle()} >menu</button>
            <button className="btn btn-warning m-5" onClick={() => valueInput()} >input</button>

            <div className="form-outline  shadow-lg my-5">
               <input type="text" id="form12" className="form-control border p-2" ref={valueIn}/>
               <label className="form-label" htmlFor="form12">Example label</label>
            </div>


            <div className="card shadow-lg p-5 myCardAboud" ref={cardRef}>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aspernatur modi eius deserunt, dolor quaerat eveniet repudiandae ipsam ullam consequatur aperiam vitae laudantium itaque nulla quis adipisci numquam placeat optio molestiae reprehenderit soluta deleniti. Quas impedit alias illum pariatur fugit officia dicta ea eaque, minus odit animi at tempore aut nulla fugiat voluptatem ad eum. Rerum!</p>
            </div>
         </div>
      </>
   );
};

export default index; <h1>About</h1>