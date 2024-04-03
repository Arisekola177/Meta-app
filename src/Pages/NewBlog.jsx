import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const NewBlog = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [desc, setDesc] = useState('')
  const [author, setAuthor] = useState('')
  const [gender, setGender] = useState('Male')


const handleSubmit = (e) => {
   e.preventDefault();
  
   const blog = {title, body, author, gender, image}
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(blog)
    }).then(() =>{
      console.log("New blog added")
       navigate('/')
    } )
}
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <h2 className='font-semibold text-xl text-red-500'>Add New Blog</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5 border-[2px] py-3 px-6 w-[500px]'>
        <label>Blog title:</label>
        <input 
        type='text'
        required
        className='w-full border-[2px] rounded-lg h-[50px] p-2'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Desc:</label>
        <input 
        type='text'
        required
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className='w-full border-[2px] rounded-lg h-[100px] p-2'
        />
        <label>Blog body:</label>
        <textarea 
        type='text'
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className='w-full border-[2px] rounded-lg h-[150px] p-2'
        >
        </textarea>
        <label>Blog author:</label>
        <input 
        type='text'
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className='w-full border-[2px] rounded-lg h-[50px] p-2'
        />
        <label>Gender:</label>
        <select   
         value={gender}
         onChange={(e) => setGender(e.target.value)}
        className='w-full border-[2px] rounded-lg h-[50px] p-2'>
          <option  value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <div className='bg-red-500 text-center w-[150px] mx-auto rounded-xl'>
         <button className='text-white py-2 '>Add Blog</button>
        {/* {isPending && <button disabled>Adding Blog ...</button>} */}
        </div>
        
      </form>
    </div>
  )
}

export default NewBlog