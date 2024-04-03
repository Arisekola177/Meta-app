
import { useNavigate, useParams } from 'react-router'
import useFetch from '../useFetch'
import { FaComment, FaThumbsUp } from "react-icons/fa"

const BlogDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data : blog, ispending, error} = useFetch('http://localhost:8000/blogs/' + id)

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE",
            
        }).then(() => {
          navigate('/')
        })
    } 
  return (
    <div>
         {ispending && <div>Loading....</div>}
         {error && <div> {error} </div>}
         {blog &&  
         <article className='mt-10 flex flex-col gap-5 md:flex-row'>
            <div className='md:w-6/12 mt-5 flex flex-col gap-3'>
            <img className='w-[400px] mx-auto lg:mx-0 lg:w-[500px] lg:h-[500px] rounded-xl object-contain' src={blog.img} alt='blogimg'/>
            </div>
           <div className='md:w-8/12 mt-3'>
            <h2 className='text-3xl font-bold mb-4'>{blog.title}</h2>
             <p className='text-start'>{blog.body}</p>
             <p className='mt-6 text-xl font-bold'>Written by : {blog.author}</p>
             <div className='mt-5 flex gap-10 items-center'>
            <div >
            <FaComment/>
            <p>Comment</p>
            </div>
            <div>
            <FaThumbsUp/>
            <p>Like</p>
            </div>
          
           </div>
           <div className='mt-8 bg-red-800 w-[100px] text-center rounded-lg'>
            <button onClick={handleDelete} className='text-white py-2'>Delete</button>
           </div>
           </div>
           
        </article>}
    </div>
  )
}

export default BlogDetails