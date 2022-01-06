import React, { Component } from 'react'
import fieldset2 from '../images/fieldset_2.svg';
import '../css/style.css';
import Sidebar from './Sidebar';

export class Venue extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

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
                        <img className='my-4' src={fieldset2} />
                        {/* Fieldsets 2 */}
                        <div style={{ position: "relative", bottom: 440 }}>
                            <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                <div className='col text-start'>
                                    {/* Event Type */}
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Event Type</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_name} onChange={handleChange("event_name")} name='event_name' type="text" placeholder="Events" className="form-control" aria-label="First name" />
                                </div>
                                {/* Date */}
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Date</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_date} onChange={handleChange("event_date")} name='event_date' type="date" className="form-control" aria-label="Date" />
                                </div>
                                {/* Event Status */}
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Event Status</label><br />
                                    <select style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_status} onChange={handleChange("event_status")} name='event_status' type="text" className="form-control" aria-label="Last name">
                                        <option>-- Select --</option>
                                        <option>Pending</option>
                                        <option>Done</option>
                                    </select>
                                </div>
                            </div><br />
                            {/* Address Events */}
                            {/* Address */}
                            <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                {/* Address */}
                                <div className='col text-start'>
                                    <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Event Address</label><br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_address_line1} onChange={handleChange("event_address_line1")} name='address_line1' type="text" className="form-control" placeholder="Blk/Lot/House#" aria-label="Blk/Lot/House#" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_address_line2} onChange={handleChange("event_address_line2")} name='address_line2' type="text" className="form-control" placeholder="Street" aria-label="Street" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_barangay} onChange={handleChange("event_barangay")} name='barangay' type="text" className="form-control" placeholder="Barangay" aria-label="Barangay" />
                                </div>
                            </div>
                            <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_city} onChange={handleChange("event_city")} name='city' type="text" className="form-control" placeholder="City" aria-label="City" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_province} onChange={handleChange("event_province")} name='province' type="text" className="form-control" placeholder="Province" aria-label="Province" />
                                </div>
                                <div className='col text-start'>
                                    <br />
                                    <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values.event_region} onChange={handleChange("event_region")} name='region' type="text" className="form-control" placeholder="Region" aria-label="Region" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <button onClick={this.back} type='button' style={{ width: 200 }} className='btn btn-outline-primary btn-pos2'>Back</button>
                                </div>
                                <div className='col'>
                                    <button onClick={this.continue} type='button' style={{ width: 200 }} className='btn btn-outline-success btn-pos3'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Venue
