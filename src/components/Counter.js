import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", width: "50%", alignItems: "center" }}>
                <h2>{this.props.count}</h2>
                <button className="moreOrLess" style={{ backgroundColor: "red", padding: "10px 20px", borderRadius: "50%" }} onClick={this.props.increment}>+</button>
                <button className="moreOrLess" style={{ backgroundColor: "blue", padding: "10px 20px", borderRadius: "50%" }} onClick={this.props.substract}>-</button>
                <h2>{this.props.count1}</h2>
                <button className="moreOrLess" style={{ backgroundColor: "red", padding: "10px 20px", borderRadius: "50%" }} onClick={this.props.increment}>+</button>
                <button className="moreOrLess" style={{ backgroundColor: "blue", padding: "10px 20px", borderRadius: "50%" }} onClick={this.props.substract}>-</button>

            </div>
        )
    }
}

export default Counter