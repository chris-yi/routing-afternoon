import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    return axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(response => {
      this.setState({
        students: response.data
      })
    }
  )
}

  render() {
    let students = this.state.students.map((student, i) => (
      <Link key={i} to={`/student/${student.id}`}>
      <h3>{ student.first_name } { student.last_name }</h3>
      </Link>
    ))
    
      
    
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
    
}