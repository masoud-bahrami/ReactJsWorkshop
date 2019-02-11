import React, { Component } from "react";
import Tweet from "./tweetComponent";
class TweetList extends Component {
  render() {
    return this.props.tweets.map(tweet => (
      <Tweet
        key={tweet.id}
        tweet={tweet}
        onDislike={this.props.onDislike}
        onLike={this.props.onLike}
        onUpdate={this.props.onUpdate}
        onDelete={this.props.onDelete}
      />
    ));
  }
}

export default TweetList;
