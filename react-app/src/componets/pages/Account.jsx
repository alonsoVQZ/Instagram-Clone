import "./style/Account.css"

import { useNavigate } from "react-router-dom";

const cardsInfoArray = [
    // { image: "", title: "Login & Security", caption: "Edit login, name and mobile number", link: "" },
    { image: "/location.png", title: "Your Addresses", caption: "Edit, remove and set default address", link: "/addresses" },
    // { image: "", title: "Your Payments", caption: "View all transactions, manage payment methods and settings", link: "/payments" },
    { image: "/box.png", title: "Your Orders", caption: "Track, return, cancel and order download invoice or buy again", link: "/orders" },
    // { image: "", title: "Your Lists", caption: "View, modify and ahre your lists or create new ones", link: "/lists" },
    // { title: "", caption: "" },
]

export default function Account() {
    return (
        <div id="Account">
            <div id="Account-d1">
                <span id="Account-d1s1">Your Account</span>
            </div>
            <div id="Account-d2">
                { cardsInfoArray.map((element, index) => <AccountCards key={`Account Cards ${index + 1}`} { ...{ element } }/>)}
            </div>
        </div>
    )
}

function AccountCards({ element }) {
    const { image, title, caption, link } = element;
    const navigate = useNavigate();
    const handleNavigate = () => navigate(link)
    return (
        <div className="AccountCards" onClick={() => handleNavigate()}>
            <div className="AccountCards-d1">
                <img className="AccountCards-d1i1" src={image} alt="image" />
            </div>
            <div className="AccountCards-d2">
                <span className="AccountCards-d2s1">{title}</span>
                <span className="AccountCards-d2s2">{caption}</span>
            </div>
        </div>
    )
}