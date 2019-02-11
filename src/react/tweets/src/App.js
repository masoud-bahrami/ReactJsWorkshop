import React, { Component } from "react";
import "./App.css";
import TweetList from "./components/tweetListComponent";
import Footer from "./components/footerComponent";
import NewTweet from "./components/newTweetComponent";
import Tweets from "./mock/const";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isInNewForm: false,
      tweets: Tweets.data
    };
  }

  render() {
    return (
      <div className="container">
        <Footer
          isInNewForm={this.state.isInNewForm}
          onNewTweet={this.handleNewTweet}
        />
        {this.renderNewTweetForm()}
        <TweetList
          tweets={this.state.tweets}
          onDislike={this.handleDislike}
          onLike={this.handleLike}
          onUpdate={this.handleUpdate}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }

  handleLike = id => {
    this.handleLikeDislike(id, like => {
      return like + 1;
    });
  };
  handleDislike = id => {
    this.handleLikeDislike(id, like => {
      if (like > 0) like = like - 1;
      return like;
    });
  };
  handleLikeDislike(id, func) {
    let tweets = this.state.tweets;
    var tweet = tweets[tweets.findIndex(el => el.id === id)];
    tweet.like = func(tweet.like);

    tweets[tweets.findIndex(el => el.id === id)] = tweet;
    this.setState({
      tweets: tweets
    });
  }
  handleUpdate = (id, tweeterId, tweetBody) => {
    let tweets = this.state.tweets;
    var tweet = tweets[tweets.findIndex(el => el.id === id)];
    tweet.tweeterId = tweeterId;
    tweet.tweetBody = tweetBody;

    tweets[tweets.findIndex(el => el.id === id)] = tweet;
    this.setState({
      tweets: tweets
    });
  };

  handleDelete = id => {
    let tweets = this.state.tweets.filter(tweet => tweet.id !== id);
    this.setState({
      tweets: tweets
    });
  };
  handleNewTweet = () => {
    this.setState({ isInNewForm: true });
    this.isInNewForm = true;
  };

  handleCancelNewTweet = () => {
    this.setIsInNewForm(false);
  };
  handleCreateNewTweet = (tweeterId, tweetBody) => {
    this.setIsInNewForm(false);

    this.setState({
      tweets: [...this.state.tweets, this.createNewTweet(tweeterId, tweetBody)]
    });
  };
  createNewTweet(tweeterId, tweetBody) {
    const newTweet = {
      id: this.getLastTweetId() + 1,
      tweeterId: tweeterId,
      like: 0,
      tweetBody: tweetBody,
      lastUpdate: "Last Update now"
    };
    return newTweet;
  }
  getLastTweetId() {
    if (this.state.tweets.length === 0) return 0;
    const max = this.state.tweets.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );
    return max.id;
  }
  setIsInNewForm(isInNewForm) {
    this.setState({ isInNewForm: isInNewForm });
  }
  renderNewTweetForm() {
    return this.state.isInNewForm ? (
      <NewTweet
        onCancelNewTweet={this.handleCancelNewTweet}
        onCreateNewTweet={this.handleCreateNewTweet}
      />
    ) : (
      ""
    );
  }
}

export default App;
