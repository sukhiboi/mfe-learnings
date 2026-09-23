import React from "react";
const HelloWorldHost3 = React.lazy(() => import("Host3/HelloWorld"));

export default function HelloWorld() {
  return (
    <div style={{
      background: "rgb(212 212 28 / 0.5)",
      border: "2px solid yellow",
      margin: "1rem"
    }}>
      <h2>Hello from Host 1</h2>
      <HelloWorldHost3 />
    </div>
  );
}
