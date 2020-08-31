import React from "react";
import "./Button.scss";

export default function Button(props) {
  const className = ["button"];
  if (props.type === 'add') {
    className.push('add');
  } else if(props.type === 'submit') {
    className.push('submit');
  }
  return (
  <button className={className.join(' ')}>{props.icon ? <img src={props.icon}></img>  : ''}{props.children}</button>
  );
}
