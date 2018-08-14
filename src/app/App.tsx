import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { Logger } from "../common/logger";

declare let module: any;
let logger: Logger = new Logger("INFO", true, true, "APP");

ReactDOM.render(
  <Hello compiler="Typescript" framework="React" bundler="Webpack" />,
  document.getElementById("root")
);

logger.log("INFO", "this is a test message", true);

if (module.hot) {
  module.hot.accept();
}
