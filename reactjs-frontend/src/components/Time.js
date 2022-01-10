import React from 'react'

export const Time = () => {
    //Date and time display on Dashboard
    var today = new Date();
    var day = today.getDay();
    var date = today.getDate();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    let dayname = daylist[day];
    var hours = today.getHours();
    var minute = today.getMinutes();
    var part = '';
    if (hours < 12) {
        part = 'AM';
    }
    else {
        part = 'PM';
    }
    let monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = today.getMonth();
    let monthname = monthlist[month];
    let year = today.getFullYear();
    return (
        <div>
            <div className='col'>
                <p className='fs-5 fw-bold' style={{ float: "right", marginLeft: 20, marginTop: 27, color: '#7A7A7A' }}>{dayname + ', ' + hours + ':'
                    + minute + ' ' + part + ', ' + monthname + ' ' + date + ', ' + year}</p>
            </div>
        </div>
    )
}
