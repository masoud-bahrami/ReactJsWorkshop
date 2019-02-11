import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  renderBody() {
    return this.props.isInNewForm ? (
      "You are in new TweetForm stage"
    ) : (
      <button
        className="btn btn-info margin"
        onClick={() => this.props.onNewTweet()}
      >
        New Tweet <FontAwesomeIcon icon="plus" />
      </button>
    );
  }
  render() {
    return <div className="card-footer car-width">{this.renderBody()}</div>;
  }
}

export default Footer;
