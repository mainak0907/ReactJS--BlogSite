import { useParams } from "react-router-dom";
import useFetch from "./useFetch"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
    const { id } = useParams()
    const { data: blogs, isPending, errorthere, setData } = useFetch('http://localhost:8000/blogs/' + id)
    const history=useHistory()
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/' + id ,{
            method:'DELETE'
        }
        ).then(()=>{
            history.push("/")
        })
    }
    return (
        <div className="blogdetails">
            <h1>Blog Details for -{id}</h1>
            {errorthere && <p> {errorthere} </p>}
            {isPending && <div>Loading...</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;