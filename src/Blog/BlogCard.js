import React from "react";
import "./BlogCard.scss";
import PrismCode from "../PrismCode";
import cx from 'classnames';

const BlogCard = (props) => {
    const markup = {__html: props.description}
    var blogClass = cx({
        'card': true,
        'blogContainer': !window.location.pathname.includes('details'),
        'detailsBlogContainer': window.location.pathname.includes('details'),
      });
    return (
        <div className={blogClass}>
            <header className="blogTitle">&nbsp;{props.title}</header>
            <div className="blogDescription" dangerouslySetInnerHTML={markup}></div>
            {!props.showOnlyTitle && <PrismCode
                code={props.code}
                language="js"
                plugins={["line-numbers", "codeWindow"]}
            />}
            <footer className="blogFooter">Written On: {props.date}</footer>
        </div>
    );
};

export default BlogCard;
