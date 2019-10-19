import React from "react";
import data from "../Blog/BlogData";
import BlogCard from "../Blog/BlogCard";

const Details = (props) => {
    const blog = data
        .filter(blog => blog.blogId === props.id)
        .map(blog => <BlogCard
            key={blog.blogTitle}
            title={blog.blogTitle}
            description={blog.blogDesc}/>)
    return (
        <div>
            {blog}
        </div>
    );
};

export default Details;
