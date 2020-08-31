import "./Notification.scss";
import React, { Component } from "react";

export default class Notification extends Component {
  show = (params) => {
    // this.props.info = params
    return "regsrewgseg";
  };
  render() {
    return (
      <>
        {/* {this.props.info ? ( */}
          <div className={`notify ${this.props.show && 'show'}`}>
            <h4>{this.props.info}</h4>
          </div>
        {/* ) : null} */}
      </>
    );
  }
}
