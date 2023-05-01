import React, { useState } from 'react';
import "./style.scss";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = () => {


   const [title, setTitle] = useState("");
   const [date, setDate] = useState("");

   const [task, setTask] = useState([]);


   const addTask = () => {
      const newTask = {
         id: uuidv4(),
         title,
         date,
      }

      const chek = {
         title: title.trim().length === 0,
         date: date.trim().length === 0
      }

      if (chek.title || chek.date) {
         toast.error("Please enter a title and a date", {
            position: "top-right",
            autoClose: 1000
         })
      } else {
         setTask([...task, newTask]),
            setTitle(''),
            setDate(''),
            toast.success("Task added successfully", {
               position: "top-right",
               autoClose: 1000
            })
      }
   }

   const removeTask = (id) => {
      const filterTask = task.filter((el) => {
         return el.id != id
      })

      setTask(filterTask)
      toast.info("Task removed successfully")
   }


   return (
      <>
         <ToastContainer />
         <div className="card p-5 my-5 w-75 shadow">
            <label htmlFor="taskname" className='w-75 my-2 mx-auto'>
               <p className="font-monospace">Enter task tatile</p>
               <input type="text" placeholder='enter task name' className='form-control form-control-lg p-2 font-monospace' value={title}
                  onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label htmlFor="taskdate" className='w-75 mt-5 mx-auto'>
               <p className="font-monospace">Select task deadline</p>
               <input type="date" placeholder='enter task name' className='form-control form-control-lg p-2 font-monospace' value={date}
                  onChange={(e) => setDate(e.target.value)} />
            </label>
            <label htmlFor="taskbutton" className='w-75 my-4 mx-auto'>
               <button type="button" className="btn btn-info btn-rounded w-100 text-center me-2 font-monospace"
                  onClick={() => addTask()} >Add new task</button>
            </label>

            <table className="table w-75 m-auto">
               <thead>
                  <tr>
                     <th scope="col">ID</th>
                     <th scope="col">NAME</th>
                     <th scope="col">DATE</th>
                     <th scope="col">DELETE</th>
                  </tr>
               </thead>
               <tbody>

                  {task.length > 0 ?
                     task.map((e, id) => {
                        return (

                           <tr key={id}>
                              <th scope="row">{id + 1}</th>
                              <td>{e.title}</td>
                              <td>{e.date}</td>
                              <td> <button onClick={() => {removeTask(e.id)}} className="btn btn-danger">Delate</button> </td>
                           </tr>

                        )

                     })
                     : <h3>Malumot yuq</h3>

                  }


               </tbody>
            </table>
         </div>

      </>
   );
};

export default index; <h1>Home</h1>