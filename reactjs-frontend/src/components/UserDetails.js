import React, { Component } from 'react'
import fieldset from '../images/fieldset.svg';
import '../css/style.css';
import Sidebar from './Sidebar';


export class UserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const { values, handleChange } = this.props;
        return (
            <>
            <Sidebar />
                <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}><br /><br />
                    <div className='container bg-white rounded shadow' style={{ width: 1000, height: 600 }}><br />
                        {/* FieldSet 1 */}
                        <img className='my-4' src={fieldset} />
                        <div style={{ position: "relative", bottom: 450 }}>
                            <div id='Tab'>
                                <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                    <div className='col text-start'>
                                        {/* Firstname */}
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Firstname</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.first_name} onChange={handleChange("first_name")} name='first_name' type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    {/* Middlename */}
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Middlename</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.middle_name} onChange={handleChange("middle_name")} name='middle_name' type="text" class="form-control" placeholder="Middle name" aria-label="Middle name" />
                                    </div>
                                    {/* Lastname */}
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Lastname</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.last_name} onChange={handleChange("last_name")} name='last_name' type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>
                                {/* Phone Number */}
                                <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Phone Number</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.mobile_number} onChange={handleChange("mobile_number")} name='mobile_number' type="number" class="form-control" placeholder="Phone number" aria-label="Phone number" min={1} max={11} />
                                    </div>
                                    {/* Email Address */}
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>E-mail Address</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.email} onChange={handleChange("email")} name='email' type="email" class="form-control" placeholder="E-mail address" aria-label="Middle name" />
                                    </div>
                                </div>
                                <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                    {/* Address */}
                                    <div className='col text-start'>
                                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Address</label><br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.address_line1} onChange={handleChange("address_line1")} name='address_line1' type="text" class="form-control" placeholder="Blk/Lot/House#" aria-label="Blk/Lot/House#" />
                                    </div>
                                    <div className='col text-start'>
                                        <br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.address_line2} onChange={handleChange("address_line2")} name='address_line2' type="text" class="form-control" placeholder="Street" aria-label="Street" />
                                    </div>
                                    <div className='col text-start'>
                                        <br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.barangay} onChange={handleChange("barangay")} name='barangay' type="text" class="form-control" placeholder="Barangay" aria-label="Barangay" />
                                    </div>
                                </div>
                                <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                    <div className='col text-start'>
                                        <br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.city} onChange={handleChange("city")} name='city' type="text" class="form-control" placeholder="City" aria-label="City" />
                                    </div>
                                    <div className='col text-start'>
                                        <br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.province} onChange={handleChange("province")} name='province' type="text" class="form-control" placeholder="Province" aria-label="Province" />
                                    </div>
                                    <div className='col text-start'>
                                        <br />
                                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.region} onChange={handleChange("region")} name='region' type="text" class="form-control" placeholder="Region" aria-label="Region" />
                                    </div>
                                </div>
                                <button onClick={this.continue} id='btn-next' type='button' style={{ width: 200 }} className='btn btn-outline-primary btn-pos'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserDetails