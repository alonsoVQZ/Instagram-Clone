import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import "./style/FormAddress.css"

export default function FormAddress() {
    const { addressId } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [button, setButton] = useState("");

    const [country, setCountry] = useState("")
    const [fullName, setFullName] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")

    const handleButton = async () => {
        const formData = {
            country,
            fullName,
            number,
            address,
            address2,
            city,
            state,
            zipCode
        }
        if(addressId) {
            await fetch("/api/addresses/" + addressId, {
            method: "PUT",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify(formData),
        });
            
        } else {
            await fetch("/api/addresses", {
                method: "POST",
                headers: { "Content-Type": "application/JSON" },
                body: JSON.stringify(formData),
            });
        } 
        navigate("/addresses")
    }
    const getAddress = async() => {
        const response = await fetch("/api/addresses/" + addressId, { method: 'GET' })
        const responseJSON = await response.json();
        setCountry(responseJSON.country);
        setFullName(responseJSON.full_name);
        setNumber(responseJSON.number);
        setAddress(responseJSON.address);
        setAddress2(responseJSON.address2);
        setCity(responseJSON.city);
        setState(responseJSON.state);
        setZipCode(responseJSON.zip_code);
    }
    useEffect(() => {
        if(addressId) {
            setTitle("Edit your address");
            setButton("Save changes");
            getAddress();
        } else {
            setTitle("Add a new address");
            setButton("Add address")
        } 
    }, [])

    return (
        <div id="FormAddress">
            <div id="FormAddress-d1">
                <div id="FormAddress-d1d1">
                    <span id="FormAddress-d1d1s1">{title}</span>
                </div>
                <div id="FormAddress-d1d2">
                    <div className="FormAddress-d1d2-divtype1">
                        <label className="FormAddress-d1d2-label">Country/Region</label>
                        <select className="FormAddress-d1d2-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="United States">United States</option>
                            <option value="Mexico">Mexico</option>
                        </select>
                    </div>
                    <div className="FormAddress-d1d2-divtype1">
                        <label className="FormAddress-d1d2-label">Full name (First and Last name)</label>
                        <input className="FormAddress-d1d2-input" value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" />
                    </div>
                    <div className="FormAddress-d1d2-divtype1">
                        <label className="FormAddress-d1d2-label">Phone number</label>
                        <input className="FormAddress-d1d2-input" value={number} onChange={(e) => setNumber(e.target.value)} type="text" />
                    </div>
                    <div className="FormAddress-d1d2-divtype1">
                        <label className="FormAddress-d1d2-label">Address</label>
                        <input className="FormAddress-d1d2-input" value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Street address or P.O. Box"/>
                        <input className="FormAddress-d1d2-input" value={address2} onChange={(e) => setAddress2(e.target.value)} type="text" placeholder="Apt, suite, unit, bulding, floor, etc." />
                    </div>
                    <div className="FormAddress-d1d2-divtype2">
                        <div className="FormAddress-d1d2-divtype1">
                            <label className="FormAddress-d1d2-label">City</label>
                            <input className="FormAddress-d1d2-input" value={city} onChange={(e) => setCity(e.target.value)} type="text" />
                        </div>
                        <div className="FormAddress-d1d2-divtype1">
                            <label className="FormAddress-d1d2-label">State</label>
                            <input className="FormAddress-d1d2-input" value={state} onChange={(e) => setState(e.target.value)} type="text" />
                        </div>
                        <div className="FormAddress-d1d2-divtype1">
                            <label className="FormAddress-d1d2-label">Zip Code</label>
                            <input className="FormAddress-d1d2-input" value={zipCode} onChange={(e) => setZipCode(e.target.value)} type="text" />
                        </div>
                    </div>
                </div>
                <div id="FormAddress-d1d3">
                    <button id="FormAddress-d1d3b1" type="button" onClick={() => handleButton()}>{button}</button>
                </div>
            </div>
        </div>
    )
}