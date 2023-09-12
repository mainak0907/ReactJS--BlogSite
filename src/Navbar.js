import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Hehe Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add a new Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;