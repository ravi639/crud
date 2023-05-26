import React, { useEffect, useState } from 'react'
import { PostAPIAction } from '../Action';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GetDetailsid from '../Action/index';

const SubmitData = () => {

    const {id} = useParams()
    console.log("edit data id",id);

    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [phone, SetPhone] = useState('')
    const [country, SetCountry] = useState('')
const[getdata] =GetDetailsid(id);

 useEffect(()=>{
    const MyData =()=>{
        if(getdata.data)
        {
            SetName(getdata.data.name)
            SetEmail(getdata.data.email)
            SetPhone(getdata.data.phone)
            SetCountry(getdata.data.country)
        }
    }
    MyData();
 })


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
                        onChange={(e) => nameData(e)} defaultValue={name} />
                </div>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter Email'
                        onChange={(e) => EmailData(e)} defaultValue={email} />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" className="form-control" id="phone" placeholder='Enter Phone'
                        onChange={(e) => PhoneData(e)}defaultValue={phone}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Country</label>
                    <input type="text" placeholder='Enter Country' className="form-control" id="country"
                        onChange={(e) => CountryData(e)} defaultValue={country}/>
                </div>





                <button className="btn btn-primary" onClick={(e) => clickHandler(e)}>Submit</button>
            </div>
        </>
    )
}

export default SubmitData;