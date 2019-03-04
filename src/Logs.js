import React, {PureComponent, Component} from "react";

export default class Logs extends Component {
    render() {
        return (
            <div className={"log-panel"}>
                {Object.keys(this.props.logs).map((jsonKey, index) => (
                    <LogSection key={index} jsonValue={this.props.logs[jsonKey]}>{jsonKey}</LogSection>
                ))}
            </div>
        );
    }
}

class LogSection extends PureComponent {
    render() {
        let content;
        if (!Array.isArray(this.props.jsonValue)) {
            content = <span className={"log-header"}>{this.props.jsonValue}</span>;
        } else {
            content = <div>
                <span className={"log-header"}>{this.props.children}</span>
                {this.props.jsonValue.map((value, index) => (
                    <LogjsonValue key={index}>{value}</LogjsonValue>
                ))}
            </div>;
        }
        return content;
    }
}

class LogjsonValue extends PureComponent {
    render() {
        return <p>
            <span className={"log-field log-timestamp"}>{this.props.children.timestamp}</span>
            <span className={"log-field log-lvl"}>{this.props.children.lvl}</span>
            <span className={"log-field"}>{this.props.children.message}</span>
        </p>
    }
}
