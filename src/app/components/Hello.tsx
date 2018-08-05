import * as React from "react";

interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}

export class Hello extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <h1>Webpack + React + Typescript Boilerplate</h1>
        <p>Compiler: {this.props.compiler}</p>
        <p>Bundler: {this.props.bundler}</p>
        <p>Framework: {this.props.framework}</p>
      </div>
    );
  }
}
