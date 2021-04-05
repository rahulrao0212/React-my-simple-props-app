import { Component } from "react";

export default class PropDemo extends Component {
    render() {
        console.log(this.props);
        return (
            <span>{this.props.title} {this.props.name}</span>
        )
    }
}