import React from "react";
import "./BlogCard.scss";

const BlogCard = (props) => {
    return (
        <div className="blogContainer card">
            <div className="blogTitle">{props.title}</div>
            <div className="blogDescription">{props.description}</div>
        </div>
    );
};

export default BlogCard;
