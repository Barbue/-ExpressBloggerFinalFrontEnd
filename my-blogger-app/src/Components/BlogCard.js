import { useState } from "react";
import axios from 'axios';

const BlogCard = (props) => {

    const {blog, urlEndPoint, setShouldRefresh } = props;
    console.log(blog)
    const [title, setTitle] = useState(blog.title);
    const [text, setText] = useState(blog.text);
    const [author, setAuthor] = useState(blog.author);
    const [year, setYear] = useState(blog.year)
    const [categories, setCategories] = useState(blog.categories)
    const [isEditing, setIsEditing] = useState(false);

 
   


    //implement handlers 
    // const handleSetToDoComplete = async () => {
    //   setShouldRefresh(true);
    //   const req = {
    //     isComplete: !blog.isComplete
    //   } 

    // if above function is to be used, then "req" has to be added after the below blog.id}`, req
      // const response = axios.put(`${urlEndPoint}/blogs/update-one/${blog.id}`)
      // .then(function (response) {
      //   console.log(response);
      // },{
      // 'Content-Type': 'application/json'
      // })
      // setShouldRefresh(false);
    // }
    const handleDeleteBlog = () => {
      const response = axios.delete(`${urlEndPoint}/blogs/delete-one/${blog.id}`)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })

    }
    const handleUpdateBlog = () => {
      setShouldRefresh(true);
      const req = {
        title: title,
        text: text,
        author: author,
        year: year,
        categories: categories,
       
    } 
      const response = axios.put(`${urlEndPoint}/blogs/update-one/${blog.id}`, req)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })
      setShouldRefresh(false);
    }

    return (
        <div>
        
          {!isEditing && <h2>Title: {blog.title}</h2>}
          {isEditing && (
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          )}
          {/* <br/> */}
          {!isEditing && <p>Text: {blog.text}</p>}
          {isEditing && (
                    <>
            <textarea
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </>
          )}
          {/* <br/> */}

          {!isEditing && <p>Author: {blog.author}</p>}
          {isEditing && (
            <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          )}
          {/* <br/> */}
        
          {!isEditing && <p>Year: {blog.year}</p>}
          {isEditing && (
            <input
              type="text"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          )}
          {/* <br/> */}
          
          {!isEditing && <p>Categories: {blog.categories}</p>}
          {isEditing && (
            <input
              type="text"
              value={categories}
              onChange={(e) => {
                setCategories(e.target.value);
              }}
            />
          )}
            
                   
           
          {/* <p>Is Complete: {blog.isComplete ? "Complete" : "Incomplete"}</p> */}
          <p>ID: {blog.id}</p>
          <p>Creation Date: {blog.createdAt.toString()}</p>
          {/* <p>Last Modified: {blog.lastModified.toString()}</p> */}
          {/* <p>
            Completed Date: {blog.completedDate && blog.completedDate.toString()}
          </p> */}
          {/* <button
            onClick={() => {
              handleSetToDoComplete();
            }}
          >
            Toggle Complete
          </button> */}
          <button onClick={() => {handleDeleteBlog();
          }}
          >
          Delete Blog
          </button>
                {!isEditing && 
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit Blog
          </button>
                } 

                {isEditing && 
          <button
            onClick={() => {
              setIsEditing(false);
              handleUpdateBlog()
            }}
          >
            Update Blog
          </button>
                }
                <br/>
                <br/>
        </div>
      );
}

export default BlogCard;