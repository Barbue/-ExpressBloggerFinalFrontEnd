import { useState } from "react";
import BlogCard from "../Components/BlogCard";

//home page component 
const HomePage = (props) => {

    const {
        blogList, 
        setBlogList, 
        urlEndPoint,
        setShouldRefresh, 
    } = props

    return (
        <div>
            <h1>Full Stack Blog App</h1>
            {blogList.map((item, index) => {
                return (<BlogCard 
                    blog={item} 
                    setBlogList={setBlogList} 
                    urlEndPoint={urlEndPoint}
                    setShouldRefresh={setShouldRefresh}
                    key={index} /> 
                );
            })}
        </div>
    )
}

export default HomePage
