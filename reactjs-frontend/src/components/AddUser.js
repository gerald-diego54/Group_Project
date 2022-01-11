import React, { useState } from 'react';
import Sidebar from './Sidebar';
// import UserDetails from './UserDetails';
import fieldset from '../images/fieldset.svg';
import '../css/style.css';
import axios from 'axios';
import sweetAlert from 'sweetalert';
import { Time } from './Time';
// import {useNavigate} from 'react-router-dom';


const AddUser = () => {
    const [values, setValue] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        user_role: "",
      
    });
    const handleChange = (e) => {
        setValue({...values, [e.target.name]: e.target.value});
    }

    const saveUser = (e) => {
        e.preventDefault();

        const data = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            user_role: values.user_role,
            
        }
       
        axios.post("api/customerinfo", data).then(response => {
            console.log(response.data.status);
            if (response.data.status === 200) {
                sweetAlert({
                    icon: "success",
                    title: response.data.message,
                    button: "Next"
                }).then(response => {
                    window.location.href = "/";
                })
            }
            else if (response.data.status === 422){
                sweetAlert({
                    icon: "error",
                    title: response.data.validate_err
                });
            }
        });
    }
    return (
        <div>
             <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}>
            <div className='row'>
                    <div className='col'>
                        <p className='fs-3 fw-bold' style={{ float: "left", marginLeft: 20, marginTop: 20 }}>Overview</p> <Time />
                    </div>
                </div>
                    <div className='container bg-white rounded shadow' style={{ width: 1000, height: 600 }}><br />
                        {/* FieldSet 1 */}
                        <img alt='' className='my-4' src={fieldset} />
                        <div style={{ position: "relative", bottom: 450 }}>
                            <form onSubmit={saveUser}>
                                <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                    <div className='col text-start'>
                                        {/* Firstname */}
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Firstname</label><br />
                                        <input style={{ backgroundCDolor: "#F5F6FA", color: "#878787" }} value={values.first_name} onChange={handleChange} name='first_name' type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                 
                                    {/* Lastname */}
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Lastname</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.last_name} onChange={handleChange} name='last_name' type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>
                                {/* Phone Number */}
                                <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                    {/* Email Address */}
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>E-mail Address</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.email} onChange={handleChange} name='email' type="email" className="form-control" placeholder="E-mail address" aria-label="Middle name" />
                                    </div>
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Password</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.password} onChange={handleChange} name='password' type="password" className="form-control" placeholder="Password" aria-label="Middle name" />
                                    </div>
                                </div>
                                <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                    {/* Address */}
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Select User Role</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.address_line1} onChange={handleChange} name='address_line1' type="text" className="form-control" placeholder="Blk/Lot/House#" aria-label="Blk/Lot/House#" />
                                    </div>
                                 
                                </div>
                               

                                <button type="submit" id='btn-add' style={{ width: 200 }} className='btn btn-outline-primary btn-pos'>Add new user</button>
                            </form>
                        </div>
                    </div>
                </div>



        </div>
    )
}

export default AddUser
