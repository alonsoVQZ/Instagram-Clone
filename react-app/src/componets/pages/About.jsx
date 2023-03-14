import { Link } from "react-router-dom";
import "./style/About.css"

function About() {
    return (
        <div id="About">
            <h2>Hello Welcome to my AppAcademy Capstone Project: aovzon</h2>
            <h3>Alonso Vazquez</h3>
            <h3>Contact Information</h3>
            <ul>
                <h3><li><Link to={"https://www.linkedin.com/in/vqzmata/"}>LinkedIn</Link></li></h3>
                <h3><li><Link to={"https://github.com/alonsoVQZ"}>GitHub</Link></li></h3>
                <h3><li><Link to={"https://github.com/alonsoVQZ/aovzon"}>Project Repository</Link></li></h3>
            </ul>
        </div>
    )
}

export default About;