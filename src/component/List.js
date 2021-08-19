import React, { Component } from "react";

export default class List extends Component {
  state = {
    isEdit: false,
  };
  rendercourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => this.props.daletItem(this.props.index)}>
          Delet Course
        </button>
        <button onClick={() => this.toggle()}>edit </button>
      </li>
    );
  };

  toggle = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };
  updateitem = (e) => {
    e.preventDefault();
    this.props.editItem(this.props.index, this.input.value);
    this.toggle();
  };
  updatecourse = () => {
    return (
      <form onSubmit={this.updateitem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        ></input>
        <button>Update course</button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;
    return (
      <React.Fragment>
        {isEdit ? this.updatecourse() : this.rendercourse()}
      </React.Fragment>
    );
  }
}
