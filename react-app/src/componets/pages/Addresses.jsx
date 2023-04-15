import { useEffect, useState } from "react";
import "./style/Addresses.css"

import { useNavigate } from "react-router-dom";

export default function Addresses() {
    const navigate = useNavigate();
    const [reload, setReload] = useState(false);
    const [load, setLoad] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const handleAddAddress = () => navigate("/addresses/new");
    const getAddresses = async() => {
        const response = await fetch("/api/addresses", { method: 'GET' })
        const responseJSON = await response.json();
        setAddresses(responseJSON)
    };
    useEffect(() => {
        getAddresses();
        setLoad(true)
    }, []);
    useEffect(() => {
        getAddresses();
        setReload(false);
    }, [reload]);
    return (
        <div id="Addresses"> 
            {
                load && (
                    <>
                        <div id="Addresses-d1">
                            <span id="Addresses-d1s1">Your Addresses</span>
                        </div>
                        <div id="Addresses-d2">
                            <div id="Addresses-d2d1" onClick={() => handleAddAddress()}>
                                <span id="Addresses-d2d1s1">+</span>
                                <span id="Addresses-d2d1s2">Add Address</span>
                            </div>
                            { addresses.map((element, index) => <AddressCard key={"Address Card " + index} { ...{ element, setReload } } />) }
                        </div>
                    </>
                )
            }
        </div>
    )
}

function AddressCard({ element, setReload }) {
    const navigate = useNavigate()
    const {country, full_name, number, address, address2, city, state, zip_code, id} = element;
    const handleRemove = async() => {
        const response = await fetch("/api/addresses/" + id, { method: 'DELETE' })
        if(response.error) {

        } else {
            setReload(true)
        }
    }
    return (
        <div className="AddressCard">
            {
                false && (
                    <div className="AddressCard-d1">
                        <span className="AddressCard-d1s1">Default Address</span>
                    </div>
                )
            }
            
            <div className="AddressCard-d2">
                <span className="AddressCard-d2-span1" style={ { fontWeight: "700"}}>{full_name}</span>
                <span className="AddressCard-d2-span1">{address}</span>
                { (address2.length > 0) && <span className="AddressCard-d2-span1">{address2}</span> }
                <div className="AddressCard-d2d1">
                    <span className="AddressCard-d2-span2">{city},</span>
                    <span className="AddressCard-d2-span2">{state}</span>
                    <span className="AddressCard-d2-span2">{zip_code}</span>
                </div>
                <span className="AddressCard-d2-span1">{country}</span>
                <span className="AddressCard-d2-span1">Phone number: {number}</span>
            </div>
            <div className="AddressCard-d3">
                <span className="AddressCard-d3-span"onClick={() => navigate("/addresses/edit/" + id)}>Edit</span>
                <span className="AddressCard-d3-span" onClick={() => handleRemove()}>Remove</span>
                { false && <span className="AddressCard-d3-span">Set as Default</span> }
            </div>
        </div>
    )
}