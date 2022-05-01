import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formantCount()}
        </span>
        <button className="btn btn-secondary btn-sn">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formantCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
