import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Home = () => {
    const title = 'All Blogs!';
    const {data: blogs} = useFetch('http://localhost:9000/blogs');

    return (
        <div className='blog-list'>
            <h1>{ title }</h1>
            {blogs && blogs.map((blog) =>
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>{ blog.author }</p>
                    </Link>  
                </div> 
            )}
        </div>
    );
}
 
export default Home;