import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
// import UserDetails from './UserDetails';
import fieldset2 from '../images/fieldset.svg';
import '../css/style.css';
import axios from 'axios';
import sweetAlert from 'sweetalert';
import { useParams } from 'react-router-dom';
import { Time } from './Time';

function EditEvent() {
    const [values_event, setValues] = useState([]);
    const [val, setVal] = useState({});
    const { id } = useParams();

    console.log(values_event);
    const handleChange = (e) => {
        setValues({ ...values_event, [e.target.name]: e.target.value });
    }
    console.log(values_event);

    useEffect(() => {
        const customer_id = id;
        axios.get(`api/editevent/${customer_id}`).then(response => {
            console.log("test ", response.data.events);
            if (response.data.status === 200) {
                setValues(response.data.events).then(response => {
                    window.location.href = "/viewcustomer";
                });
                // setLoading(false);
            }
            else if (response.data.status === 404) {
                sweetAlert({
                    icon: "error",
                    title: response.data.message
                });
            }
        });
    }, [id]);

    const updateEvent = (e) => {
        e.preventDefault();
        const data = {
            event_name: values_event.event_name,
            event_date: values_event.event_date,
            event_status: values_event.event_status,
            event_address_line1: values_event.event_address_line1,
            event_address_line2: values_event.event_address_line2,
            event_barangay: values_event.event_barangay,
            event_city: values_event.event_city,
            event_province: values_event.event_province,
            event_region: values_event.event_region
        }
        axios.put(`api/updateevent/${id}`, data).then(response => {
            console.log(response.data.status);
            if (response.data.status === 200) {
                axios.get(`api/editpayment/${id}`).then(
                    response => {
                        // console.log(response.data.status)
                        if (response.data.status === 200) {
                            setVal(response.data.payments);
                            console.log(val.payment_type)
                            if (val.payment_type === "Cheque") {
                                window.location.href = `/viewcustomer/editcheque/${id}`; // edit payment route here... 
                            }
                            else if (val.payment_type === "Cash") {
                                window.location.href = `/viewcustomer/editpayment/${id}`; // edit payment route here... 
                            }
                        }
                        else if (response.data.status === 404) {
                            sweetAlert('error', response.data.message).then(response => {
                                window.location.href = "/editcustomer";
                            });
                        }
                    });
                sweetAlert({
                    icon: "success",
                    title: response.data.message
                });
            }
            else if (response.data.status === 422) {
                // console.log(response.data.status);
                sweetAlert({
                    icon: "info",
                    title: "Required Fields!"
                });
            }
            else if (response.data.status === 404) {
                sweetAlert({
                    icon: "error",
                    title: "No data found!"
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
                    <img alt='' className='my-4' src={fieldset2} />
                    <form onSubmit={updateEvent} style={{ position: "relative", bottom: 440 }}>
                        <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                            <div className='col text-start'>
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Event Type</label><br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_name} onChange={handleChange} name='event_name' type="text" placeholder="Events" className="form-control" aria-label="First name" />
                            </div>
                            {/* Date */}
                            <div className='col text-start'>
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Date</label><br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_date} onChange={handleChange} name='event_date' type="date" className="form-control" aria-label="Date" />
                            </div>
                            {/* Event Status */}
                            <div className='col text-start'>
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Event Status</label><br />
                                <select style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_status} onChange={handleChange} name='event_status' type="text" className="form-control" aria-label="Last name">
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
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_address_line1} onChange={handleChange} name='event_address_line1' type="text" className="form-control" placeholder="Blk/Lot/House#" aria-label="Blk/Lot/House#" />
                            </div>
                            <div className='col text-start'>
                                <br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_address_line2} onChange={handleChange} name='event_address_line2' type="text" className="form-control" placeholder="Street" aria-label="Street" />
                            </div>
                            <div className='col text-start'>
                                <br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_barangay} onChange={handleChange} name='event_barangay' type="text" className="form-control" placeholder="Barangay" aria-label="Barangay" />
                            </div>
                        </div>
                        <div className='row lh-lg' style={{ marginLeft: 30, marginRight: 30 }}>
                            <div className='col text-start'>
                                <br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_city} onChange={handleChange} name='event_city' type="text" className="form-control" placeholder="City" aria-label="City" />
                            </div>
                            <div className='col text-start'>
                                <br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_province} onChange={handleChange} name='event_province' type="text" className="form-control" placeholder="Province" aria-label="Province" />
                            </div>
                            <div className='col text-start'>
                                <br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787" }} value={values_event.event_region} onChange={handleChange} name='event_region' type="text" className="form-control" placeholder="Region" aria-label="Region" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <button type='submit' style={{ width: 200 }} className='btn btn-outline-primary btn-pos2'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEvent
