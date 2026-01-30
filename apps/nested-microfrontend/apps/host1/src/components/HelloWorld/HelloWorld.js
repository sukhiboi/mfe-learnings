import React from "react";
const HelloWorldHost3 = React.lazy(() => import("Host3/HelloWorld"));

export default function HelloWorld() {
  return (
    <div>
      <h2>Hello from Host 1</h2>
      <HelloWorldHost3 />
    </div>
  );
}
