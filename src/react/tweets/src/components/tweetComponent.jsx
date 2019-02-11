import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import NewTweet from "./newTweetComponent";

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.tweet = this.props.tweet;
  }
  getClass = () => {
    let className = "card text-white mb-3 car-width";
    if (this.tweet.like <= 5) return className + " bg-danger";
    else if (this.tweet.like <= 10) return className + " bg-warning";
    else if (this.tweet.like <= 15) return className + " bg-primary";
    else return className + " bg-success";
  };
  state = { editMode: false };
  handleUpdate = () => {
    this.setState({ editMode: true });
  };

  render() {
    if (this.state.editMode)
      return (
        <NewTweet
          id={this.tweet.id}
          tweeterId={this.tweet.tweeterId}
          tweetBody={this.tweet.tweetBody}
          onCancelNewTweet={() => this.setState({ editMode: false })}
          onUpdate={(id, tweeterId, tweetBody) => {
            this.setState({ editMode: false });
            this.props.onUpdate(id, tweeterId, tweetBody);
          }}
        />
      );
    return (
      <div className={this.getClass()}>
        <div className="card-header">
          {this.tweet.tweeterId}
          <FontAwesomeIcon icon="retweet" />
        </div>
        <div className="card-body">
          <p className="card-text">{this.tweet.tweetBody}</p>
        </div>
        <div className="card-footer ">
          <small className=" card-footer-left">
            {this.tweet.like}
            <FontAwesomeIcon icon="heart" />
          </small>
          <small className=" card-footer-left">
            <button onClick={() => this.props.onLike(this.tweet.id)}>
              <FontAwesomeIcon icon="thumbs-up" />
            </button>
          </small>
          <small className=" card-footer-left">
            <button
              disabled={this.tweet.like === 0}
              onClick={() => this.props.onDislike(this.tweet.id)}
            >
              <FontAwesomeIcon icon="thumbs-down" />
            </button>
          </small>
          <small className="card-footer-rigth">{this.tweet.lastUpdate}</small>
          <small className="card-footer-rigth">
            <button onClick={() => this.props.onDelete(this.tweet.id)}>
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </small>
          <small className="card-footer-rigth">
            <button onClick={this.handleUpdate}>
              <FontAwesomeIcon icon="marker" />
            </button>
          </small>
        </div>
      </div>
    );
  }
}

export default Tweet;
