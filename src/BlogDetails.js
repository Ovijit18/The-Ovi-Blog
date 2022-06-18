import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog} = useFetch('http://localhost:9000/blogs/' +id);
    const history = useHistory();

    const handleRemove = () => {
        fetch('http://localhost:9000/blogs/' +blog.id,{
            method: 'DELETE',
        }).then(() =>{
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleRemove }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;