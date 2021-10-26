import React from "react";
import Counter from "./components/Counter"

class Count extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      count1: 0
    };
  }

  handlePlusClick = (btn) => {
    if (this.state.count < 100) { this.setState({ count: this.state.count += btn }) }
    else {
      this.setState({ count1: this.state.count1 += btn })
    };

  handleDownClick = (btn2) => {
      if (this.state.count < 100) { this.setState({ count: this.state.count -= btn2 }) }
      else (this.setState({ count1: this.state.count1 -= btn2 }))


  };

    render() {
      return (
        <>
          <h1>Counter</h1>
          <Counter count={this.state.count} count1={this.state.count1} substract={this.handleDownClick} increment={this.handlePlusClick} />
        </>
      )
    }
  }

export default Count