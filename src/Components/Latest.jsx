

const Latest = ({blog}) => {
  return (
    <div className=" px-4" >
        <h1 className="text-xl font-semibold py-4 text-center ">Latest Blog</h1>
        <div >
            {
                blog.map((blog) =>(
                    <div className="border-[1px] border-b  py-4 px-4 " key={blog.id}>
                    <h1>{blog.Desc}</h1>
                    <p className="mt-5 text-lg font-bold">Written by: {blog.author}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Latest