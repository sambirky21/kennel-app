import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import AnimalList from './Animal/AnimalList'
import OwnerList from './Owner/OwnerList'

export default class ApplicationViews extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Sam", phoneNumber: "219-508-8584"},
        { id: 2, name: "Stacy", phoneNumber: "219-508-0978" },
        { id: 3, name: "Brian", phoneNumber: "219-508-1418"},
        { id: 4, name: "Brock", phoneNumber: "219-508-6577"}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}