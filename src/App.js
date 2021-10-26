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

  firstButtonPlus = () => {
    if (this.state.count < 100) { this.setState({ count: this.state.count + 1 }) }
    if (this.state.count === this.state.count1) {
      this.setState({ count1: this.state.count1 + 1 })
    }
  }
  firstButtonDown = () => {
    if (this.state.count > 0) { this.setState({ count: this.state.count - 1 }) }
  }

  secondButtonPlus = () => {
    if (this.state.count1 < 100) { this.setState({ count1: this.state.count1 + 1 }) }
  }

  secondButtonDown = () => {
    if (this.state.count1 > 0) { 
      this.setState({ count1: this.state.count1 - 1 }) 
    if (this.state.count === this.state.count1) { this.setState({ count: this.state.count - 1 }) }
  }}



  render() {
    return (
      <>
        <h1>Counter</h1>
        <Counter count={this.state.count} substract={this.firstButtonDown} increment={this.firstButtonPlus} />
        <Counter count1={this.state.count1} increment={this.secondButtonPlus} substract={this.secondButtonDown} />
      </>
    )
  }
}
export default Count