import React from "react";
import "./BlogCard.scss";
import PrismCode from "../PrismCode";

const BlogCard = (props) => {
    const markup = {__html: props.description}
    return (
        <div className="blogContainer card">
            <header className="blogTitle">{props.title}</header>
            <div className="blogDescription" dangerouslySetInnerHTML={markup}></div>
            <PrismCode
                code={props.code}
                language="js"
                plugins={["line-numbers"]}
            />
            <footer className="blogFooter">Written On: {props.date}</footer>
        </div>
    );
};

export default BlogCard;
