import React from "react";
import {Link} from "@reach/router";

import './ArtWorks.scss'
import sunset from "../assets/gallaryImages/sunset.jpg";
import coffeeGirl from "../assets/gallaryImages/coffeeGirl.jpeg";
import dance from "../assets/gallaryImages/dance.jpeg";
import tribalArt from "../assets/gallaryImages/tribalArt.jpeg";
import ride from "../assets/gallaryImages/ride.jpeg";
import rain from "../assets/gallaryImages/rain.jpeg";
import rocket from "../assets/gallaryImages/rocket.jpg";
import jumpingjack from "../assets/gallaryImages/jumpingjack.jpg";
import krishna from "../assets/gallaryImages/krishna.jpg";
import AboutPageFooter from "../AboutPageFooter/AboutPageFooter";


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
            <li>
				<figure className="figureStyles">
					<img src={tribalArt} alt="tribal art"></img>
					<figcaption className="captionStyles">Rise of the power within us against all odds!</figcaption>
				</figure>
			</li>
			<li>
				<figure className="figureStyles"> 
					<img src={dance} alt="dance"></img>
					<figcaption className="captionStyles">The Graceful Dancer!</figcaption>
				</figure>
			</li>
			<li>
				<figure className="figureStyles">
					<img src={coffeeGirl} alt="coffee girl"></img>
					<figcaption className="captionStyles">Enjoying a nice cup of coffee!</figcaption>
				</figure>
			</li>
            <li>
				<figure className="figureStyles">
					<img src={rain} alt="rain"></img>
					<figcaption className="captionStyles">A walk with a drizzle <span role='img' aria-label='rain'>🌧</span></figcaption>
				</figure>
			</li>
            <li>
				<figure className="figureStyles">
					<img src={rocket} alt="rocket"></img>
					<figcaption className="captionStyles">Let us ride to the moon!<span role='img' aria-label='rain'>🌔</span></figcaption>
				</figure>
			</li>
            <li>
				<figure className="figureStyles">
					<img src={jumpingjack} alt="jumpingjack"></img>
					<figcaption className="captionStyles">Let us create magic moments in our lives!<span role='img' aria-label='rain'>🎩</span></figcaption>
				</figure>
			</li>
            <li>
				<figure className="figureStyles">
					<img src={krishna} alt="krishna"></img>
					<figcaption className="captionStyles">The mischievous Lord Krishna</figcaption>
				</figure>
			</li>
            <li>
				<figure className="figureStyles">
					<img src={sunset} alt="sunset"></img>
					<figcaption className="captionStyles">A family kissed by the sun while saying goodbye to the day and welcoming the stary night.</figcaption>
				</figure>
			</li>
            <li>
				<figure className="figureStyles">
					<img src={ride} alt="lets ride"></img>
					<figcaption className="captionStyles">Let us take a breath of fresh air through a long ride <span role='img' aria-label='happy'>😀</span></figcaption>
				</figure>
			</li>
            </ul>
            <AboutPageFooter />
        </div>
    );
};

export default ArtWorks;
