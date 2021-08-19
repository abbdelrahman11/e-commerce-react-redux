import React, { Component } from "react";
import Form from "./component/form";
import List from "./component/List";
import "./index.css";
export default class App extends Component {
  state = {
    courses: [{ name: "sxn" }, { name: "dse" }, { name: "s" }],
    current: "",
  };
  updateCourse = (e) => {
    console.log(e.target.value);
    this.setState({
      current: e.target.value,
    });
  };
  addCourse = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let current = this.state.current;
    let courses = this.state.courses;
    if (current) {
      courses.push({ name: current });
      this.setState({
        courses,
        current: "",
      });
    }
  };
  daletItem = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };
  editItem = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;

    this.setState({
      courses,
    });
  };
  render() {
    const { courses } = this.state;
    let length = courses.length;
    const courseList = length ? (
      courses.map((course, index) => {
        return (
          <List
            editItem={this.editItem}
            daletItem={this.daletItem}
            details={course}
            index={index}
            key={index}
            editItem={this.editItem}
          />
        );
      })
    ) : (
      <h1>there is no item to show</h1>
    );

    return (
      <div className="App">
        <h2>Add Course</h2>
        <Form
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courseList}</ul>
      </div>
    );
  }
}
