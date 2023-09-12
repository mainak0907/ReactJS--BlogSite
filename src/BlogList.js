import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {
   const blogs = props.blogs
   const title = props.title
   const handleDelete = props.ejlist
   return (
      <div className="BlogList">
         <h1>{title}</h1>
         {
            blogs.map((blog) => (
               <div className="blog-preview" key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                     <h1>{blog.title}</h1>
                     <p>{blog.body}</p>
                  </Link>
                  <button onClick={() => { handleDelete(blog.id) }}>Delete</button>
               </div>
            ))
         }
      </div>
   );
}

export default BlogList;