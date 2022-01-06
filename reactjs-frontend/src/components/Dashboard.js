// Dashboard
// import React, { useEffect, useRef, useState } from 'react';
import '../css/style.css';
import graph_one from '../images/chart_1.svg';
import graph_two from '../images/chart_2.svg';
import graph_three from '../images/chart_3.svg';
import image_1 from '../images/img_1.svg';
import Sidebar from './Sidebar';



const Dashboard = () => {

    return (
        <>
            <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}>
                <div className='row'>
                    <div className='col'>
                        <p className='fs-3 fw-bold' style={{ float: "left", marginLeft: 20, marginTop: 20 }}>Overview</p>
                    </div>
                    <div className='col'>
                        <p className='fs-5 fw-bold' style={{ float: "right", marginLeft: 20, marginTop: 27, color: '#7A7A7A' }}>Wednesday, January 03, 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:46 A.M.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 200, position: "relative", top: 50 }}>
                            <div className="card-body py-4 rounded" style={{ height: 90, backgroundColor: '#F492A0' }}>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-3 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>23.4K</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Annual Salary</p>

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
                                        <p className='fs-3 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>15.4K</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Total Sale</p>
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
                                        <p className='fs-5 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>November 12</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Upcoming Events</p>
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
                                        <p className='fs-3 fw-bold text-white mx-3' style={{ float: "left", marginTop: -13 }}>30.5K</p>
                                    </div>
                                    <div className='col'>
                                        <p className='text-white mx-3' style={{ float: "left", marginTop: -10 }}>Collectibles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <div className='row'>
                    <div className='col'>
                        <div className="container shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 451, height: 254, position: "relative", top: 50 }}>
                            <img alt='' className='my-4' src={graph_one} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className="container shadow bg-body rounded" style={{ marginLeft: 20, border: 0, width: 451, height: 254, position: "relative", top: 50 }}>
                            <img alt='' className='my-4' src={graph_two} />
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
        </>
    )
}

export default Dashboard
