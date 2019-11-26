import React, { useState } from "react";
import {Link} from "@reach/router";
import data from "./BlogData";
import BlogCard from "./BlogCard";
import "./BlogPage.scss";
import SearchParams from "../Search/Search"

const BlogPage = () => {
    let url = process.env.PUBLIC_URL || '';
    // I beleive that process.env.PUBLIC_URL is useful in case of CRA as it exposes
    // homepage URL of the APP through this env variable and so this hack need not
    // be done
    if (window.location.pathname.includes(`profile`)) {
        url = '/profile'
    }

    const [filteredData, updateData] = useState(data);
    const [selectedLabel, updateLabel] = useState('ALL');
    const updateSearchValue = (value) => {
       updateData(data.filter(d => 
        (d.blogTitle.toLowerCase().includes(value.toLowerCase()) ||
        d.blogDesc.toLowerCase().includes(value.toLowerCase())) && 
        (d.label === selectedLabel || selectedLabel === 'ALL')
        ));
    }

    const updateLabelSearch = (value) => {
        updateData(data.filter(d => 
         d.label === value || value === 'ALL'
         ));
         updateLabel(value);
     }

    const blog = filteredData.map(blog => (
        <Link
            className="detailLink"
            to={url + `/details/${blog.blogId}`}
            key={blog.blogTitle}>
                <BlogCard
                title={blog.blogTitle}
                description={blog.blogDesc}
                date={blog.date}
                code={blog.code || ''}
                showOnlyTitle
                label={blog.label}
            />
        </Link>
    ))

    const uniqueLabels = [...new Set(data.map(d => d.label)), 'ALL']; 
    return (
        <div className="blogPageContainer">
            <div className="blogPageHeader">
                <Link to={url + '/'} className="backLink">
                    <div>About Me</div>
                </Link>
            </div>
            <div className="labelBlock">
                {uniqueLabels.map(label => 
                   // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                   <div className={selectedLabel === label? "selectedLabelCss": "labelCss"} key={label} onKeyPress={()=> updateLabelSearch(label)} onClick={()=> updateLabelSearch(label)} role="presentation">
                       {label}
                   </div>
                   )}
            </div>
            <div className="searchContainer">
                <SearchParams updateSearchValue={updateSearchValue}/>
            </div>
            {blog}</div>
    );
};

export default BlogPage;
