import React from "react";
import "./DarkModeSlider.scss";

const DarkModeSlider = (props) => {
    const switchTheme = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            props.onThemeChange('dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            props.onThemeChange('light');
        }    
    }

    return (
        <div className="sliderMainContainer">
             <div className="sliderContainer">
                <label className="switch">
                <input type="checkbox" onChange={switchTheme}/>
                <span className="slider round"></span>
                </label>
             </div>
        </div>
    );
};

export default DarkModeSlider;