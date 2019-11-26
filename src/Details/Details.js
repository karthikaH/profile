import React from "react";
import {Link} from "@reach/router";
import data from "../Blog/BlogData";
import BlogCard from "../Blog/BlogCard";

const Details = (props) => {
    let url = process.env.PUBLIC_URL || '';
    // I beleive that process.env.PUBLIC_URL is useful in case of CRA as it exposes
    // homepage URL of the APP through this env variable and so this hack need not
    // be done
    if (window.location.pathname.includes(`profile`)) {
        url = '/profile'
    }
    
    const blog = data
        .filter(blog => blog.blogId === props.id)
        .map(blog => <BlogCard
            key={blog.blogTitle}
            title={blog.blogTitle}
            description={blog.blogDesc}
            date={blog.date}
            code={blog.code || ''}
            label={blog.label}
            />)
    return (
        <div>
           <div className="blogPageHeader">
                <Link to={url + '/blogs'} className="backLink">
                    <div>My Blogs</div>
                </Link>
            </div>
            {blog}
        </div>
    );
};

export default Details;
