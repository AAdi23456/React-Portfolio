/**
 * This is a React component that renders a preloader element based on the value of a "load" prop.
 * @param props - props is an object that contains all the properties passed to the Pre component.
 * These properties can be accessed using dot notation, for example, props.load will give the value of
 * the load property passed to the component.
 * @returns A React functional component that renders a `div` element with an `id` attribute based on
 * the value of the `load` prop. If `load` is truthy, the `id` will be "preloader", otherwise it will
 * be "preloader-none".
 */
import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
