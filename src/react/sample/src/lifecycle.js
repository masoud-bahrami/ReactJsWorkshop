import React, { Component } from "react";

class LifeCycle extends Component {
  textInput = {
    value: "sdf"
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={() => this.forceUpdate()}
          ref={el => (this.textInput = el)}
        />
        <input
          type="text"
          onChange={() => this.forceUpdate()}
          ref={el => (this.textInput = el)}
        />
        <TestLifeCycle message={this.textInput.value} />
      </div>
    );
  }
}

export default LifeCycle;

class TestLifeCycle extends Component {
  //The constructor for a React component is called before it is mounted.
  //constructor is the first hook
  //in constructore Avoid copying props into state! This is a common mistake:
  //We can't call this.setState, instead we should just initilize state if needed!
  constructor(props) {
    console.log(" ----constructor----");
    super(props);
  }
  state = {
    message: ""
  };

  //getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
  //This method exists for rare use cases where the state depends on changes in props over time.
  //When using this method, some methods are considered as legace
  //and will not be called :
  //1-componentWillMount
  //2-componentWillReceiveProps
  //3-componentWillUpdate
  //Note that this method is fired on every render,
  // regardless of the cause.
  //This is in contrast to UNSAFE_componentWillReceiveProps, which only fires when the parent causes a re-render and not as a result of a local setState.
  static getDerivedStateFromProps(props, state) {
    console.log("------- getDerivedStateFromProps ----");
    const obj = { message: props.message };
    return obj;
  }

  //UNSAFE_componentWillMount() is invoked just before mounting occurs. It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. Generally, we recommend using the constructor() instead for initializing state.
  //Avoid introducing any side-effects or subscriptions in this method.
  // For those use cases, use componentDidMount() instead.
  //In case of using getDerivedStateFromProps, this method will not call
  UNSAFE_componentWillMount() {
    console.log(". ----UNSAFE_componentWillMount----");
  }
  componentWillMount() {
    console.log(" ----componentWillMount----");
  }

  //UNSAFE_componentWillReceiveProps() is invoked before
  //a mounted component receives new props.
  //If you need to update the state in response to prop
  // changes (for example, to reset it),
  // you may compare this.props and nextProps and perform
  //state transitions using this.setState()
  //in this method.
  //Note that if a parent component causes your component to re-render, this method will be called even if props have not changed. Make sure to compare the current and next values if you only want to handle changes.
  //React doesn’t call UNSAFE_componentWillReceiveProps() with initial props during mounting. It only calls this method if some of component’s props may update. Calling this.setState() generally doesn’t trigger UNSAFE_componentWillReceiveProps().
  //Depricated and replaced with componentWillReceiveProps
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(" ---- UNSAFE_componentWillReceiveProps-------");
  }
  componentWillReceiveProps(nextProps) {
    console.log(" ---- componentWillReceiveProps-------");
  }

  //UNSAFE_componentWillUpdate() is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs.
  //This method is not called for the initial render.
  //Note that you cannot call this.setState() here; nor should you do anything else (e.g. dispatch a Redux action) that would trigger an update to a React component before UNSAFE_componentWillUpdate() returns.
  //Typically, this method can be replaced by componentDidUpdate(). If you were reading from the DOM in this method (e.g. to save a scroll position), you can move that logic to getSnapshoSnapshotBeforeUpdate().
  //UNSAFE_componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.
  //Note that if shouldComponentUpdate return false this method is not called
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log(" ----UNSAFE_componentWillUpdate -------");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(" ----componentWillUpdate -------");
  }

  //Render will be fired when:
  //1-Component Instantiated
  //2-setState() will be called
  //3-forcUpdate() will be called
  render() {
    console.log(" ----render----");
    return <p>{this.state.message}</p>;
  }

  //componentDidMount() is invoked immediately after a
  // component is mounted (inserted into the tree).
  // Initialization that requires DOM nodes should go here.
  // If you need to load data from a remote endpoint,
  //this is a good place to instantiate the network request.
  //This method is a good place to set up any subscriptions.
  //This method fire just onece, when component is instantiated
  componentDidMount() {
    console.log(" ----componentDidMount----");
  }

  //Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props.
  // The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
  //This method only exists as a performance optimization.
  //shouldComponentUpdate() is invoked before rendering when new props or state are being received.
  //Note that in case of calling forceUpdate() this method is not called
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" ----shouldComponentUpdate----");

    let shouldUpdate = nextProps.message !== this.preState;
    return shouldUpdate;
  }

  //getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM.
  // It enables your component to capture some information from the DOM before it is potentially changed.
  // Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" ----getSnapshotBeforeUpdate----");
    return prevState;
  }

  //componentDidUpdate() is invoked immediately after updating occurs.
  //This method is not called for the initial render.
  //If your component implements the getSnapshotBeforeUpdate() lifecycle
  //the value it returns will be passed as a third “snapshot” parameter to componentDidUpdate().
  //Otherwise this parameter will be undefined.
  //Use this as an opportunity to operate on the DOM when the component has been updated.
  //This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("   ------componentDidUpdate------");
  }

  componentWillUnmount() {
    // this.chart.destroy();
    // this.resetLocalStorage();
    // this.clearSession();
  }
}
