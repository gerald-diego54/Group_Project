import React, { useState } from 'react';
import Sidebar from './Sidebar';
// import UserDetails from './UserDetails';
import fieldset from '../images/fieldset.svg';
import '../css/style.css';
import axios from 'axios';
import sweetAlert from 'sweetalert';




const AddCustomer = () => {
    const [values, setValue] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        mobile_number: 0,
        email: "",
        address_line1: "",
        address_line2: "",
        barangay: "",
        city: "",
        province: "",
        region: ""
    });

    const handleChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value });
    }

    const saveCustomer = (e) => {
        e.preventDefault();

        const data = {
            first_name: values.first_name,
            middle_name: values.middle_name,
            last_name: values.last_name,
            mobile_number: values.mobile_number,
            email: values.email,
            address_line1: values.address_line1,
            address_line2: values.address_line2,
            barangay: values.barangay,
            city: values.city,
            province: values.province,
            region: values.region
        }

        axios.post("api/customerinfo", data).then(response => {
            console.log(response.data.status);
            if (response.data.status === 200) {
                sweetAlert({
                    icon: "success",
                    title: response.data.message
                });
            }
            else if (response.data.status === 422) {
                sweetAlert({
                    icon: "error",
                    title: response.data.validateerror
                });
            }
        });
    }


    return (
        <div>
            <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}><br /><br />
                <div className='container bg-white rounded shadow' style={{ width: 1000, height: 600 }}><br />
                    {/* FieldSet 1 */}
                    <img alt='' className='my-4' src={fieldset} />
                    <div style={{ position: "relative", bottom: 450 }}>
                        <form onSubmit={saveCustomer}>
                            <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                <div className='col text-start'>
                                    {/* Firstname */}
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Firstname</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.first_name} onChange={handleChange} name='first_name' type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                {/* Middlename */}
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Middlename</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.middle_name} onChange={handleChange} name='middle_name' type="text" className="form-control" placeholder="Middle name" aria-label="Middle name" />
                                </div>
                                {/* Lastname */}
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Lastname</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.last_name} onChange={handleChange} name='last_name' type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                            {/* Phone Number */}
                            <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Phone Number</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.mobile_number} onChange={handleChange} name='mobile_number' type="number" className="form-control" placeholder="Phone number" aria-label="Phone number" min={11} />
                                </div>
                                {/* Email Address */}
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>E-mail Address</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.email} onChange={handleChange} name='email' type="email" className="form-control" placeholder="E-mail address" aria-label="Middle name" />
                                </div>
                            </div>
                            <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                {/* Address */}
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Address</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.address_line1} onChange={handleChange} name='address_line1' type="text" className="form-control" placeholder="Blk/Lot/House#" aria-label="Blk/Lot/House#" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.address_line2} onChange={handleChange} name='address_line2' type="text" className="form-control" placeholder="Street" aria-label="Street" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.barangay} onChange={handleChange} name='barangay' type="text" className="form-control" placeholder="Barangay" aria-label="Barangay" />
                                </div>
                            </div>
                            <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.city} onChange={handleChange} name='city' type="text" className="form-control" placeholder="City" aria-label="City" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.province} onChange={handleChange} name='province' type="text" className="form-control" placeholder="Province" aria-label="Province" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.region} onChange={handleChange} name='region' type="text" className="form-control" placeholder="Region" aria-label="Region" />
                                </div>
                            </div>
                            <button type="submit" id='btn-next' style={{ width: 200 }} className='btn btn-outline-primary btn-pos'>Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer
