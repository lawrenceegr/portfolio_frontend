import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WorkCard } from '../components';
import api from '../api';
export default function Work  ()  {
  const [works, setWorks] = useState([]);
  const [newWork, setNewWork] = useState({ title: '', dateStarted:'', dateEnded:'', description: '', image: '' });
  const [selectedWork, setSelectedWork] = useState(null);
  const[showForm, setShowForm]= useState(false)

  useEffect(() => {
    // Fetch works data from the API
    fetch('http://localhost:4000/work')
      .then(res => res.json())
      .then(data => {setWorks(data);
      console.log(data)});
      
  }, []);

  const handleWorkChange = e => {
    setNewWork({ ...newWork, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    setNewWork({ ...newWork, image: e.target.files[0] });
  };
  const clearForm =()=>{
    setNewWork({ title: '',dateStarted:'',dateEnded:'', description: '', image: '',  });

  }
  const handleSubmit = e => {
    e.preventDefault();
    // Upload work data to the API
    const formData = new FormData();
    formData.append('title', newWork.title);
    formData.append('dateStarted', newWork.dateStarted);
    formData.append('dateEnded', newWork.dateEnded);
    formData.append('description', newWork.description);
    formData.append('image', newWork.image);
   
    axios.post('http://localhost:4000/work', formData)
      // .then(res => res.json())
      .then(data => {
        setWorks([...works, data]);
        clearForm()
        setShowForm(false)
      });
  };

  const handleUpdate = () => {
    // Update work data to the API
    const formData = new FormData();
    formData.append('title', newWork.title);
    formData.append('dateStarted', newWork.dateStarted);
    formData.append('dateEnded', newWork.dateEnded);
    formData.append('description', newWork.description);
    formData.append('image', newWork.image);
    fetch(`http://localhost:4000/work/${selectedWork._id}`, {
      method:'PUT',
      body:formData})
        .then(res => res.json())
        .then(data => {
        setWorks(works.map(work => work._id === data._id ? data : work));
        setSelectedWork(null);
        clearForm()
        setShowForm(false)
        });
        };
        
  const handleDelete = work => {
  // Delete work data from the API
      fetch(`http://localhost:4000/work/${work._id}`, { method: 'DELETE' })
      .then(() => {
        setWorks(works.filter(w => w._id !== work._id));
      });
  };
        
  const handleEdit = work => {
    setShowForm(true)
    setSelectedWork(work);
    setNewWork({ ...work });
  };
        
        return (
        <div className="container mx-auto xl:px-[200px]">
        <h1 className="text-2xl font-bold mb-4">Manage Works</h1>
  {showForm &&      <form className="flex flex-col mb-4" onSubmit={handleSubmit}>
          <label htmlFor="title" className=' text-start mb-2'>Title</label>
        <input
               type="text"
               name="title"
               placeholder="Title"
               className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
               value={newWork.title}
               onChange={handleWorkChange}
             />
        <label htmlFor="dateStarted" className=" text-start mb-2">Date started</label>
        <input 
            type="date"
            name="dateStarted"
            className='text-gray-600 my-2 p-2 border border-gray-300 rounded-md'
            placeholder="Date Started"
            value={newWork.dateStarted}
            onChange={handleWorkChange}
        />
                <label htmlFor="dateEnded" className=" text-start mb-2">Date ended</label>

           <input 
            type="date"
            name="dateEnded"
            className='text-gray-600 my-2 p-2 border border-gray-300 rounded-md'
            placeholder="Date Started"
            value={newWork.dateEnded}
            onChange={handleWorkChange}
        />
       <label htmlFor="description" className=" text-start mb-2">Description</label>

        <textarea
               name="description"
               placeholder="Description"
               rows={6}
               className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2"
               value={newWork.description}
               onChange={handleWorkChange}
             />
            <label htmlFor="image" className=" text-start mb-2">Choose an image</label>
        <input
               type="file"
               name="image"
               className="mt-2"
               onChange={handleImageChange}
             />
             <div className="flex gap-20 justify-center mt-4">

               <button type="reset" onClick={()=>setShowForm(false)} className='bg-blue-500  text-white rounded  py-2 px-4 font-bold'>Cancel</button>
        {selectedWork ? (
          <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleUpdate}
          >Update
        </button>
        ) : (
          <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >Add
        </button>
        )}
        </div>
        </form>}
        {!showForm && <button onClick={()=>setShowForm(true)} className='text-lg p-4 rounded-lg bg-blue-500'>Add work +</button>}

        <div className="flex flex-wrap -mx-2 gap-10">
      {works.map(work => (
        
        <div key={work._id} className=''>
         
           <WorkCard 
          title={work.title}
          image={work.image} 
          description={work.description}
          />
   
      <div className="flex justify-between text-xs ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
          onClick={() => handleEdit(work)}
          >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded"
          onClick={() => handleDelete(work)}
          >
          Delete
        </button>
      </div>
    </div>

  ))}
  </div>
</div>
);
};