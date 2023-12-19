import States from "../objects/States";
import telephoneCheck from "../functions/TelephoneValidator";
import React, { useState, useEffect, useRef } from "react";
import '../../style/PagesStyle/Contact.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const options = [
    {
    label: 'Yes'
    },
    {
    label: 'No',
    }
];

const Contact = ({ loaderToggle }) => {
    const ref = useRef();
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        City: '',
        State: '',
        New: '',
        message: ''

    });

    const onCityChange = (e) => {
        setValues(values =>({
            ...values,
            City: e.target.value
        })
            );
    };
    const onStateChange = (e) => {
        setValues(values =>({
            ...values,
            State: e.target.value
        })
            );
    };

    const onPhoneChange = (e) => {
        setValues(values =>({
            ...values,
            phone: e.target.value
        })
            );
    };

    const onNameChange = (e) => {
        setValues(values =>({
            ...values,
            name: e.target.value
        })
            );
    };
    const onEmailChange = (e) => {
        setValues(values =>({
            ...values,
            email: e.target.value
        })
            );
    };

    const onPrevClientChange = (e) => {
        setValues(values =>({
            ...values,
            New: e.target.value
        })
            );
    };

    const onMessageChange = (e) => {
        setValues(values =>({
            ...values,
            message: e.target.value
        })
            );
    };
 

    const errorMessage = 'ERROR: You must use a valid phone number'
    
    // const geoLocation = () => {
    //     const error = async () => {
    //         loaderToggle(false)
    //     }

    //     const success = async (position) => {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;
    //         const baseURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
           
    //         await axios.get(baseURL).then((response)=> {
    //             const state =  response.data.principalSubdivision
    //             const city = response.data.city
    //             setValues(values =>({
    //                 ...values,
    //                 City: city}))
    //             setValues(values =>({
    //                 ...values,
    //                 State: state}))
    //             loaderToggle(false)

    //     });
    //     }
    //     loaderToggle(true)

    //     window.navigator.geolocation.getCurrentPosition(success, error)
    // }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
            })
            .then(() => navigate('/submission'))
           
    }
    

    useEffect(()=> {
        // geoLocation()
    }, []);
    return (
        <form 
        name= "contact"
        action="/submission"
        className='ui form submit' 
        method='POST'
        onSubmit={onSubmit}
        id="input-form"
        data-netlify='true'
        >
            <input type='hidden' name='form-name' value='contact'></input>
            <h2 className="ui">Contact Us</h2>
            <br/>
            <div className="ui field required">
                <label>Name</label>
                <input 
                name="name"
                style={{width: '50vh'}}
                value={values.name} 
                placeholder={'John Smith'}
                onChange={onNameChange}
                required
                ></input>
            </div>

            <div className="ui field required">
                <label >Email</label>
                <input value={values.email} 
                name="email"
                style={{width: '50vh'}}

                placeholder={'email@email.org'}
                onChange={onEmailChange}
                required
                ></input>
            </div>

            <div className={`ui field required ${values.phone.length ===0 || telephoneCheck(values.phone) ? '' :'error'}`}>
                <label>Phone</label>
                <input 
                    className="ui input"
                    style={{width: '50vh'}}
                    placeholder={'555-555-5555'}
                    name="phone"
                    value={values.phone}
                    onChange={onPhoneChange}
                    required
                    />
                <span className="ui field error">
                    {`${values.phone.length ===0 || telephoneCheck(values.phone)? '' : errorMessage}`}
                </span>
            </div>
           
            <div className="ui field required">
                <label>City</label>
                <input 
                style={{width: '50vh'}}
                placeholder={'Vancouver'} 
                value={values.City} 
                onChange={onCityChange}
                name="City"
                required
                ></input>
            </div>

            <div className="ui field">
                <div ref={ref} className="field ui form required">
                    <label>State</label>
                        <select 
                            name="State"
                            style={{width: '50vh'}}

                            value={values.State}
                            onChange={onStateChange}
                            required>   
                                <option value="">Select a State</option>                 
                                {States.map((state) => (
                                    <option className="item" 
                                        key ={state.label}>
                                            {state.label} 
                                    </option>
                                ))}
                        </select>
                 </div>
            </div>

            <div className="ui field ">
                <div ref={ref} className="field ui form required">
                <label>Are you a new Client?</label>
                    <select name="New"
                        value={values.New}
                        style={{width: '50vh'}}

                        onChange={onPrevClientChange}
                        required
                        >   
                            <option value="">Select</option>                 
                            {options.map((option) => (
                                <option className="item" 
                                    key ={option.label}>
                                        {option.label} 
                                </option>
                            ))}
                    </select>
                 </div>
            </div>

            <div className="ui field required">
                <label>Project Details:</label>
                <textarea
                id="project-details" 
                value={values.message} 
                name="message"
                onChange={onMessageChange} 
                //  placeholder={'It all started...'}
                 required
                ></textarea>
            </div>
            <br/>
            <div>
                <button 
                disabled={!telephoneCheck(values.phone)} 
                className="ui submit button primary"
                >Submit
                </button>
            </div>
            <br/>
        </form>

    );
};

export default Contact;