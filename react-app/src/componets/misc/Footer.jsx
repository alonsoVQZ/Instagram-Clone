import './style/Footer.css'
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div id="Footer">
            {/* <div id="Footer-d1" className='Footer-Divs'>
                <span>Back to top</span>
            </div> */}
            <div id="Footer-d2" className='Footer-Divs'>
                <NavLink id='Footer-d2nl1' to={"/"}><span id='Footer-d2nl1s1'>aovz</span><span id='Footer-d2nl1s2'>on</span></NavLink>
            </div>
            <div id="Footer-d3" className='Footer-Divs'>
                <span>© 1996-2023, aovzon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}

export default Footer;