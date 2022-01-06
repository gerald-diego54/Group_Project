// Add Customers
import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Venue from './Venue';

export default class AddCustomer extends Component {
    // state of the variables
    state = {
        step: 1,
        first_name: "",
        middle_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        event_name: "",
        event_date: "",
        event_status: "",
        address_line1: "",
        address_line2: "",
        barangay: "",
        city: "",
        province: "",
        region: "",
        event_address_line1: "",
        event_address_line2: "",
        event_barangay: "",
        event_city: "",
        event_province: "",
        event_region: ""
    }

    

    // Step indicators
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }




    render() {
// destructuring the variables
        const { step } = this.state;
        const {
            first_name,
            middle_name,
            last_name,
            mobile_number,
            email,
            event_name,
            event_date,
            event_status,
            address_line1,
            address_line2,
            barangay,
            city,
            province,
            region,
            event_address_line1,
            event_address_line2,
            event_barangay,
            event_city,
            event_province,
            event_region
        } = this.state;

// storing values in variable
        const values = {
            first_name,
            middle_name,
            last_name,
            mobile_number,
            email,
            event_name,
            event_date,
            event_status,
            address_line1,
            address_line2,
            barangay,
            city,
            province,
            region,
            event_address_line1,
            event_address_line2,
            event_barangay,
            event_city,
            event_province,
            event_region
        }

// Indicator steps flow
        switch (step) {
            case 1:
               
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 2:
                return (
                    <Venue
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (<h1>Success</h1>)
              
            default:
        }

        

    }

}

