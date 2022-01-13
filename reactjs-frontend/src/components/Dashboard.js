// Dashboard
import React, { useState, useEffect } from 'react';
import '../css/style.css';
import graph_three from '../images/chart_3.svg';
import image_1 from '../images/img_1.svg';
import Sidebar from './Sidebar';
import { Time } from './Time';
import axios from 'axios';
import { BarChart, LineChart } from './Chart';

// 

const Dashboard = () => {
    const [noOfCustomer, setNoOfCustomer] = useState("");
    const [nextEvent, setNextEvent] = useState("");
    const [totalCollectibles, setTotalCollectibles] = useState("");
    const [totalSales, setTotalSales] = useState("");
    const [countEvent,setcountEvent] =useState([]);
    const [loading, setLoading] = useState(true);

    var numOfCustomers = "No Data";
    var total = "No Sales";
    var collect = "No Collectibles";
    var nextDate = "No Event";
    
    useEffect(() => {
        axios.get('api/dashboard').then(res => {
            if (res['status'] === 200) {
                setNoOfCustomer(res.data.total_customer);
                setTotalSales(res.data.total);
                setTotalCollectibles(res.data.collectibles);
                setNextEvent(res.data.event.event_date);
                setcountEvent(res.data['eventcount'])
                console.log('test',setcountEvent);
                setLoading(false);
            }
        });
    }, []);

    if (loading) {
        var whileLoading = " Loading Customer Data";
    }
    else if (noOfCustomer === 0)  {
        numOfCustomers = "No Data";
        total = "No Sales";
        collect = "No Collectibles";
        nextDate = "No Event";

    }
    
    else {
        numOfCustomers = noOfCustomer;
        total = totalSales;
        collect = totalCollectibles;
        nextDate = nextEvent;
    }
    return (
        <div>
            <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}>
                <h2>{whileLoading}</h2>
                <div className='row'>
                    <div className='col'>
                        <p className='fs-3 fw-bold' style={{ float: "left", marginLeft: 20, marginTop: 20 }}>Overview</p> <Time />
                    </div>
                </div>
                <div className='row'>
                <div className='col'>
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 200, position: "relative", top: 50 }}>
                            <div className="card-body py-4 rounded" style={{ height: 90, backgroundColor: '#F492A0' }}>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-5 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>{ numOfCustomers }</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Customer's Count</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 200, position: "relative", top: 50 }}>
                            <div className="card-body py-4 rounded" style={{ height: 90, backgroundColor: '#9194CE' }}>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-5 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>{ "₱ " + total }</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Total Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 200, position: "relative", top: 50 }}>
                            <div className="card-body py-4 rounded" style={{ height: 90, backgroundColor: '#FEB161' }}>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-5 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>{ "₱ " + collect }</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Collectibles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 200, position: "relative", top: 50 }}>
                            <div className="card-body py-4 rounded" style={{ height: 90, backgroundColor: '#00A8BF' }}>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-5 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>{ nextDate }</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Upcomming Event</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <div className='row'>
                    <div className='col'>
                        <div className="container shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 451, height: 254, position: "relative", top: 50 }}>
                            <BarChart name="Monthly Booking"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="container shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 451, height: 254, position: "relative", top: 50 }}>
                            <LineChart name="Monthly Sales"/>
                        </div>
                    </div>
                </div><br /><br />
                <div className='row'>
                    <div className='col'>
                        <div className="container shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 451, height: 254, position: "relative", top: 50 }}>
                            <img alt='' className='my-4' src={graph_three} />
                        </div>
                    </div>
                    <div className='col'><br />
                        <img alt='' className='my-5' src={image_1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
