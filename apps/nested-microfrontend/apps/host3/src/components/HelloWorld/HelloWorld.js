import React from "react";

const HelloWorldHost4 = React.lazy(() => import("Host4/HelloWorld"));

export default function HelloWorld() {
  return (
    <div style={{
      background: "rgb(28 135 212 / 0.5)",
      border: "2px solid blue",
      margin: "1rem"
    }}>
      <h2>Hello from Host 3</h2>
      <HelloWorldHost4 />
    </div>
  );
}
