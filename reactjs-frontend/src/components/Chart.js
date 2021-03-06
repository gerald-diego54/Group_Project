import React, { useState, useEffect } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  );




export const BarChart = () => {
    const [allCustomers, setAllCustomers] = useState();
    const [allEvents, setAllEvents] = useState();
    const [allPayments, setAllPayments] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('api/customerStatus').then(res => {
            if (res['status'] === 200) {
                setAllCustomers(res.data.customers);
                // console.log(res.data.customers.length);
                setAllEvents(res.data.events);
                // console.log(res.data.events);
                setAllPayments(res.data.payments);
                setLoading(false);
            }
        })

    }, []);

    if (loading) {
        var whileLoading = " Loading Customer Data";
    } else {
        var eventDate;
        var monthlyBooking = [0,0,0,0,0,0,0,0,0,0,0,0];
        for(let i = 0; i < allCustomers.length; i++){
        
            eventDate = allEvents[i].event_date.split("-");
            console.log(eventDate);
            eventDate[i] = eventDate[1].replace(/^(?!00[^0])0/, '');
            monthlyBooking[eventDate[1] - 1]++;
            console.log(monthlyBooking);
            
        }
    }
    const databar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets:[
            {
                label: 'Monthly Booking',
                backgroundColor: '#EC932F',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: monthlyBooking
            }
        ]
    }
    console.log("hi")
    return (
        <div>
            <Bar 
        data={databar} 
        width={50}
        height={25}/>
        </div>
    )
}

export const LineChart = () => {
    const [allCustomers, setAllCustomers] = useState();
    const [allEvents, setAllEvents] = useState();
    const [allPayments, setAllPayments] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('api/customerStatus').then(res => {
            if (res['status'] === 200) {
                setAllCustomers(res.data.customers);
                // console.log(res.data.customers.length);
                setAllEvents(res.data.events);
                // console.log(res.data.events);
                setAllPayments(res.data.payments);
                setLoading(false);
            }
        })

    }, []);

    if (loading) {
        var whileLoading = " Loading Customer Data";
    } else {
        var eventDate;
        var collectibles;
        var monthlySales = [0,0,0,0,0,0,0,0,0,0,0,0];
        for(let i = 0; i < allCustomers.length; i++){
        
            eventDate = allEvents[i].event_date.split("-");
            console.log(eventDate);
            eventDate[i] = eventDate[1].replace(/^(?!00[^0])0/, '');
            if(parseInt(allPayments[i].collectibles) != null) {
                collectibles =  allPayments[i].collectibles;
                console.log("Collectibles from db " + collectibles);
            }
            else collectibles = 0;
            monthlySales[eventDate[1] - 1] += allPayments[i].amount - collectibles;
            console.log(monthlySales);
            
        }
    }
    const dataLine = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets:[
            {
                label: 'Monthly Sales',
                backgroundColor: '#EC932F',
                borderColor: 'rgba(255,99,132,1)',
                data: monthlySales
            }
        ]
    }
    return (
            <div>
                <Line 
                    data={dataLine} 
                    width={50}
                    height={25}
                />
            </div>
        )
    
}

