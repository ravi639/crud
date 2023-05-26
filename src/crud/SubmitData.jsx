import React, { useState } from 'react'
import { PostAPIAction } from '../Action';
import { useDispatch } from 'react-redux'

const SubmitData = () => {

    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [phone, SetPhone] = useState('')
    const [country, SetCountry] = useState('')

    const dispatch = useDispatch();

    const nameData = (e) => {
        SetName(e.target.value)
    };

    const EmailData = (e) => {
        SetEmail(e.target.value)
    };

    const PhoneData = (e) => {
        SetPhone(e.target.value)
    };

    const CountryData = (e) => {
        SetCountry(e.target.value)
    };

    const clickHandler = (e) => {
        const finalData = {
            name: name,
            email: email,
            phone: phone,
            country: country
        }
        dispatch(PostAPIAction(finalData))

        if(finalData){
            window.location.reload(false);
        }
    }



    return (
        <>
            <div className="container">


                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder='Enter Name'
                        onChange={(e) => nameData(e)} />
                </div>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter Email'
                        onChange={(e) => EmailData(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" className="form-control" id="phone" placeholder='Enter Phone'
                        onChange={(e) => PhoneData(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Country</label>
                    <input type="text" placeholder='Enter Country' className="form-control" id="country"
                        onChange={(e) => CountryData(e)} />
                </div>





                <button className="btn btn-primary" onClick={(e) => clickHandler(e)}>Submit</button>
            </div>
        </>
    )
}

export default SubmitData;