import Banner from "../misc/Banner";
import FourItemsCard from "../misc/FourItemsCard";

import "./style/Root.css"

function Root() {
    return (
        <div id="Root">
            <div id="Root-d1">
                <Banner />
            </div>
            <div id="Root-d2">
                <FourItemsCard { ...{ title: "Products" } } />
                <FourItemsCard { ...{ title: "Products" } } />
                <FourItemsCard { ...{ title: "Products" } } />
                <FourItemsCard { ...{ title: "Products" } } />
                <FourItemsCard { ...{ title: "Products" } } />
                <FourItemsCard { ...{ title: "Products" } } />
                <FourItemsCard { ...{ title: "Products" } } />
                <FourItemsCard { ...{ title: "Products" } } />
            </div>
        </div>
    )
}

export default Root;