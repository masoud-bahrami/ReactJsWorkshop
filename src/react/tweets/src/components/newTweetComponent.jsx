import React, { Component } from "react";

class NewTweet extends Component {
  state = {
    tweeterId: this.props.tweeterId || "",
    tweetBody: this.props.tweetBody || "",
    headerTitle: this.props.tweetBody ? "Update Tweet" : "New Tweet"
  };

  handleTweetBodyChange = event => {
    this.setState({ tweetBody: event.target.value });
  };

  handleTweeterIdChange = event => {
    this.setState({ tweeterId: event.target.value });
  };

  onSubmit = () => {
    if (this.props.tweetBody)
      this.props.onUpdate(
        this.props.id,
        this.state.tweeterId,
        this.state.tweetBody
      );
    else {
      this.props.onCreateNewTweet(this.state.tweeterId, this.state.tweetBody);
    }
  };
  render() {
    return (
      <div className="card bg-light mb-3 car-width">
        <div className="card-header">{this.state.headerTitle}</div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">ID</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter You ID"
              onChange={this.handleTweeterIdChange}
              value={this.state.tweeterId}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Body</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter tweet"
              value={this.state.tweetBody}
              onChange={this.handleTweetBodyChange}
            />
          </div>
          <button onClick={this.onSubmit} className="btn btn-success margin">
            Tweet
          </button>
          <button
            onClick={this.props.onCancelNewTweet}
            className="btn btn-warning"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default NewTweet;
