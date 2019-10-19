import React from "react";
import {Link} from "@reach/router";
import data from "./BlogData";
import BlogCard from "./BlogCard";
import "./BlogPage.scss";

const BlogPage = () => {
    let url = process.env.PUBLIC_URL || '';
    // I beleive that process.env.PUBLIC_URL is useful in case of CRA as it exposes
    // homepage URL of the APP through this env variable and so this hack need not
    // be done
    if (window.location.pathname.includes(`profile`)) {
        url = '/profile'
    }

    const blog = data.map(blog => (
        <Link
            className="detailLink"
            to={url + `/details/${blog.blogId}`}
            key={blog.blogTitle}><BlogCard
            title={blog.blogTitle}
            description={blog.blogDesc}
            date={blog.date}
            code={blog.code || ''}
            /></Link>
    ))
    return (
        <div className="blogPageContainer">
            <div className="blogPageHeader">
                <Link to={url + '/'} className="backLink">
                    <div>About Me</div>
                </Link>
            </div>
            {blog}</div>
    );
};

export default BlogPage;
