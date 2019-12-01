import React from "react";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import AboutPageFooter from "./AboutPageFooter/AboutPageFooter";
import DarkModeSlider from "./DarkModeSlider/DarkModeSlider";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeMode: 'light',
        }
        this._handleThemeChange = this._handleThemeChange.bind(this);
    }

    _handleThemeChange = (value) => {
        this.setState({
            themeMode: value,
        })
    }
    render() {
        const {themeMode} = this.state;
        console.log(themeMode);
        return <div>
            <DarkModeSlider onThemeChange={this._handleThemeChange}/>
            <Header theme={themeMode}/>
            <SkillSet/>
            <Education theme={themeMode}/>
            <Achievements/>
            <AboutPageFooter/>
        </div>
    }
}

export default About;
