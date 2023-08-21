import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();


    const handlesubmit =(e) => {
        e.preventDefault()
        const blog = { title, body, author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)


        }).then(() => {
            console.log("NewBlogAdded")
            setIsPending(false)
            history.push('/')
    
    })



    }




    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handlesubmit}>
                <label>Blog Title</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}                
                />
                <label>Blog body</label>
                <textarea                  
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} > 
                </textarea>
                <label>Blog Author</label>
                <input
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                
                />
                
                {!isPending && <button>Create Blog!</button>}
                {isPending && <button>Adding Blog.....</button>}

            </form>
        </div>
    );
}
 
export default Create;