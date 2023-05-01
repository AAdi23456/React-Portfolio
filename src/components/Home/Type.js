/**
 * The function exports a React component that uses the Typewriter library to display a looping
 * sequence of strings.
 * @returns A component called `Type` that renders a `Typewriter` component with some options and
 * strings to be typed out.
 */
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FULL STACK DEVELOPER",
          "LOVE TO CODE ❤️",
          "Node.js",
          "WEB DEVELOPER"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
