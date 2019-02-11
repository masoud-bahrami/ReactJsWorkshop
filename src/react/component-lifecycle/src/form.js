import React, { Component } from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      value: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.refs.textInput);
    this.setState({ value: this.textInput.value });
  };

  render() {
    return (
      <div>
        <h1>React Ref - createRef</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={el => (this.textInput = el)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
