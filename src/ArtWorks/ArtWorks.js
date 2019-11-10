import React from "react";
import {Link} from "@reach/router";

import './ArtWorks.scss'
import AboutPageFooter from "../AboutPageFooter/AboutPageFooter";

import artData from './ArtWorksData';


const ArtWorks = () => {
    let url = process.env.PUBLIC_URL || '';
    // I beleive that process.env.PUBLIC_URL is useful in case of CRA as it exposes
    // homepage URL of the APP through this env variable and so this hack need not
    // be done
    if (window.location.pathname.includes(`profile`)) {
        url = '/profile'
    }

    return (
        <div className="wrapper"> 
            <div className="blogPageHeader">
                <Link to={url + '/blogs'} className="galaryBackLink">
                    <div>Blogs</div>
                </Link>
                <Link to={url + '/'} className="galaryAboutLink">
                    <div>About Me</div>
                </Link>
            </div>
            <ul>
				{artData.map(artDet => (
					<li key={artDet.id}>
					<figure className="figureStyles">
						<img src={artDet.imgSrc} alt={artDet.alternativeText}></img>
						<figcaption className="captionStyles">{artDet.caption}
						<span role='img' aria-label='rain' className="heart">🧡</span>
						<span className="heartCount">0</span>
						</figcaption>
					</figure>
				</li>
				))}
            </ul>
            <AboutPageFooter />
        </div>
    );
};

export default ArtWorks;
