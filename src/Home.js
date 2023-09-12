import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
   const { data: blogs, isPending, errorthere, setData } = useFetch('http://localhost:8000/blogs')
   const history = useHistory()
   const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog) => blog.id !== id)
      setData(newBlogs)
      fetch('http://localhost:8000/blogs/' + id, {
         method: 'DELETE'
      }
      ).then(() => {
         history.push("/")
      })
   }
   return (
      <div className="home">
         {errorthere && <p> {errorthere} </p>}
         {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs" ejlist={handleDelete} />}
         {blogs && <BlogList blogs={blogs.filter((blog) => blog.titles === "AI" || blog.titles === "ML")} title="ML AI Blogs" ejlist={handleDelete} />}
      </div>
   );
}

export default Home;