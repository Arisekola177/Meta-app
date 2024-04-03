import React from 'react'
import Category from '../Components/Category'
import BlogList from '../Components/BlogList'
import Latest from '../Components/Latest'
import useFetch from '../useFetch'



const Home = () => {

  const {data: blog, ispending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div >
      
       {error && <div> {error} </div>}
       {ispending && <div>Loading....</div>} 
       <div className='flex md:flex-row md:justify-between md:gap-10 '>
        <div className='w-full md:w-9/12 '>
        {blog && <BlogList blog={blog} />}  
        </div>
        <div className='hidden md:block w-3/12 border-[2px] mt-5 '>
        {blog && <Latest blog={blog} />}
        </div>
     
      </div>
    </div>
  )
}

export default Home