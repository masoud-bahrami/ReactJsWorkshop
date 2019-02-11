import React, { Component } from "react";

class ApiCall extends Component {
  state = {
    employees: []
  };
  constructor() {
    super();
  }
  options = {
    method: "POST",
    body: JSON.stringify("myPost"),
    headers: {
      "Content-Type": "application/json"
    }
  };

  async fetchUsers(endpoint) {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(res.status); // 404
    }

    const data = await res.json();
    return data;
  }

  componentDidMount() {
    //also we can using  fetchUsers
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        //Check whether respose is OK.
        //If Ok, return json of the result
        if (res.ok) {
          return res.json();
        }
        //else handle error
        else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          });
        }
      })
      //fetch is a promise based api
      //so we can chain some callback
      //Normilize result into custom object
      .then(res =>
        res.map(user => {
          return Object.create({
            id: user.id,
            employee_name: user.employee_name,
            employee_salary: user.employee_salary,
            employee_age: user.employee_age,
            profile_image: user.profile_image
          });
        })
      )
      //update state
      .then(employees => this.setState({ employees: employees }));
  }
  render() {
    return (
      <ul>
        {this.state.employees.map((user, i) => (
          <li key={i}>
            {user.id} | {user.employee_name} | {user.employee_salary}|{" "}
            {user.employee_age}
          </li>
        ))}
      </ul>
    );
  }
}

export default ApiCall;
