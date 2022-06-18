import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('ovi');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        
        fetch('http://localhost:9000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className='create'>
            <h2>Create new blog</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                type='text'
                required
                value={title}
                onChange ={(e) => setTitle(e.target.value)}
                >
                </input>
                <label>Body:</label>
                <textarea
                type='text'
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
                >
                </textarea>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='imran'>imran</option>
                    <option value='ovi'>ovi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;