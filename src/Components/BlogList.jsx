import { FaComment, FaThumbsUp } from "react-icons/fa"
import { Link } from "react-router-dom"
const BlogList = ({blog}) => {
  return (
    <div className="mt-5 flex flex-col items-center gap-6">
        {
            blog.map((blog) =>(
               <div className="bg-slate-200 py-4 px-6 rounded-lg hover:cursor-pointer hover:shadow-xl duration-500 hover:border" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <img className="w-full md:w-[400px] h-[200px] object-cover rounded-lg" src={blog.img} alt="image" />
                  <div className="flex flex-col gap-5 text-start">
                  <h1 className="text-3xl font-semibold  ">{blog.title}</h1>
                  <p className="mb-4">{blog.Desc}</p>
                  <div className="flex justify-between items-center">
                  <h3 className="mt-5">Written by: {blog.author}</h3>
                  <div className="mt-5 flex gap-10 items-center">
                      <div>
                      <FaComment /> 
                      <span>
                       {blog.comments}
                      </span>
                      </div>
                      <div>
                      <FaThumbsUp /> 
                      <span>
                       {blog.likes}
                      </span>
                      </div>
                   
                  </div>
                 
                  </div>
                  </div> 
                  
                    
                   </div>
                   </Link>
               </div> 
            ))
        }
        
    </div>
  )
}

export default BlogList