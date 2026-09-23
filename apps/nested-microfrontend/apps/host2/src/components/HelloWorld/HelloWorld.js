import React from "react";

const HelloWorldHost4 = React.lazy(() => import("Host4/HelloWorld"));

export default function HelloWorld() {
  return (
    <div style={{
      background: "rgb(34 212 28 / 0.5)",
      border: "2px solid green",
      margin: "1rem"
    }}>
      <h2>Hello from Host 2</h2>
      <HelloWorldHost4 />
    </div>
  );
}
